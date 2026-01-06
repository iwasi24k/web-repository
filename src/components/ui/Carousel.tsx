import { useEffect, useRef, useState, useCallback } from "react";

const SLIDE_DURATION = 500;

type CarouselProps = {
  images: string[];
  className?: string;
  itemClassName?: string;
  slideGap?: string;
  autoSlideInterval?: number;
  indicatorActiveColor?: string;
  indicatorInactiveColor?: string;
};

const Carousel = ({
  images,
  className = "",
  itemClassName = "border-[0.0625rem] border-black p-2",
  slideGap = "1rem",
  autoSlideInterval = 4000,
  indicatorActiveColor = "#1f2937",
  indicatorInactiveColor = "#d1d5db",
}: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // タイマーを安全にクリアする関数
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // 次のスライドへ
  const nextSlide = useCallback(() => {
    if (isSliding || !hasMultipleImages) return;

    clearTimer(); // 既存のタイマーがあればクリア
    setIsSliding(true);
    setIndex((prev) => (prev + 1) % images.length);

    timerRef.current = setTimeout(() => {
      setIsSliding(false);
      timerRef.current = null;
    }, SLIDE_DURATION);
  }, [images.length, isSliding, hasMultipleImages, clearTimer]);

  // 前のスライドへ
  const prevSlide = useCallback(() => {
    if (isSliding || !hasMultipleImages) return;

    clearTimer();
    setIsSliding(true);
    setIndex((prev) => (prev - 1 + images.length) % images.length);

    timerRef.current = setTimeout(() => {
      setIsSliding(false);
      timerRef.current = null;
    }, SLIDE_DURATION);
  }, [images.length, isSliding, hasMultipleImages, clearTimer]);

  // コンポーネントのアンマウント時にクリーンアップ
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const jumpTo = (target: number) => {
    if (isSliding || target === index) return;
    setIndex(target);
  };

  // 自動スライド
  useEffect(() => {
    if (!hasMultipleImages || isDragging || autoSlideInterval <= 0) return;
    const timer = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(timer);
  }, [autoSlideInterval, hasMultipleImages, isDragging, nextSlide]);

  // ドラッグ操作
  const onStart = (x: number) => {
    if (!hasMultipleImages || isSliding) return;
    startX.current = x;
    setIsDragging(true);
  };

  const onMove = (x: number) => {
    if (startX.current === null) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    const diff = ((x - startX.current) / rect.width) * 100;
    setDragOffset(diff);
  };

  const onEnd = (x: number) => {
    if (startX.current === null) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    setIsDragging(false);
    if (rect) {
      const diff = x - startX.current;
      if (Math.abs(diff) > rect.width * 0.2) {
        if (diff > 0) prevSlide();
        else nextSlide();
      }
    }
    setDragOffset(0);
    startX.current = null;
  };

  return (
    <div className={`flex flex-col gap-[3vw] ${className}`}>
      <div
        ref={viewportRef}
        className="relative overflow-hidden select-none touch-pan-y w-full aspect-video"
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onMouseLeave={(e) => isDragging && onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${dragOffset}%))`,
            transition: isDragging
              ? "none"
              : `transform ${SLIDE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={img} // 画像URLをキーにすることで再描画を防ぐ
              className="shrink-0 w-full h-full flex items-center justify-center"
            >
              <div
                className={itemClassName}
                style={{ width: `calc(100% - ${slideGap})` }}
              >
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  draggable={false}
                  loading="eager" // プリロードを促す
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* インジケーター */}
      {hasMultipleImages && (
        <div
          className="flex justify-center items-center gap-2 h-3"
          role="tablist"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => jumpTo(i)}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              style={{
                backgroundColor:
                  i === index ? indicatorActiveColor : indicatorInactiveColor,
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
