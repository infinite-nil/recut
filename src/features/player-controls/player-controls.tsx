import { Pause, Play } from 'lucide-react';

function PlayerControls() {
  const playing = false;

  return (
    <div className="mx-2 flex items-center justify-center px-2 hover:bg-gray-200">
      {!playing ? (
        <Play size={16} strokeWidth={1} />
      ) : (
        <Pause size={16} strokeWidth={1} />
      )}
    </div>
  );
}

export { PlayerControls };
