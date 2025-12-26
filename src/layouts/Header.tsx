import TitleLogo from "../components/ui/TitleLogo";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-24
        bg-linear-to-b from-black/80 via-black/50 to-transparent
        backdrop-blur-md
        border-b border-white/10
        "
    >
        <div className="flex items-center h-full px-16">
            <TitleLogo className="text-3xl" />
        </div>
    </header>
  );
};

export default Header;
