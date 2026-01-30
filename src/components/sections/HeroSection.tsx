// import heroImagePC from "../../assets/MacBook_Pro_16-heroSection.avif";
import heroImageIOS from "../../assets/iPhone_16_Pro_Max-heroSection.avif";
import HeroVideo from "../ui/HeroVideo";
import heroVideo from "../../assets/video/My Project.mp4";
import titleLogoImage from "../../assets/TitleLogo.png";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-black transition-all duration-300 ease-out aspect-9/28 md:aspect-video"
    >
      <img
        className="block w-full h-full user-select-none pointer-events-none xl:hidden"
        src={heroImageIOS}
        alt=""
        aria-hidden="true"
      />

      <HeroVideo video={heroVideo} />
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
