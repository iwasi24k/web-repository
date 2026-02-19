export type TextBlockProps = {
  text: string;

  textColor?: string;
  textSize?: string;
  blockColor?: string;

  padding?: string;
};

const TextBlock = ({
  text,

  textColor = "#fff",
  textSize = "text-[8px] md:text-[1.2vw] xl:text-[0.8vw]",
  blockColor = "transparent",

  padding = "px-2 py-[3px] xl:px-[1vw] xl:py-[0.4vw] 2xl:px-[0.8vw] 2xl:py-[0.3vw]",
}: TextBlockProps) => {
  return (
    <div
      className={`
        inline-flex 
        items-center
        justify-center

        ${textSize}

        min-w-fit
        min-h-fit
        ${padding}

        box-border
        whitespace-nowrap
      `}
      style={{ color: textColor, backgroundColor: blockColor }}
    >
      {text}
    </div>
  );
};

export default TextBlock;
