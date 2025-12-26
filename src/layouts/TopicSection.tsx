import TextBlock, { type TextBlockProps } from "../components/ui/TextBlock";

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
  titleColor?: string;
  title: string;
  
  // title props
  descriptionColor?: string;
  description: React.ReactNode;
};

const TopicSection = ({
  align = "center",
  x = "50%",
  y = "0",
  label,
  titleColor = "#fff",
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

      <h2 className="text-[2rem] font-semibold tracking-wide" style={{ color: titleColor }}>
        {title}
      </h2>

      <div className="text-base leading-relaxed" style={{ color: descriptionColor }}>
        {description}
      </div>
    </section>
  );
};

export default TopicSection;


