export type TextBlockProps = {
  text: string;

  textColor?: string;
  textSize?: string;
  blockColor?: string;

  /** テキストとブロックの余白 */
  padding?: string;
};

const TextBlock = ({
  text,

  textColor = "#fff",
  textSize = "text-[1.5svh]",
  blockColor = "transparent",

  padding = "px-2 py-[0.5svh]",

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
      style={{color: textColor, backgroundColor:blockColor}}
    >
      {text}
    </div>
  );
};

export default TextBlock;
