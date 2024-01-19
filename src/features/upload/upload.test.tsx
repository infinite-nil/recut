import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test } from 'vitest';
import { Upload } from './upload';

const validMockVideo = new File([], 'video.mp4', { type: 'video/mp4' });

describe('Upload', () => {
  afterEach(() => cleanup());

  test('should render video empty', async () => {
    render(<Upload />);

    const input = screen.getByTitle(
      /select a video to start/gi,
    ) as HTMLInputElement;

    await userEvent.upload(input, validMockVideo);

    expect(input.files?.length).toBe(1);
    expect((input.files as FileList)[0].name).toBe('video.mp4');
  });
});
