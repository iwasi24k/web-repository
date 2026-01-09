import { VOID_COLORS } from "../../design/colors";
import BackgroundBlock from "../ui/BackgroundBlock";
import heroImage from "../../assets/voxel-void1.png";

const getDeviceFixedRatio = (): string => {
  if (typeof window !== "undefined") {
    return `${window.screen.width} / ${window.screen.height}`;
  }
  return "16 / 9";
};

const FIXED_ASPECT_RATIO = getDeviceFixedRatio();

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative bg-black w-full overflow-hidden"
      style={{ aspectRatio: FIXED_ASPECT_RATIO }}
    >
      <div
        className="absolute inset-0 bg-linear-to-b z-10"
        style={{ background: VOID_COLORS.WHITE }}
      />
      <img
        className="absolute top-[1vw] -left-[1vw] w-[70vw] h-[40vw] opacity-45 pointer-events-none select-none z-10"
        src={heroImage}
        alt="Voxel Void Hero"
      />
      <div
        className="absolute w-[20vw] h-[50vw] bg-linear-to-b z-10"
        style={{ background: VOID_COLORS.BLACK }}
      />
      <div
        className="absolute pointer-events-none top-[7vw] left-[7vw] text-[5vw] z-10"
        style={{ color: VOID_COLORS.WHITE }}
      >
        Voxel
      </div>
      <div
        className="absolute pointer-events-none top-[7vw] left-[21vw] text-[5vw] z-10"
        style={{ color: VOID_COLORS.BLACK }}
      >
        Void
      </div>
      <BackgroundBlock
        position="absolute -top-[1vw] left-[58vw]"
        size="w-[45vw] h-[45vw]"
        rotation="rotate-[55deg]"
        color={VOID_COLORS.BLACK}
        borderColor={VOID_COLORS.BLACK}
        className="opacity-100 z-10"
      />
      <div
        className="absolute top-[43vw] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-[0.5vw] pointer-events-none"
        style={{ color: VOID_COLORS.BLACK }}
      >
        <span className="text-[1vw]">scroll</span>
        <span className="text-[1.5vw] animate-scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
