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
        flex flex-col gap-[8vw] xl:gap-[1vw]
        ${position}
        w-full max-w-full overflow-hidden
      `}
    >
      <div className="items-center text-center mx-auto w-full px-4">
        {title && <DetailTitle {...title} />}
      </div>

      <div
        className={`
            ${textSize} 
            leading-relaxed 
            
            mx-[5vw] xl:mx-[25vw]
            
            min-w-0 
            max-w-full
            break-words
        `}
        style={{ color: descriptionColor }}
      >
        {description}
      </div>
    </section>
  );
};

export default DetailTopic;
