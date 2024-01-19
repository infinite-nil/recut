import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import { Video, useVideo } from './video';

const validMockVideo = new File([], 'video.mp4', { type: 'video/mp4' });
const invalidMockVideo = new File([], 'audio.mp3', { type: 'audio/mp3' });

describe('useVideo', () => {
  afterEach(() => cleanup());

  test('should render video empty', () => {
    const video = renderHook(() => useVideo());

    expect(video.result.current.video).toBeUndefined();
  });

  test('should render change the video state', () => {
    const video = renderHook(() => useVideo());

    act(() => {
      video.result.current.onVideoSelect(validMockVideo as Video);
    });

    expect(video.result.current.video).toBe(validMockVideo);
  });

  test('should render not change the video state', () => {
    const video = renderHook(() => useVideo());

    act(() => {
      video.result.current.onVideoSelect(undefined);
      video.result.current.onVideoSelect(invalidMockVideo as Video);
    });

    expect(video.result.current.video).toBeUndefined();
  });
});
