import { useEffect, useState } from "react";

type HeroYouTubeProps = {
  videoId: string;
};

const HeroYouTube = ({ videoId }: HeroYouTubeProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); // 500–800ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full aspect-video overflow-hidden bg-black">
      {/* YouTube iframe */}
      <iframe
        className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
        allow="autoplay; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

type HeroVideoProps =
  | { type: "file"; src: string }
  | { type: "youtube"; videoId: string };

const HeroVideo = (props: HeroVideoProps) => {
  if (props.type === "youtube") {
    return <HeroYouTube videoId={props.videoId} />;
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;