export type TextBlockProps = {
  text: string;

  textColor?: string;
  textSize?: string;
  blockColor?: string;

  /** テキストとブロックの余白 */
  paddingX?: string;
  paddingY?: string;

  /** 強制サイズ（未指定なら自動） */
  blockSize?: string;
};

const TextBlock = ({
  text,

  textColor = "#fff",
  textSize = "1rem",
  blockColor = "transparent",

  paddingX = "1.25em",
  paddingY = "0.25em",

  blockSize,
}: TextBlockProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: textSize,
        color: textColor,
        backgroundColor: blockColor,

        width: blockSize,
        height: blockSize,

        minWidth: "fit-content",
        minHeight: "fit-content",

        padding: `${paddingY} ${paddingX}`,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};

export default TextBlock;
