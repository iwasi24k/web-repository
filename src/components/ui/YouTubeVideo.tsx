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

type VideoProps = YouTubeProps | FileVideoProps;

const Video = ({
  className = "",
  itemClassName = "border-black border-[0.1rem] xl:border-[0.125rem] p-[0.5rem] xl:p-[0.75rem]",
  ...props
}: VideoProps) => {
  return (
    <div
      className={`relative w-full aspect-[16/9.37] lg:aspect-[16/9.17] xl:aspect-[16/9.37] 2xl:aspect-[16/9.3] ${className}`}
    >
      <div className={`absolute inset-0 ${itemClassName}`}>
        {props.type === "youtube" ? (
          <iframe
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&mute=1&loop=1&playlist=${props.videoId}&controls=0&modestbranding=1&playsinline=1`}
            className="w-full h-full pointer-events-none"
            allow="autoplay; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            title={props.titleName}
          />
        ) : (
          <video
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={props.src} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default Video;
