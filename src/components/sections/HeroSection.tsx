import { useSyncExternalStore } from "react";
import heroImage from "../../assets/voxel-void0.png";

// 1. 外部システム（window）の値を購読する関数
const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  window.addEventListener("orientationchange", callback); // スマホの回転対応
  return () => {
    window.removeEventListener("resize", callback);
    window.removeEventListener("orientationchange", callback);
  };
};

// 2. 現在の値を「ブラウザ」から取得する関数
const getSnapshot = () => `${window.screen.width} / ${window.screen.height}`;

// 3. 「サーバー」での初期値（SSR時に使われる）
const getServerSnapshot = () => "16 / 9";

const HeroSection = () => {
  // windowを直接使うのではなく、Reactの管理下で「同期」させる
  const aspectRatio = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <section
      id="top"
      className="bg-black w-full overflow-hidden"
      style={{ aspectRatio }}
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