import { useState } from "react";
import TitleLogo from "../components/ui/TitleLogo";
import Navigation from "../components/ui/Navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 backdrop-blur-md
        /* isOpenがtrueなら全画面・黒、falseならグラデーション */
        ${isOpen 
          ? "h-dvh bg-black" 
          : "h-16 md:h-(--header-h) bg-linear-to-b from-black/80 via-black/40 to-transparent"
        }
      `}
    >
      <div className={`grid grid-cols-[auto_1fr_auto] items-center px-[4vw] ${isOpen ? "h-16" : "h-full"}`}>
        <TitleLogo className="text-xl md:text-[3svh] z-60" />

        {/* 状態と関数をPropsとして渡す */}
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="w-8 md:w-0" />
      </div>
    </header>
  );
};

export default Header;

// import TitleLogo from "../components/ui/TitleLogo";
// import Navigation from "../components/ui/Navigation";

// const Header = () => {
//   return (
//     <header
//       className="
//         fixed top-0 left-0 right-0 z-50
//         h-16 md:h-(--header-h) min-h-16
        
//         bg-linear-to-b from-black/80 via-black/50 to-transparent
//         backdrop-blur-md
//       "
//     >
//       <div
//         className="
//           grid grid-cols-[auto_1fr_auto]
//           items-center h-full
//           px-[4vw]
//           -translate-y-[0.5svh]
//         "
//       >
//         {/* ロゴサイズ: 文字サイズも高さ基準 (vh) にすることでズームしても比率維持 */ }
//         <TitleLogo className="text-[3svh]" />
        
//         {/* ナビゲーションの文字サイズ等もNavigationコンポーネント内で text-[2dvh] などに変更推奨 */}
//         <Navigation />
        
//         <div />
//       </div>
//     </header>
//   );
// };

// export default Header;