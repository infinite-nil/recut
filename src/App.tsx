import { PlayerControls } from './features/player-controls/player-controls';
import { Player } from './features/player/player';
import { Upload } from './features/upload/upload';

function App() {
  const video = '/video.mp4';

  return (
    <div className="select-none">
      {/* Player */}
      <div className="flex h-[480px] items-center justify-center bg-gray-100">
        {!video ? <Upload /> : <Player video={video} />}
      </div>

      {/* Player state */}
      <div className="border-y border-gray-200">
        <div className="relative mx-auto flex justify-between py-2">
          <div className="flex w-[120px] justify-center">
            {/* <div>Segements</div> */}
          </div>

          <div className="flex w-[120px] justify-center">
            <PlayerControls />
          </div>

          <div className="flex w-[120px] justify-center">
            <div className="pointer-events-none mx-2 rounded-full border border-gray-300 bg-gray-200 px-2 tabular-nums">
              <span>00:</span>
              <span>00:</span>
              <span>00.</span>
              <span className="text-xs">000</span>
            </div>
          </div>
        </div>
      </div>

      <div>{video?.name}</div>
    </div>
  );
}

export default App;
