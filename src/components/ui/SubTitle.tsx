export type SubTitleProps = {
  text: string;
  textColor?: string;
  textSize?: string;
};

const SubTitle = ({
  text,
  textColor = "#fff",
  textSize = "text-2xl",
}: SubTitleProps) => {
  return (
    <div className="inline-flex flex-col">
      <h2
        className={`font-bold tracking-wide ${textSize}`}
        style={{ color: textColor }}
      >
        {text}
      </h2>

      {/* 下線 */}
      <div
        className="mt-2 xl:mt-[0.5vw] h-px relative w-[120%] left-[-2.5%]"
        style={{ backgroundColor: textColor }}
      />
    </div>
  );
};

export default SubTitle;
