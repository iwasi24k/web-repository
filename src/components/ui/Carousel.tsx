import { useEffect, useRef, useState, useCallback } from "react";

const SLIDE_DURATION = 500;

type CarouselProps = {
  images: string[];
  
  // 親コンテナへのクラス（位置、サイズ、アスペクト比など）
  className?: string;

  // 画像を囲む枠のクラス（ボーダーの太さ、色、パディングなど）
  // "border-2 border-black p-2" のように指定可能になります
  itemClassName?: string;

  // スライド間の隙間（こちらは計算が必要なため style で扱いますが、%指定などで調整）
  slideGap?: string;

  autoSlideInterval?: number;
  indicatorActiveColor?: string;
  indicatorInactiveColor?: string;
};

const Carousel = ({
  images,
  className = "",
  
  // デフォルトのスタイルをTailwindクラスで定義
  itemClassName = "border-[0.0625rem] border-black p-2", 
  
  slideGap = "1rem",
  autoSlideInterval = 4000,
  indicatorActiveColor = "#1f2937",
  indicatorInactiveColor = "#d1d5db",
}: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const hasMultipleImages = images.length > 1;

  const slideTo = useCallback(
    (dir: number) => {
      if (isSliding || !hasMultipleImages) return;

      setIsSliding(true);
      setOffset(dir * 100);

      window.setTimeout(() => {
        setIndex((i) => (i + dir + images.length) % images.length);
        setOffset(0);
        setIsSliding(false);
      }, SLIDE_DURATION);
    },
    [images.length, isSliding, hasMultipleImages]
  );

  const jumpTo = (target: number) => {
    if (isSliding || target === index) return;
    setIndex(target);
    setOffset(0);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!hasMultipleImages || isDragging || isSliding) return;
    const timer = window.setInterval(() => slideTo(1), autoSlideInterval);
    return () => clearInterval(timer);
  }, [autoSlideInterval, hasMultipleImages, isDragging, isSliding, slideTo]);

  const onStart = (x: number) => {
    if (!hasMultipleImages) return;
    startX.current = x;
    setIsDragging(true);
  };

  const onMove = (x: number) => {
    if (startX.current === null || isSliding) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    setDragOffset(((x - startX.current) / rect.width) * 100);
  };

  const onEnd = (x: number) => {
    if (startX.current === null) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    setIsDragging(false);
    if (rect) {
      const diff = x - startX.current;
      if (Math.abs(diff) > rect.width * 0.2) {
        slideTo(diff > 0 ? -1 : 1);
      }
    }
    setDragOffset(0);
    startX.current = null;
  };

  const prev = (index - 1 + images.length) % images.length;
  const next = (index + 1) % images.length;

  const visible = [
    { index: prev, pos: -1 },
    { index, pos: 0 },
    { index: next, pos: 1 },
  ];

  return (
    // widthやstyleプロパティを排除し、classNameのみを受け入れるように整理
    <div className={`flex flex-col gap-[3svh] ${className}`}>
      <div
        ref={viewportRef}
        // aspectRatioのデフォルトを削除し、親のクラス指定に委ねる（指定なければdivの自然な振る舞い）
        // ただしスライドの構造上、親かここにaspect指定がないと高さが潰れる可能性があるため、呼び出し側で必ずaspectを指定してください
        className="relative overflow-hidden select-none touch-pan-y w-full h-full"
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onMouseLeave={(e) => isDragging && onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        {visible.map(({ index: imgIndex, pos }) => {
          const translate = pos * 100 - offset + dragOffset;

          return (
            <div
              key={`${imgIndex}-${pos}`}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translateX(${translate}%)`,
                transition: isDragging
                  ? "none"
                  : `transform ${SLIDE_DURATION}ms ease-out`,
              }}
            >
              <div
                // ここで渡された itemClassName を適用します
                className={`h-full ${itemClassName}`}
                style={{
                  // Gapの計算だけはstyleで行う
                  width: `calc(100% - ${slideGap})`,
                }}
              >
                <img
                  src={images[imgIndex]}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          );
        })}
      </div>

      {hasMultipleImages && (
        <div className="flex justify-center items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              style={{
                backgroundColor:
                  i === index
                    ? indicatorActiveColor
                    : indicatorInactiveColor,
              }}
              className={`rounded-sm transition-all duration-300 ${
                i === index ? "w-3 h-3" : "w-2 h-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;