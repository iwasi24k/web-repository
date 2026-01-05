import { VOID_COLORS } from "../../design/colors";

type BackgroundBlockProps = {
  position?: string;
  size?: string;
  rotation?: string;
  color?: string;
  borderColor?: string;
  borderSize?: string;
  className?: string;
};

const BackgroundBlock = ({
  position,
  size = "w-[5svh] h-[5svh]",
  rotation,
  color,
  borderColor = VOID_COLORS.WHITE,
  borderSize = "border-[1.5px] md:border-[0.25svh]",
  className = "",
}: BackgroundBlockProps) => {
  const resolvedBorderColor =
    borderColor !== undefined
      ? borderColor
      : color
        ? undefined
        : VOID_COLORS.WHITE;

  return (
    <div
      className={`${position ?? ""} ${size} ${rotation ?? ""} ${borderSize} ${className}`}
      style={{
        backgroundColor: color,
        borderColor: resolvedBorderColor,
      }}
    />
  );
};

export default BackgroundBlock;
