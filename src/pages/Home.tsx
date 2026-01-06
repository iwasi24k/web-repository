import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
import Footer from "../components/sections/Footer";
import TextTitle from "../components/ui/TextTitle";
import { HOME_SECTIONS_DATA } from "../components/sections/HomeSections";
import { WorldBlocksLayer } from "../components/world/WorldBlocksLayer";

// CSS変数定義
const FOOTER_COLOR = "#0a0a0a";

const Home = () => {
  return (
    <div>
      <WorldBlocksLayer />

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
          <div className="absolute flex flex-col top-[3vw] left-[6vw] xl:top-[1vw]">
            <TextTitle
              text={section.title}
              textColor={section.textColor}
              textSize={section.titleSize}
            />
          </div>

          {section.content}
        </WorldSection>
      ))}

      {/* Footer */}
      <WorldSection bgColor={FOOTER_COLOR} sectionSize="min-h-[15vw]">
        <Footer />
      </WorldSection>
    </div>
  );
};

export default Home;
