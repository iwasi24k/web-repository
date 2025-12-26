export type TextTitleProps = {
    text: string;
    textColor?: string;
    textSize?: string;
}

const TextTitle = ({ text, textColor = "#fff", textSize = "text-2xl" }: TextTitleProps) => {
    return (
        <h1 className={`font-bold tracking-wide ${textSize}`} style={{ color: textColor }}>
            {text}
        </h1>
    );
};

export default TextTitle;