type TransitionButtonProps = {
  text: string;
  href: string;
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
  href,
  textSize = "text-xs md:text-[1.75svh]",
  textColor = "black",
  hoverTextColor = "white",
  bgColor = "transparent",
  hoverBgColor = "black",
  borderColor,
  className = "",
}: TransitionButtonProps) {
  return (
    <a
      href={href}
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
        ${borderColor ? "border-[1.5px] md:border-[0.25svh]" : ""}
        ${className}
      `}
      style={
        {
          color: textColor,
          backgroundColor: bgColor,
          borderColor: borderColor,
          "--h-bg": hoverBgColor,
          "--h-text": hoverTextColor,
        } as React.CSSProperties
      }
    >
      {/* 1. 中心から広がる四角形（■）レイヤー */}
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
          -z-10
        "
        style={{ backgroundColor: "var(--h-bg)" }}
      />

      {/* 2. テキストレイヤー */}
      <span
        className="
          relative 
          z-10 
          transition-colors 
          ease-out
          /* 戻る時の速度 */
          duration-200
          /* ホバー時の速度 */
          group-hover:duration-300
          group-hover:text-(--h-text)
        "
      >
        {text}
      </span>
    </a>
  );
}
