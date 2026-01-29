import { VOID_COLORS } from "../../../design/colors";
import BackgroundBlock from "../../ui/BackgroundBlock";

const DetailBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-linear-to-b z-0"
        style={{ backgroundColor: VOID_COLORS.GRAY_4 }}
      />
      <BackgroundBlock
        position="fixed top-[120vw] md:top-[33vw] left-[5vw] md:left-0"
        size="w-[200px] h-[200px] md:w-[16vw] md:h-[16vw]"
        rotation="rotate-[65deg]"
        color={VOID_COLORS.GRAY_3}
        borderColor={VOID_COLORS.GRAY_3}
        className="opacity-30 md:opacity-50"
      />
      <BackgroundBlock
        position="fixed top-[15vw] md:top-[13vw] left-[75vw] md:left-[83vw]"
        size="w-[150px] h-[150px] md:w-[12vw] md:h-[12vw]"
        rotation="rotate-[20deg] md:-rotate-[5deg]"
        borderSize="border-[2px] md:border-[0.1vw]"
        className="opacity-30 md:opacity-70"
      />
    </>
  );
};

export default DetailBackground;
