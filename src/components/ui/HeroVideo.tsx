type HeroVideoProps = {
  video: string;
};

const HeroVideo = ({ video }: HeroVideoProps) => {
  return (
    <div className="relative mx-auto w-full aspect-video overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
