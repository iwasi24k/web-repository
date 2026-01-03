import { useEffect, useState, useRef, useCallback } from "react";

const NAV_ITEMS = [
  { label: "TOP", href: "#top" },
  { label: "SYSTEM", href: "#system" },
  { label: "FEATURES", href: "#features" },
  { label: "WORKFLOW", href: "#workflow" },
  { label: "WEB ENGINEERING", href: "#web-eng" },
  { label: "GAME ENGINEERING", href: "#game-eng" },
  { label: "COMMENTS", href: "#comments" },
];

type NavigationProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const [activeId, setActiveId] = useState<string>("");

  const entriesRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
  const isAutoScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const clickLockRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  // 1. スクロール停止検知ロジック
  useEffect(() => {
    const handleScroll = () => {
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
      scrollEndTimerRef.current = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
        clickLockRef.current = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  // 2. IntersectionObserver の設定
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // 1. 各エントリーの状態を最新に更新
      entries.forEach((entry) => {
        entriesRef.current[entry.target.id] = entry;
      });

      // 2. クリックによる自動スクロール中は IntersectionObserver による activeId 更新を無視
      if (isAutoScrollingRef.current) return;

      // 3. 交差している（画面内にある）要素を抽出
      const visibleEntries = Object.values(entriesRef.current).filter(
        (entry) => entry.isIntersecting
      );

      if (visibleEntries.length > 0) {
        // 最も交差面積が大きい、または上部にある要素を選択
        const bestEntry = visibleEntries.reduce((prev, curr) => {
          return curr.intersectionRatio > prev.intersectionRatio ? curr : prev;
        });

        if (bestEntry) {
          setActiveId(`#${bestEntry.target.id}`);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      // thresholdを細かくすることで、少しの移動でも検知可能にする
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      // 画面中央付近で判定するように調整
      rootMargin: "-10% 0px -70% 0px",
    });

    // 監視の開始
    const ids = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // DOMの変化を監視して動的にターゲットを再取得
    const mutationObserver = new MutationObserver(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []); // 基本は空で良いが、内部ロジックを整理

  // 3. クリックハンドラ
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (clickLockRef.current) return;

      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);
      if (!target) return;

      setIsOpen(false);
      clickLockRef.current = true;
      isAutoScrollingRef.current = true;
      setActiveId(href);

      // スムーズスクロール
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // 保険のタイマー
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
        clickLockRef.current = false;
      }, 1000);
    },
    [setIsOpen]
  );

  // 4. スクロールロック
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* ハンバーガーボタン（スマホ専用） */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 right-4 z-70 p-3 md:hidden group"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-8">
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* ナビゲーションメニュー */}
      <nav
        className={`
          fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center gap-8
          transition-all duration-500
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
          md:static md:inset-auto md:bg-transparent md:flex-row md:opacity-100 md:visible md:pointer-events-auto
          md:justify-center md:gap-[3vw] md:max-w-full md:px-4 md:h-full md:items-center md:pb-[1.2vh]
        `}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`
                relative py-2 transition-all duration-300 ease-in-out
                text-xl font-normal md:text-[1.7svh]
                whitespace-nowrap tracking-wide
                will-change-[transform,filter] transform-gpu
                ${isActive 
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]" 
                  : "text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"}
              `}
            >
              {item.label}
              <span
                className={`
                  absolute -bottom-1 left-0 h-[0.2dvh] w-full bg-white shadow-[0_0_8px_white]
                  transition-all duration-300 ease-in-out
                  will-change-transform backface-hidden
                  ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                `}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;

// import { useEffect, useState, useRef, useCallback } from "react";

// const NAV_ITEMS = [
//   { label: "TOP", href: "#top" },
//   { label: "SYSTEM", href: "#system" },
//   { label: "FEATURES", href: "#features" },
//   { label: "WORKFLOW", href: "#workflow" },
//   { label: "WEB ENGINEERING", href: "#web-eng" },
//   { label: "GAME ENGINEERING", href: "#game-eng" },
//   { label: "COMMENTS", href: "#comments" },
// ];

// const Navigation = () => {
//   const [activeId, setActiveId] = useState<string>("");
  
//   // 交差状態を保持するRef
//   const entriesRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
//   // 監視済み要素のIDを記録するSet（重複observe防止用）
//   const observedIdsRef = useRef<Set<string>>(new Set());
//   // IntersectionObserverのインスタンス保持用
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const isAutoScrollingRef = useRef(false);
//   const scrollEndTimerRef = useRef<number | null>(null);
//   const clickLockRef = useRef(false);
//   const fallbackTimerRef = useRef<number | null>(null);

//   // ---------------------------------------------------------
//   // 1. スクロールイベントハンドラ (完了検知 & ロック解除)
//   // ---------------------------------------------------------
//   useEffect(() => {
//     const onScroll = () => {
//       // スクロール中はタイマーをリセットし続ける（デバウンス処理）
//       if (scrollEndTimerRef.current !== null) {
//         clearTimeout(scrollEndTimerRef.current);
//       }

