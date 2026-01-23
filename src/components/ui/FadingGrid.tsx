import React, { useEffect, useRef, useState } from "react";

type FadingGridProps = {
  lineColor: string;
  textColor: string;
  lineWidth: string;
  textSizeClass: string;
  cellWidthClass: string;
  cellHeightClass: string;
  containerClass?: string;
  rows: number;
  cols: number;
  fadeStart: string;
  isTextFading: boolean;
  items: string[];
  /** アニメーションの完了までの時間 (秒) 例: 0.5 */
  animationDuration?: number;
  /** 列ごとの表示遅延時間 (秒) 例: 0.1 */
  staggerDelay?: number;
};

const FadingGrid = ({
  lineColor,
  textColor,
  lineWidth,
  textSizeClass,
  cellWidthClass,
  cellHeightClass,
  containerClass = "",
  rows,
  cols,
  fadeStart,
  isTextFading,
  items,
  animationDuration = 0.6,
  staggerDelay = 0.1,
}: FadingGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const currentRootMargin = active ? "0px" : "-10% 0px -10% 0px";
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (active || timerRef.current) return;
          timerRef.current = window.setTimeout(() => {
            setActive(true);
            timerRef.current = null;
          }, 100);
        } else {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          if (!active) return;
          setActive(false);
        }
      },
      { threshold: 0.1, rootMargin: currentRootMargin },
    );

    observer.observe(element);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      observer.unobserve(element);
    };
  }, [active]);

  const gridCols = cols + 1;
  const gridRows = rows + 1;
  const totalCells = gridRows * gridCols;
  const displayItems = [...items, ...Array(totalCells).fill("")].slice(
    0,
    totalCells,
  );

  const maskStyle: React.CSSProperties = {
    maskImage: `radial-gradient(circle at center, black ${fadeStart}, transparent 95%)`,
    WebkitMaskImage: `radial-gradient(circle at center, black ${fadeStart}, transparent 95%)`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
  };

  // 1. 基本となるトランジション設定（durationとdelayはstyleで直接制御する）
  const transitionBase = active
    ? "transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
    : "transition-none";

  // ... (前半部分は変更なし)

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center overflow-hidden ${containerClass}`}
    >
      <div className={`relative ${cellWidthClass} ${cellHeightClass}`}>
        {/* 1. 線レイヤー (変更なし) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={maskStyle}
        >
          {/* 縦線 */}
          {Array.from({ length: cols }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute h-full flex justify-center overflow-hidden"
              style={{
                left: `${((i + 1) / gridCols) * 100}%`,
                width: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`${transitionBase} ${active ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
                style={{
                  backgroundColor: lineColor,
                  width: lineWidth,
                  height: "100%",
                  transitionDuration: `${animationDuration}s`,
                  transitionDelay: active ? `${(i + 1) * staggerDelay}s` : "0s",
                }}
              />
            </div>
          ))}
          {/* 横線 */}
          {Array.from({ length: rows }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute w-full flex items-center overflow-hidden"
              style={{
                top: `${((i + 1) / gridRows) * 100}%`,
                height: "10px",
                transform: "translateY(-50%)",
              }}
            >
              <div
                className={`${transitionBase} ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                style={{
                  backgroundColor: lineColor,
                  height: lineWidth,
                  width: "100%",
                  transitionDuration: `${animationDuration * 1.5}s`,
                  transitionDelay: active ? `${(i + 1) * staggerDelay}s` : "0s",
                }}
              />
            </div>
          ))}
        </div>

        {/* 2. テキストレイヤー (透明度の制御を style に集約) */}
        <div
          className="relative z-10 grid w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
            ...(isTextFading ? maskStyle : {}),
          }}
        >
          {displayItems.map((text, index) => {
            const col = index % gridCols;
            const delay = active ? `${col * staggerDelay}s` : "0s";

            return (
              <div
                key={`text-${index}`}
                className={`flex items-center justify-center text-center whitespace-pre-line ${textSizeClass} ${transitionBase} ${
                  // 座標移動のみクラスで制御
                  active ? "translate-y-0" : "translate-y-4"
                }`}
                style={{
                  color: textColor,
                  transitionDuration: `${animationDuration}s`,
                  transitionDelay: delay,
                  // 透明度をインラインスタイルで直接制御（!importantに近い優先度になります）
                  opacity: active ? 1 : 0,
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FadingGrid;
