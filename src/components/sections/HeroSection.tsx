import { VOID_COLORS } from "../../design/colors";
import heroImagePC from "../../assets/MacBook_Pro_16-heroSection_2.png";
import heroImageIOS from "../../assets/iPhone_16_Pro_Max-heroSection.png";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-black transition-all duration-300 ease-out aspect-[9/27] md:aspect-[16/9]"
    >
      <img
        className="hidden xl:block xl:w-full xl:h-full user-select-none pointer-events-none"
        src={heroImagePC}
        alt=""
        aria-hidden="true"
      />
      <img
        className="block w-full h-full user-select-none pointer-events-none xl:hidden"
        src={heroImageIOS}
        alt=""
        aria-hidden="true"
      />

      {/* スクロールダウン指示 */}
      <div
        className="absolute left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none
          bottom-[5%]
          top-[620px]
          md:top-[43vw] md:bottom-auto md:gap-[0.5vw]"
        style={{ color: VOID_COLORS.BLACK }}
      >
        <span className="text-sm md:text-[1vw]">scroll</span>
        <span className="animate-bounce text-xl md:text-[1.5vw]">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
