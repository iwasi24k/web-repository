type HeroVideoProps = {
  video: string;
}

const HeroVideo = ({ video }: HeroVideoProps) => {
  return (
    <div className="relative mx-auto w-full aspect-video overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default HeroVideo;
