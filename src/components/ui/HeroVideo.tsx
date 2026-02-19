import HeroYouTube from "./HeroYouTube";

type VideoBaseProps = {
  className?: string;
  itemClassName?: string;
  titleName?: string;
};

type YouTubeProps = VideoBaseProps & {
  type: "youtube";
  videoId: string;
  titleName: string;
};

type FileVideoProps = VideoBaseProps & {
  type: "file";
  src: string;
  titleName: string;
};

type HeroVideoProps = YouTubeProps | FileVideoProps;

const HeroVideo = (props: HeroVideoProps) => {
  return (
    <div className="relative mx-auto w-full aspect-video overflow-hidden bg-black">
      {props.type === "youtube" ? (
        <HeroYouTube videoId={props.videoId} titleName={props.titleName} />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={props.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default HeroVideo;
