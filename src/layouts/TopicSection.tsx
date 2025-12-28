import TextBlock, { type TextBlockProps } from "../components/ui/TextBlock";
import TextTitle, { type TextTitleProps } from "../components/ui/TextTitle";

// x/y は常に「要素中心」を基準とした座標とします
// そのため translateX(-50%) は常時適用します

type Align = "left" | "center";

type TopicSectionProps = {
  align?: Align;
  x?: string;
  y?: string;

  // TextBlockProps for the label
  label: TextBlockProps;

  // description props
  title: TextTitleProps;
  
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
      className={`absolute flex flex-col gap-6 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
      style={{
        left: x,
        top: y,
        transform: "translateX(-50%)",
      }}
    >
      <TextBlock {...label} />

      <TextTitle {...title} />

      <div className="text-base leading-relaxed" style={{ color: descriptionColor }}>
        {description}
      </div>
    </section>
  );
};

export default TopicSection;


