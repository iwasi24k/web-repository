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
            <h1
                className={`font-bold tracking-wide ${textSize}`}
                style={{ color: textColor }}
            >
                {text}
            </h1>

            {/* 下線 */}
            <div
                className="mt-3 h-px relative"
                style={{
                    backgroundColor: textColor,
                    width: "120%",
                    left: "-2.5%",
                }}
            />
        </div>
    );
};

export default SubTitle;