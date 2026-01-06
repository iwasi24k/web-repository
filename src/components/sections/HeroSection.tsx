import heroImage from "../../assets/voxel-void0.png";

/**
 * コンポーネントの外で一度だけ計算します。
 * window.screen は「ブラウザの枠」ではなく「モニターの物理サイズ」を返すため、
 * ウィンドウをどう動かしても、この値は変わりません。
 */
const getDeviceFixedRatio = (): string => {
  if (typeof window !== "undefined") {
    // 物理モニターの幅 / 高さ を返す
    // 例: 1920 / 1080
    return `${window.screen.width} / ${window.screen.height}`;
  }
  // サーバーサイド（ビルド時）のフォールバック
  return "16 / 9";
};

// モジュール読み込み時に一度だけ実行され、以降固定される
const FIXED_ASPECT_RATIO = getDeviceFixedRatio();

const HeroSection = () => {
  return (
    <section
      id="top"
      className="bg-black w-full overflow-hidden"
      // ここで固定された比率を適用
      style={{ aspectRatio: FIXED_ASPECT_RATIO }}
    >
      <img
        src={heroImage}
        alt="Hero Background"
        className="block w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;