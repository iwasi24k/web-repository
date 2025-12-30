import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
import Footer from "../components/sections/Footer"
import TextTitle from "../components/ui/TextTitle";
import { HOME_SECTIONS_DATA } from "../components/sections/HomeSections";

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
          id={section.id}
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

          {section.content}

        </WorldSection>
      ))}

      {/* Footer */}
      <WorldSection bgColor={FOOTER_COLOR} sectionSize="min-h-[30dvh]">
        <Footer />
      </WorldSection>
    </div>
  );
};

export default Home;


