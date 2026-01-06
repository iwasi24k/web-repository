import { Link } from "react-router-dom";
import type { CSSProperties } from "react";

type TransitionButtonProps = {
  text: string;
  to: string;

  textSize?: string;
  textColor?: string;
  hoverTextColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  className?: string;
};

export default function TransitionButton({
  text,
  to,
  textSize = "text-xs md:text-[1.75vw]",
  textColor = "black",
  hoverTextColor = "white",
  bgColor = "transparent",
  hoverBgColor = "black",
  borderColor,
  className = "",
}: TransitionButtonProps) {
  return (
    <Link
      to={to}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        w-fit
        min-w-fit
        whitespace-nowrap
        px-8 py-3
        font-normal
        box-border
        overflow-hidden
        group
        active:scale-95

        ${textSize}
        ${borderColor ? "border-[1.3px] xl:border-2" : ""}
        ${className}
      `}
      style={
        {
          color: textColor,
          backgroundColor: bgColor,
          borderColor: borderColor,
          "--h-bg": hoverBgColor,
          "--h-text": hoverTextColor,
        } as CSSProperties
      }
    >
      {/* 背景レイヤー */}
      <span
        className="
          absolute
          inset-0
          m-auto
          w-full
          h-full
          scale-0
          group-hover:scale-100
          transition-transform
          ease-out
          duration-200
          group-hover:duration-300
          z-0
        "
        style={{ backgroundColor: "var(--h-bg)" }}
      />

      {/* テキスト */}
      <span
        className="
          relative
          z-10
          transition-colors
          ease-out
          duration-200
          group-hover:duration-300
          group-hover:text-(--h-text)
        "
      >
        {text}
      </span>
    </Link>
  );
}
