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
  
  // 交差状態を保持するRef
  const entriesRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
  // 監視済み要素のIDを記録するSet（重複observe防止用）
  const observedIdsRef = useRef<Set<string>>(new Set());
  // IntersectionObserverのインスタンス保持用
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isAutoScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const clickLockRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  // ---------------------------------------------------------
  // 1. スクロールイベントハンドラ (完了検知 & ロック解除)
  // ---------------------------------------------------------
  useEffect(() => {
    const onScroll = () => {
      // スクロール中はタイマーをリセットし続ける（デバウンス処理）
      if (scrollEndTimerRef.current !== null) {
        clearTimeout(scrollEndTimerRef.current);
      }

      // スクロール停止とみなすタイマー (100ms静止で停止と判断)
      scrollEndTimerRef.current = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
        clickLockRef.current = false; // ★改善: スクロール停止に合わせてロック解除
        scrollEndTimerRef.current = null;
        
        // フォールバックタイマーが生きていればクリア
        if (fallbackTimerRef.current !== null) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      }, 100);
    };

    // ★改善: passiveオプションを追加してパフォーマンス向上
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  // ---------------------------------------------------------
  // 2. IntersectionObserver & MutationObserver (監視ロジック)
  // ---------------------------------------------------------
  useEffect(() => {
    const currentObservedIds = observedIdsRef.current;

    // A. IntersectionObserverの初期化
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // 常に最新データを更新
        entries.forEach((entry) => {
          entriesRef.current[entry.target.id] = entry;
        });

        // 自動スクロール中は activeId の更新のみスキップ
        if (isAutoScrollingRef.current) return;

        const allEntries = Object.values(entriesRef.current);
        const visibleEntries = allEntries.filter((e) => e.isIntersecting);

        if (visibleEntries.length > 0) {
          // 最も「見えている高さ」が大きい要素を選択
          const bestEntry = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRect.height > current.intersectionRect.height
              ? prev
              : current;
          });

          if (bestEntry.target.id) {
            setActiveId(`#${bestEntry.target.id}`);
          }
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // B. 要素を検索して監視を開始する関数
    const observeTargets = () => {
      const observer = observerRef.current;
      if (!observer) return;

      NAV_ITEMS.forEach((item) => {
        const id = item.href.replace("#", "");
        
        // まだ監視していないIDのみ処理
        if (!observedIdsRef.current.has(id)) {
          const el = document.getElementById(id);
          if (el) {
            observer.observe(el);
            observedIdsRef.current.add(id);
          }
        }
      });
    };

    // 初回実行
    observeTargets();

    // ★改善: MutationObserverでDOMの変化を監視し、遅延読み込み要素に対応
    const mutationObserver = new MutationObserver(() => {
      observeTargets();
    });

    // body以下のDOM追加・削除を監視
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      currentObservedIds.clear();
    };
  }, []);

  // ---------------------------------------------------------
  // 3. クリックハンドラ
  // ---------------------------------------------------------
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (clickLockRef.current) return;

    // ★改善: デッドロック対策
    // ロックを掛ける前にターゲットの存在を確認する
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) {
      console.warn(`Target element "${targetId}" not found.`);
      return; // ターゲットがなければロックせずに終了
    }

    // ここで初めてロック
    clickLockRef.current = true;
    isAutoScrollingRef.current = true;
    setActiveId(href); // クリック時は即座にアクティブ化

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // ★改善: フォールバックタイマー
    // 「すでにその場所にいてスクロールイベントが発生しない」場合などに備え、
    // 確実にロックを解除するための保険（少し長めに設定）
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = window.setTimeout(() => {
      isAutoScrollingRef.current = false;
      clickLockRef.current = false;
    }, 1000);

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