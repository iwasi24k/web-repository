import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";

const CUSTOM_SIZE_CLASS = "min-h-[110dvh]";
const VOID_BLACK = "var(--color-void-black)";
const VOID_WHITE = "var(--color-void-white)";

const Home = () => {

  return (
    <div>
      <HeroSection />

      <WorldSection bgColor={VOID_WHITE} sectionSize={CUSTOM_SIZE_CLASS}>
        <div>Section 1</div>
      </WorldSection>

      <WorldSection bgColor={VOID_BLACK} sectionSize={CUSTOM_SIZE_CLASS}>
        <div>Section 2</div>
      </WorldSection>

      <WorldSection bgColor={VOID_WHITE} sectionSize={CUSTOM_SIZE_CLASS}>
        <div>Section 3</div>
      </WorldSection>

      <WorldSection bgColor={VOID_BLACK} sectionSize={CUSTOM_SIZE_CLASS}>
        <div>Section 4</div>
      </WorldSection>

      <WorldSection bgColor="#000000" sectionSize="min-h-[30dvh]">
        <div>Footer</div>
      </WorldSection>
    </div>
  );
};

export default Home;


