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
    "xl:text-[15px] 2xl:text-[18px] xl:font-light xl:tracking-widest",
  cellWidthClass: "xl:w-[90vw]",
  cellHeightClass: "xl:h-[12dvw]",
  containerClass: "xl:-ml-[5vw]",

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
    <div className="flex flex-col gap-[5vw] pl-[7vw] pr-[7vw] pb-[7svh] pt-[20svh] xl:pl-[7vw] xl:pr-0 xl:pt-[30vh] xl:pb-0">
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
          textSize: "text-[3svh] xl:text-[3.25dvh]",
        }}
        descriptionColor={VOID_COLORS.WHITE}
        description={
          <>
            <p className="mb-4 block md:hidden">
              当サイトはDirectXで行ったコンポーネント設計の知見を活かし、以下の技術スタックでフロントエンドを構築しています。
              <br />
            </p>
            <p className="mb-4 hidden md:block">
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
          textSize="xl:text-[1.5svh]"
          textColor={VOID_COLORS.WHITE}
          hoverTextColor={VOID_COLORS.GRAY_4}
          hoverBgColor={VOID_COLORS.GRAY_1}
          borderColor={VOID_COLORS.GRAY_1}
          className="xl:-mt-10 xl:mb-[7vh] xl:block"
        />
        <FadingGrid {...SETTINGS} />
      </div>
      {/* <img
        className="
        w-150
        md:mx-auto md:w-[70vw]
        xl:ml-[40vw] xl:-mt-[25vh] xl:mb-[5vh] xl:w-[45vw]
        2xl:-mt-[35vh]
        "
        src={webStackImage}
        alt="Web技術スタック図"
      /> */}
      <div className="block xl:hidden">
        <TransitionButton
          text="詳細ページへ →"
          to="/detail/web-engineering"
          textSize="text-[1.5svh]"
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
