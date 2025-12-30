import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import Carousel from "../../ui/Carousel"

// import heroImage from '../../assets/test.png';

const GameSystem = () => {
    return (
      <>
        {/* TopicSection: Overview */}
        <TopicSection
        align="left"
        x="7.5%"
        y="30dvh"
        label={{
            text: "Overview",
            textColor: VOID_COLORS.BLACK,
            blockColor: VOID_COLORS.YELLOW,
            textSize: "0.85rem",
        }}
        title={{
            text: "Overview",
            textColor: VOID_COLORS.BLACK,
            textSize: "text-3xl",
        }}
        descriptionColor={VOID_COLORS.BLACK}
        description={
            <>
            <p className="mb-4">
                上下に動くブロックで構成された立体フィールドを舞台にした、3Dサバイバル系アクションゲーム。<br />
                高低差と動的な地形変化により、生存と移動に緊張感が生まれ、常に新しい状況判断を迫られる体験を提供します。
            </p>
            </>
        }
        />
        {/* UI Component */}

        {/* Carousel Component */}
        {/* <div className="bg-gray-600 w-2xl h-16dvh" /> */}
        <Carousel
            images={[
                "src/assets/test.png",
                "src/assets/1.jpg",
            ]}
            className="absolute top-70 left-245"
            width="780px"
            height="480px"
            imageBorderColor={VOID_COLORS.GRAY_3}
            imageBorderWidth={1.75}
            imagePadding={7}
            slideGap={70}

            indicatorActiveColor={VOID_COLORS.GRAY_4}
            indicatorInactiveColor={VOID_COLORS.GRAY_1}
        />

      </>
    );
};

export default GameSystem;