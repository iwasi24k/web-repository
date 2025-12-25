import HeroSection from "../components/sections/HeroSection";
import WorldSection from "../components/world/WorldSection";
// import TextBlock from "../components/ui/TextBlock";
import TopicSection from "../layouts/TopicSection";

const CUSTOM_SIZE_CLASS = "min-h-[110dvh]";
const CUSTOM_SIZE_CLASS_MIN = "min-h-[70dvh]";
const VOID_BLACK = "var(--color-void-black)";
const VOID_WHITE = "var(--color-void-white)";
const VOID_PURPLE = "var(--color-void-purple)";
const VOID_YELLOW = "var(--color-void-yellow)";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <WorldSection bgColor={VOID_WHITE} sectionSize={CUSTOM_SIZE_CLASS_MIN}>
        <TopicSection
          align="left"
          x="25%"
          y="10dvh"
          label={{
            text: "GAME CONCEPT",
            textColor: VOID_WHITE,
            blockColor: VOID_PURPLE,
            textSize: "0.75rem",
          }}
          title="ゲームコンセプト"
          titleColor={VOID_BLACK}
          descriptionColor={VOID_BLACK}
          description={
            <>
              <p className="mb-4">
                「虚無（Void）の中に存在する、最小単位の秩序」白と黒のモノトーンで構築された世界に、<br></br>
                異分子としての「紫」と「黄」を混入させることで、視覚的な違和感と美しさを両立。<br></br>
                すべてのオブジェクトを単一のボクセルモデルで構成し、形状の最小単位で世界が成り立つ「ミニマリズムの極致」を表現しています。
              </p>
            </>
          }
        />
      </WorldSection>

      <WorldSection bgColor={VOID_BLACK} sectionSize={CUSTOM_SIZE_CLASS}>
        <TopicSection
          y="10dvh"
          label={{
            text: "GAME FEATURES",
            textColor: VOID_BLACK,
            blockColor: VOID_YELLOW,
            textSize: "0.75rem",
          }}
          title="ゲームの特徴"
          description={
            <>
              <p className="mb-4">
                上下に動くブロックで構成された立体フィールドを舞台にした、3Dサバイバル系アクションゲーム。<br></br>
                高低差と動的な地形変化により、生存と移動に緊張感が生まれ、常に新しい状況判断を迫られる体験を提供します。
              </p>
            </>
          }
        />
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


