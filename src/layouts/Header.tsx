import TitleLogo from "../components/ui/TitleLogo";
import Navigation from "../components/ui/Navigation";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-(--header-h) min-h-16
        
        bg-linear-to-b from-black/80 via-black/50 to-transparent
        backdrop-blur-md
      "
    >
      <div
        className="
          grid grid-cols-[auto_1fr_auto]
          items-center h-full
          px-[4vw]
          -translate-y-[0.5svh]
        "
      >
        {/* ロゴサイズ: 文字サイズも高さ基準 (vh) にすることでズームしても比率維持 */ }
        <TitleLogo className="text-[3svh]" />
        
        {/* ナビゲーションの文字サイズ等もNavigationコンポーネント内で text-[2dvh] などに変更推奨 */}
        <Navigation />
        
        <div />
      </div>
    </header>
  );
};

export default Header;