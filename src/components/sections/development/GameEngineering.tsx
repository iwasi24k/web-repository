import { VOID_COLORS } from "../../../design/colors";
import TopicSection from "../../../layouts/TopicSection";
import TransitionButton from "../../ui/TransitionButton";
import FadingGrid from "../../ui/FadingGrid";

const GRID_DATA = [
  "言語",
  "グラフィックスAPI",
  "モデル読み込み",
  "数学ライブラリ",
  "デバッグログ",

  "C++",
  "DirectX 11",
  "Assimp",
  "DirectXMath\n + \n自作数学ライブラリ",
  "自作ログライブラリ",
];

const SETTINGS = {
  // 色（カラーコード）のみStyleへ
  lineColor: "#FFFFFF",
  textColor: "#FFFFFF",

  // 数値指定はTailwindの任意値クラスを活用
  lineWidth: "1px",

  // レスポンシブなレイアウト・サイズはClassとして渡す
  textSizeClass: "xl:text-[1vw] xl:font-light xl:tracking-widest",
  cellWidthClass: "xl:w-[90vw]",
  cellHeightClass: "xl:h-[12vw]",
  containerClass: "xl:mx-auto xl:mt-[5vw]",

  rows: 1,
  cols: 4,
  fadeStart: "100%",
  animationDuration: 1.0,
  staggerDelay: 0.15,
  isTextFading: false,
  items: GRID_DATA,
} as const;

const GameEngineering = () => {
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
              本プロジェクトでは、C++ と DirectX 11 を用いた 3D
              ゲーム開発を行っています。
              <br />
              DirectX の初期化処理から描画パイプラインの構築までを実装し、Unity
              の設計思想を参考にした独自のゲームフレームワークを自作しています（GUI
              機能を持たないフレームワーク構成）。
              <br />
              3D モデルの読み込みには Assimp ライブラリを採用し、数学処理には
              DirectXMath
              に加えて自作のベクトル系数学ライブラリを組み合わせて使用しています。
              <br />
              また、開発効率と保守性向上のため、デバッグログ出力用ライブラリも独自に実装しています。
            </p>
          </>
        }
      />
      <div className="hidden xl:block">
        <TransitionButton
          text="詳細ページへ →"
          to="/detail/game-engineering"
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
          to="/detail/game-engineering"
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

export default GameEngineering;
