import type { CSSProperties } from "react";
import gearImage from "../../assets/gear.svg";

type GearProps = {
  className?: string;
  size?: string;
  duration?: number;
  direction?: "cw" | "ccw";
};

const Gear = ({
  className = "",
  size = "w-10",
  duration = 10,
  direction = "cw",
}: GearProps) => {
  return (
    <img
      src={gearImage}
      alt="Gear"
      style={
        {
          "--gear-duration": `${duration}s`,
          animationDirection: direction === "ccw" ? "reverse" : "normal",
        } as CSSProperties
      }
      className={`
        ${size}
        origin-center
        object-contain
        animate-[spin_var(--gear-duration)_linear_infinite]
        ${className}
      `
        .replace(/\s+/g, " ")
        .trim()}
    />
  );
};

export default Gear;
