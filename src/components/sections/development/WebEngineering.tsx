import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import TransitionButton from "../../ui/TransitionButton";
import FadingGrid from "../../ui/FadingGrid";

const GRID_DATA = [
  "言語",
  "ライブラリ",
  "スタイリング",
  "ビルドツール",
  "実行環境",
  "コード品質",
  "フォーマッター",
  "デザインツール",

  "TypeScript",
  "React",
  "Tailwind CSS",
  "Vite",

  "Node.js",
  "ESLint",
  "Prettier",
  "Figma",
];

const SETTINGS = {
  // 色（カラーコード）のみStyleへ
  lineColor: "#FFFFFF",
  textColor: "#FFFFFF",

  // 数値指定はTailwindの任意値クラスを活用
  lineWidth: "1px",

  // レスポンシブなレイアウト・サイズはClassとして渡す
  textSizeClass:
    "xl:text-[1vw] xl:font-light xl:tracking-widest",
  cellWidthClass: "xl:w-[90vw]",
  cellHeightClass: "xl:h-[12vw]",
  containerClass: "xl:mx-auto xl:mt-[5vw]",

  rows: 1,
  cols: 7,
  fadeStart: "100%",
  animationDuration: 1.0,
  staggerDelay: 0.15,
  isTextFading: false,
  items: GRID_DATA,
} as const;

const WebEngineering = () => {
  return (
    <div className="flex flex-col gap-[10vw] pt-[30vw] pb-[15vw] pl-[7vw] pr-[7vw] md:pt-[25vw] xl:gap-[2vw] xl:pt-[13vw] xl:pb-[5vw]">
      <TopicSection
        align="left"
        label={{
          text: "Technology Stack",
          textColor: VOID_COLORS.WHITE,
          blockColor: VOID_COLORS.PURPLE,
        }}
        title={{
          text: "Technology Stack",
          textColor: VOID_COLORS.WHITE,
          textSize: "text-[20px] md:text-[3.5vw] xl:text-[2vw]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <>
            <p className="mb-4">
              当サイトは、TypeScript・React・Tailwind CSS・Vite・Node.js
              を採用したモダンなフロントエンド構成で開発しています。
              <br />
              コード品質の維持・統一のために ESLint と Prettier を導入し、UI /
              UX 設計およびデザイン制作には Figma を活用しています。
              <br />
            </p>
          </>
        }
      />
      <div className="hidden xl:block">
        <TransitionButton
          text="詳細ページへ →"
          to="/detail/web-engineering"
          textSize="xl:text-[0.8vw]"
          textColor={VOID_COLORS.WHITE}
          hoverTextColor={VOID_COLORS.GRAY_4}
          hoverBgColor={VOID_COLORS.GRAY_1}
          borderColor={VOID_COLORS.GRAY_1}
        />
        <FadingGrid {...SETTINGS} />
      </div>
      <div className="block xl:hidden">
        <TransitionButton
          text="詳細ページへ →"
          to="/detail/web-engineering"
          textSize="text-[3vw] md:text-[2vw]"
          textColor={VOID_COLORS.WHITE}
          hoverTextColor={VOID_COLORS.WHITE}
          borderColor={VOID_COLORS.WHITE}
          className="mt-5 xl:hidden"
        />
      </div>
    </div>
  );
};

export default WebEngineering;
