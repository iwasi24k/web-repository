import heroImageIOS from "../../assets/texture/iPhone_16_Pro_Max-heroSection.avif";
import HeroVideo from "../ui/HeroVideo";
import titleLogoImage from "../../assets/texture/TitleLogo.png";

// import heroVideo from "../../assets/video/HeroVideo.mp4"; // Local Video
const youtubeVideoId = "nAyRcDht2Rk";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-black transition-all duration-300 ease-out aspect-9/28 xl:aspect-video"
    >
      <img
        className="block w-full h-full user-select-none pointer-events-none xl:hidden"
        src={heroImageIOS}
        alt=""
        aria-hidden="true"
      />
      <HeroVideo
        type="youtube"
        videoId={youtubeVideoId}
        titleName="HeroVideo"
      />
      {/* <HeroVideo type="file" src={heroVideo} titleName="HeroVideo" /> */}

      <div
        className="absolute hidden xl:block inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      />
      <img
        className="absolute z-30 hidden xl:block xl:w-[30vw] left-[5vw] bottom-[7vw] user-select-none pointer-events-none"
        src={titleLogoImage}
        alt="タイトルロゴVoxel Void"
      />
    </section>
  );
};

export default HeroSection;
