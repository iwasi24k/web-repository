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

const Navigation = () => {
  const [activeId, setActiveId] = useState<string>("");

  // ★修正ポイント1: 全セクションの最新状態を保持するRefを追加
  const entriesRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  const isAutoScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const clickLockRef = useRef(false);

  // scrollイベントでスクロール中フラグを管理
  useEffect(() => {
    const onScroll = () => {
      if (scrollEndTimerRef.current !== null) {
        clearTimeout(scrollEndTimerRef.current);
      }

      scrollEndTimerRef.current = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
        scrollEndTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // IntersectionObserverでセクションの表示状態を監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        // ★修正ポイント2: 変化があった要素(entries)をMap(entriesRef)に反映・更新する
        entries.forEach((entry) => {
          entriesRef.current[entry.target.id] = entry;
        });

        // スクロールアニメーション中は自動更新をスキップ
        if (isAutoScrollingRef.current) return;

        // ★修正ポイント3: Mapに保存された「全てのセクション」の中から判定を行う
        // これにより、今回変化しなかったセクションも比較対象に含まれるようになります
        const allEntries = Object.values(entriesRef.current);
        
        // 画面内に入っている(isIntersecting)ものだけを抽出
        const visibleEntries = allEntries.filter((e) => e.isIntersecting);

        if (visibleEntries.length > 0) {
          const bestEntry = visibleEntries.reduce((prev, current) => {
             // intersectionRatio だと、セクションの高さが違う場合に小さいセクションが勝ちやすいため
             // 「画面に見えている高さ(intersectionRect.height)」で比較するとより直感的に安定します。
             // もとのロジック(ratio)がお好みの場合は .intersectionRatio に戻してもOKですが、
             // .height の方が "一番見えているもの" として自然です。
             return prev.intersectionRect.height > current.intersectionRect.height
               ? prev
               : current;
          });

          // IDが空でないことを確認してからセット
          if (bestEntry.target.id) {
            setActiveId(`#${bestEntry.target.id}`);
          }
        }
      },
      {
        // 判定精度
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 100分割は重い可能性があるため10分割程度でも十分機能しますが、元のままでも動作はします
        rootMargin: "-20% 0px -20% 0px", // 上下20%を判定から除外することで、画面中央付近にあるものを優先しやすくする
      }
    );

    NAV_ITEMS.forEach((item) => {
      // #を除去してIDを取得
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (clickLockRef.current) return;
    clickLockRef.current = true;

    // #を除去してターゲット取得
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    
    if (!target) return;

    isAutoScrollingRef.current = true;
    setActiveId(href);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      clickLockRef.current = false;
    }, 500);
  }, []);

  return (
    <nav className="flex justify-center gap-14 text-base tracking-wide">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`
              relative py-2 transition-all duration-300 ease-in-out
              ${
                isActive
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                  : "text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
              }
            `}
          >
            {item.label}
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 w-full bg-white shadow-[0_0_8px_white]
                transition-all duration-300 ease-in-out
                ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
              `}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;