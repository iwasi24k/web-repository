export type DetailTitleProps = {
  text: string;
  textColor?: string;
  textSize?: string;
};

const DetailTitle = ({
  text,
  textColor = "#fff",
  textSize = "text-2xl",
}: DetailTitleProps) => {
  return (
    <div className="inline-flex flex-col items-center">
      <h1
        className={`font-bold tracking-wide ${textSize}`}
        style={{ color: textColor }}
      >
        {text}
      </h1>

      {/* 下線 */}
      <div
        className="hidden xl:block xl:mt-[0.8vw] xl:mb-[1vw] h-px relative w-[80vw]"
        style={{ backgroundColor: textColor }}
      />
    </div>
  );
};

export default DetailTitle;
