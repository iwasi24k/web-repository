import TitleLogo from "../components/ui/TitleLogo";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-20
        h-24
        bg-black/40 backdrop-blur-md
        border-d border-white/10
        "
    >
        <div className="flex items-center h-full px-16">
            <TitleLogo className="text-3xl" />
        </div>
    </header>
  );
};

export default Header;
