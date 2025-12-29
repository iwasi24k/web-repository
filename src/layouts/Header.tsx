import TitleLogo from "../components/ui/TitleLogo";
import Navigation from "../components/ui/Navigation";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-24
        bg-linear-to-b from-black/80 via-black/50 to-transparent
        backdrop-blur-md"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center h-full px-24">
        <TitleLogo className="text-3xl" />
        <Navigation />
        <div />
      </div>
    </header>
  );
};

export default Header;
