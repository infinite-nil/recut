type Props = {
  video: string;
};

function Player({ video }: Props) {
  if (!video) return null;

  return (
    <div>
      <video className="aspect-video w-[800px] object-cover" muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export { Player };
