import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
import TextTitle from "../components/ui/TextTitle";
import { VOID_COLORS } from "../design/colors";
// import TopicSection from "../layouts/TopicSection";

const CUSTOM_SIZE_CLASS = "min-h-[100dvh]";
// const CUSTOM_SIZE_CLASS_MIN = "min-h-[90dvh]";
// const CUSTOM_SIZE_CLASS_MAX = "min-h-[150dvh]";

// CSS変数定義
const FOOTER_COLOR = "#0a0a0a";

const TITLE_LEFT_POSITION = "7%";

// セクションデータ定義
const SECTIONS_DATA = [
  { 
    id: 'system',
    title: "GAME SYSTEM", 
    bgColor: VOID_COLORS.WHITE, 
    textColor: VOID_COLORS.BLACK 
  },
  { 
    id: 'pipeline',
    title: "DEVELOPMENT PIPELINE", 
    bgColor: VOID_COLORS.GRAY_1, 
    textColor: VOID_COLORS.GRAY_4 
  },
  { 
    id: 'web-eng-1',
    title: "WEB ENGINEERING", 
    bgColor: VOID_COLORS.GRAY_2, 
    textColor: VOID_COLORS.GRAY_3 
  },
  { 
    id: 'web-eng-2',
    title: "WEB ENGINEERING", 
    bgColor: VOID_COLORS.GRAY_3, 
    textColor: VOID_COLORS.GRAY_2 
  },
  { 
    id: 'game-eng-1',
    title: "GAME ENGINEERING", 
    bgColor: VOID_COLORS.GRAY_4, 
    textColor: VOID_COLORS.GRAY_1 
  },
  { 
    id: 'game-eng-2',
    title: "GAME ENGINEERING", 
    bgColor: VOID_COLORS.BLACK, 
    textColor: VOID_COLORS.WHITE 
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Dynamic Sections Loop */}
      {SECTIONS_DATA.map((section) => (
        <WorldSection 
          key={section.id} 
          bgColor={section.bgColor} 
          sectionSize={CUSTOM_SIZE_CLASS}
        >
          {/* Title */}
          <div 
            className="absolute flex flex-col top-[5dvh]"
            style={{ left: TITLE_LEFT_POSITION }}
          >
            <TextTitle 
              text={section.title} 
              textColor={section.textColor} 
              textSize="text-8xl" 
            />
          </div>

          {/* Content Placeholder */}
          {/* 必要に応じてここに section.id に基づいたコンテンツを配置可能 */}
          
        </WorldSection>
      ))}

      {/* Footer */}
      <WorldSection bgColor={FOOTER_COLOR} sectionSize="min-h-[30dvh]">
        <div className="text-white">Footer</div>
      </WorldSection>
    </div>
  );
};

export default Home;