//       // スクロール停止とみなすタイマー (100ms静止で停止と判断)
//       scrollEndTimerRef.current = window.setTimeout(() => {
//         isAutoScrollingRef.current = false;
//         clickLockRef.current = false; // ★改善: スクロール停止に合わせてロック解除
//         scrollEndTimerRef.current = null;
        
//         // フォールバックタイマーが生きていればクリア
//         if (fallbackTimerRef.current !== null) {
//           clearTimeout(fallbackTimerRef.current);
//           fallbackTimerRef.current = null;
//         }
//       }, 100);
//     };

//     // ★改善: passiveオプションを追加してパフォーマンス向上
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
//       if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
//     };
//   }, []);

//   // ---------------------------------------------------------
//   // 2. IntersectionObserver & MutationObserver (監視ロジック)
//   // ---------------------------------------------------------
//   useEffect(() => {
//     const currentObservedIds = observedIdsRef.current;
//     entriesRef.current = {};
//     observedIdsRef.current.clear();

//     // A. IntersectionObserverの初期化
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         // 常に最新データを更新
//         entries.forEach((entry) => {
//           entriesRef.current[entry.target.id] = entry;
//         });

//         // 自動スクロール中は activeId の更新のみスキップ
//         if (isAutoScrollingRef.current) return;

//         const allEntries = Object.values(entriesRef.current);
//         const visibleEntries = allEntries.filter((e) => e.isIntersecting);

//         if (visibleEntries.length > 0) {
//           // 最も「見えている高さ」が大きい要素を選択
//           const bestEntry = visibleEntries.reduce((prev, current) => {
//             return prev.intersectionRect.height > current.intersectionRect.height
//               ? prev
//               : current;
//           });

//           if (bestEntry.target.id) {
//             setActiveId(`#${bestEntry.target.id}`);
//           }
//         }
//       },
//       {
//         threshold: Array.from({ length: 11 }, (_, i) => i / 10),
//         rootMargin: "-20% 0px -20% 0px",
//       }
//     );

//     // B. 要素を検索して監視を開始する関数
//     const observeTargets = () => {
//       const observer = observerRef.current;
//       if (!observer) return;

//       NAV_ITEMS.forEach((item) => {
//         const id = item.href.replace("#", "");
//         const el = document.getElementById(id);

//         if(el) {
//           if(!observedIdsRef.current.has(id)){
//             observer.observe(el);
//             observedIdsRef.current.add(id);
//           }
//         } else {
//           observedIdsRef.current.delete(id);
//           delete entriesRef.current[id];
//         }
//       });
//     };

//     // 初回実行
//     observeTargets();

//     // ★改善: MutationObserverでDOMの変化を監視し、遅延読み込み要素に対応
//     const mutationObserver = new MutationObserver(() => {
//       observeTargets();
//     });

//     // body以下のDOM追加・削除を監視
//     mutationObserver.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     return () => {
//       observerRef.current?.disconnect();
//       mutationObserver.disconnect();
//       entriesRef.current = {};
//       currentObservedIds.clear();
//     };
//   }, []);

//   // ---------------------------------------------------------
//   // 3. クリックハンドラ
//   // ---------------------------------------------------------
//   const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();

//     if (clickLockRef.current) return;

//     // ★改善: デッドロック対策
//     // ロックを掛ける前にターゲットの存在を確認する
//     const targetId = href.replace("#", "");
//     const target = document.getElementById(targetId);

//     if (!target) {
//       console.warn(`Target element "${targetId}" not found.`);
//       return; // ターゲットがなければロックせずに終了
//     }

//     // ここで初めてロック
//     clickLockRef.current = true;
//     isAutoScrollingRef.current = true;
//     setActiveId(href); // クリック時は即座にアクティブ化

//     target.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });

//     // ★改善: フォールバックタイマー
//     // 「すでにその場所にいてスクロールイベントが発生しない」場合などに備え、
//     // 確実にロックを解除するための保険（少し長めに設定）
//     if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
//     fallbackTimerRef.current = window.setTimeout(() => {
//       isAutoScrollingRef.current = false;
//       clickLockRef.current = false;
//     }, 1000);

//   }, []);

//   return (
//     <nav className="flex justify-center gap-[3vw] max-w-full px-4">
//       {NAV_ITEMS.map((item) => {
//         const isActive = activeId === item.href;

//         return (
//           <a
//             key={item.href}
//             href={item.href}
//             onClick={(e) => handleClick(e, item.href)}
//             className={`
//               relative py-2 transition-all duration-300 ease-in-out
//               text-[1.7svh]
//               whitespace-nowrap
//               tracking-wide
//               ${
//                 isActive
//                   ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
//                   : "text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
//               }
//             `}
//           >
//             {item.label}
//             <span
//               className={`
//                 absolute bottom-0 left-0 h-[0.2dvh] w-full bg-white shadow-[0_0_8px_white]
//                 transition-all duration-300 ease-in-out
//                 ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
//               `}
//             />
//           </a>
//         );
//       })}
//     </nav>
//   );
// };

// export default Navigation;