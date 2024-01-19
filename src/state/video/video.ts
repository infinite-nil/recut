import { atom, useAtom } from 'jotai';

export type Video =
  | (File & {
      type: 'video/mp4';
    })
  | undefined;

const videoAtom = atom<Video | undefined>(undefined);

function useVideo() {
  const [video, setVideo] = useAtom(videoAtom);

  const onVideoSelect = (file: Video) => {
    if ((file && file.type === 'video/mp4') || file === undefined) {
      setVideo(file);
    }
  };

  return {
    onVideoSelect,
    video,
  };
}

export { useVideo, videoAtom };
