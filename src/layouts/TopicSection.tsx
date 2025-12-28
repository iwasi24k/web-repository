import TextBlock, { type TextBlockProps } from "../components/ui/TextBlock";
import SubTitle, { type SubTitleProps } from "../components/ui/SubTitle";

type Align = "left" | "center";

type TopicSectionProps = {
  align?: Align;
  x?: string;
  y?: string;

  // TextBlockProps for the label
  label?: TextBlockProps;

  // description props
  title?: SubTitleProps;
  
  // title props
  descriptionColor?: string;
  description: React.ReactNode;
};

const TopicSection = ({
  align = "center",
  x = "50%",
  y = "0",
  label,
  title,
  descriptionColor = "#fff",
  description,
}: TopicSectionProps) => {
  const isCenter = align === "center";

  return (
    <section
      className={`absolute flex flex-col gap-5 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
      style={{
        left: x,
        top: y,
        transform: isCenter ? "translateX(-50%)" : "translateX(-0%)",
      }}
    >
      {label && <TextBlock {...label} />}
      {title && <SubTitle {...title} />}

      <div className="text-base leading-relaxed" style={{ color: descriptionColor }}>
        {description}
      </div>
    </section>
  );
};

export default TopicSection;


