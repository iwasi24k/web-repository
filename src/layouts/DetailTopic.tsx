import DetailTitle, {
  type DetailTitleProps,
} from "../components/ui/DetailTitle";

type DetailTopicProps = {
  position?: string;

  // description props
  title?: DetailTitleProps;

  // title props
  descriptionColor?: string;
  description: React.ReactNode;

  textSize?: string;
};

const DetailTopic = ({
  position,
  title,
  descriptionColor = "#fff",
  description,
  textSize = "text-[3.5vw] md:text-[2vw] xl:text-[1vw] 2xl:text-[0.9vw]",
}: DetailTopicProps) => {
  return (
    <section
      className={`
        ${position ? "md:absolute" : ""}
        flex flex-col gap-[2vw] xl:gap-[1vw]
        ${position} 
        
      `}
    >
      <div className="items-center text-center mx-auto">
        {title && <DetailTitle {...title} />}
      </div>
      <div
        className={`${textSize} leading-relaxed ml-[25vw] mr-[25vw]`}
        style={{ color: descriptionColor }}
      >
        {description}
      </div>
    </section>
  );
};

export default DetailTopic;
