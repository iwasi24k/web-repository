import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
import TextTitle from "../components/ui/TextTitle";
// import TopicSection from "../layouts/TopicSection";

const CUSTOM_SIZE_CLASS = "min-h-[100dvh]";
// const CUSTOM_SIZE_CLASS_MIN = "min-h-[90dvh]";
// const CUSTOM_SIZE_CLASS_MAX = "min-h-[150dvh]";

// CSS変数定義
const VOID_BLACK = "var(--color-void-black)";
const VOID_WHITE = "var(--color-void-white)";
const VOID_GRAY_1 = "var(--color-void-gray-1)";
const VOID_GRAY_2 = "var(--color-void-gray-2)";
const VOID_GRAY_3 = "var(--color-void-gray-3)";
const VOID_GRAY_4 = "var(--color-void-gray-4)";
// const VOID_PURPLE = "var(--color-void-purple)";
// const VOID_YELLOW = "var(--color-void-yellow)";
const FOOTER_COLOR = "#0a0a0a";

const TITLE_LEFT_POSITION = "7%";

// セクションデータ定義
const SECTIONS_DATA = [
  { 
    id: 'system',
    title: "GAME SYSTEM", 
    bgColor: VOID_WHITE, 
    textColor: VOID_BLACK 
  },
  { 
    id: 'pipeline',
    title: "DEVELOPMENT PIPELINE", 
    bgColor: VOID_GRAY_1, 
    textColor: VOID_BLACK 
  },
  { 
    id: 'web-eng-1',
    title: "WEB ENGINEERING", 
    bgColor: VOID_GRAY_2, 
    textColor: VOID_BLACK 
  },
  { 
    id: 'web-eng-2',
    title: "WEB ENGINEERING", 
    bgColor: VOID_GRAY_3, 
    textColor: VOID_WHITE 
  },
  { 
    id: 'game-eng-1',
    title: "GAME ENGINEERING", 
    bgColor: VOID_GRAY_4, 
    textColor: VOID_WHITE 
  },
  { 
    id: 'game-eng-2',
    title: "GAME ENGINEERING", 
    bgColor: VOID_BLACK, 
    textColor: VOID_WHITE 
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


