import TextBlock, { type TextBlockProps } from "../components/ui/TextBlock";
import SubTitle, { type SubTitleProps } from "../components/ui/SubTitle";

type Align = "left" | "center";

type TopicSectionProps = {
  align?: Align;
  position?: string;

  // TextBlockProps for the label
  label?: TextBlockProps;

  // description props
  title?: SubTitleProps;

  // title props
  descriptionColor?: string;
  description: React.ReactNode;

  textSize?: string;
};

const TopicSection = ({
  align = "center",
  position,
  label,
  title,
  descriptionColor = "#fff",
  description,
  textSize = "text-[3.5vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[0.9vw]",
}: TopicSectionProps) => {
  const isCenter = align === "center";

  return (
    <section
      className={`
        ${position ? "lg:absolute" : ""}
        flex flex-col gap-[2vw] lg:gap-[1vw]
        ${position} 
        ${isCenter ? "items-center text-center -translate-x-1/2" : "items-start text-left"}
      `}
    >
      {label && <TextBlock {...label} />}
      {title && <SubTitle {...title} />}

      <div
        className={`${textSize} leading-relaxed`}
        style={{ color: descriptionColor }}
      >
        {description}
      </div>
    </section>
  );
};

export default TopicSection;
