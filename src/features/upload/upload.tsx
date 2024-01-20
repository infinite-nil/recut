import { ArrowDown } from 'lucide-react';

const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = () => {
  // Todo: Handle input change
};

function Upload() {
  return (
    <div className="relative inset-0 flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-4xl">Drop a video to edit</p>
      <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-gray-400">
        <ArrowDown className="text-gray-400" size={62} strokeWidth={1} />
      </div>
      <p>Or click to browse</p>
      <input
        accept="video/*"
        className="absolute inset-0 appearance-none opacity-0"
        onChange={handleInputChange}
        title="Select a video to start"
        type="file"
      />
    </div>
  );
}

export { Upload };
