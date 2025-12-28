import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
import TextTitle from "../components/ui/TextTitle";
import { HOME_SECTIONS_DATA } from "../data/homeSections";
// import TopicSection from "../layouts/TopicSection";

// CSS変数定義
const FOOTER_COLOR = "#0a0a0a";

const TITLE_LEFT_POSITION = "7%";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Dynamic Sections Loop */}
      {HOME_SECTIONS_DATA.map((section) => (
        <WorldSection 
          key={section.id} 
          bgColor={section.bgColor} 
          sectionSize={section.sectionSize}
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


