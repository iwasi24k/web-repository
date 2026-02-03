import { useEffect, useState } from "react";

type HeroYouTubeProps = {
  videoId: string;
  titleName: string;
};

const HeroYouTube = ({ videoId, titleName }: HeroYouTubeProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <iframe
      className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
      allow="autoplay; fullscreen"
      referrerPolicy="strict-origin-when-cross-origin"
      title={titleName}
    />
  );
};

export default HeroYouTube;
