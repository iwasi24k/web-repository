import { useState } from "react";
import Navigation from "../components/ui/Navigation";
import titleLogoImage from "../assets/texture/TitleLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 backdrop-blur-md
        ${
          isOpen
            ? "h-full bg-black"
            : "h-0 lg:h-[5vw] bg-linear-to-b from-black/80 via-black/40 to-transparent"
        }
      `}
    >
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center px-[4vw] ${isOpen ? "h-0" : "h-full"}`}
      >
        <img
          className="hidden lg:block lg:w-[8vw] user-select-none pointer-events-none"
          src={titleLogoImage}
          alt="Voxel Void"
        />

        {/* 状態と関数をPropsとして渡す */}
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="hidden lg:block lg:w-0" />
      </div>
    </header>
  );
};

export default Header;
