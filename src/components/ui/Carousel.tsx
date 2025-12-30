import { useEffect, useRef, useState, useCallback } from "react";

const SLIDE_DURATION = 500;

type CarouselProps = {
  images: string[];
  width?: string;
  height?: string;
  className?: string;

  imageBorderColor?: string;
  imageBorderWidth?: number;
  imagePadding?: number;
  slideGap?: number;

  autoSlideInterval?: number;
  
  // インジケーター用の色設定を追加
  indicatorActiveColor?: string;   // 選択中
  indicatorInactiveColor?: string; // 未選択
};

const Carousel = ({
  images,
  width = "100%",
  height = "16rem",
  className = "",

  imageBorderColor = "#000",
  imageBorderWidth = 1,
  imagePadding = 6,
  slideGap = 12,

  autoSlideInterval = 4000,

  // デフォルト色を設定（濃いグレー と 薄いグレー）
  indicatorActiveColor = "#1f2937", // gray-800
  indicatorInactiveColor = "#d1d5db", // gray-300
}: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const hasMultipleImages = images.length > 1;

  const slideTo = useCallback((dir: number) => {
    if (isSliding || !hasMultipleImages) return;

    setIsSliding(true);
    setOffset(dir * 100);

    window.setTimeout(() => {
      setIndex((i) => (i + dir + images.length) % images.length);
      setOffset(0);
      setIsSliding(false);
    }, SLIDE_DURATION);
  }, [images.length, isSliding, hasMultipleImages]);

  const jumpTo = (targetIndex: number) => {
    if (isSliding || targetIndex === index) return;
    setIndex(targetIndex);
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

    const moveX = x - startX.current;
    setDragOffset((moveX / rect.width) * 100);
  };

  const onEnd = (x: number) => {
    if (startX.current === null) return;
    const rect = viewportRef.current?.getBoundingClientRect();
    
    setIsDragging(false);
    
    if (rect) {
        const diff = x - startX.current;
        const threshold = rect.width * 0.25;
    
        if (Math.abs(diff) > threshold) {
          slideTo(diff > 0 ? -1 : 1);
        }
    }
    
    setDragOffset(0);
    startX.current = null;
  };

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const visibleItems = [
    { index: prevIndex, pos: -1 },
    { index: index, pos: 0 },
    { index: nextIndex, pos: 1 },
  ];

  return (
    <div className={`flex flex-col gap-4 ${className}`} style={{ width }}>
      
      {/* 画像表示エリア */}
      <div
        ref={viewportRef}
        className="relative overflow-hidden select-none touch-pan-y"
        style={{ height }}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onMouseLeave={(e) => isDragging && onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        {visibleItems.map(({ index: imgIndex, pos }) => {
          const baseTranslate = pos * 100;
          const currentTranslate = baseTranslate - offset + dragOffset;

          return (
            <div
              key={`${imgIndex}-${pos}`}
              className="absolute inset-0 flex justify-center items-center pointer-events-none will-change-transform"
              style={{
                transform: `translateX(${currentTranslate}%)`,
                transition: isDragging
                  ? "none"
                  : `transform ${SLIDE_DURATION}ms ease-out`,
              }}
            >
              <div
                style={{
                  width: `calc(100% - ${slideGap}px)`,
                  height: "100%",
                  padding: imagePadding,
                  border: `${imageBorderWidth}px solid ${imageBorderColor}`,
                  boxSizing: "border-box",
                }}
                className="bg-white/5"
              >
                <img
                  src={images[imgIndex]}
                  alt={`Slide ${imgIndex}`}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-auto"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* インジケーター (四角・サイズ変化・色指定可能) */}
      {hasMultipleImages && (
        <div className="flex justify-center items-center gap-2 h-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              // 色はpropsから動的に適用
              style={{
                backgroundColor: i === index ? indicatorActiveColor : indicatorInactiveColor
              }}
              className={`rounded-sm transition-all duration-300 cursor-pointer ${
                i === index 
                  ? "w-3 h-3" // 選択中: 少し大きく
                  : "w-2 h-2" // 未選択: 小さく
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;



// import { useEffect, useRef, useState, useCallback } from "react";

// const SLIDE_DURATION = 500;

// type CarouselProps = {
//   images: string[];
//   width?: string;
//   height?: string; // 画像表示エリアの高さになります
//   className?: string;

//   imageBorderColor?: string;
//   imageBorderWidth?: number;
//   imagePadding?: number;
//   slideGap?: number;

//   autoSlideInterval?: number;
// };

// const Carousel = ({
//   images,
//   width = "100%",
//   height = "16rem",
//   className = "",

//   imageBorderColor = "#000",
//   imageBorderWidth = 1,
//   imagePadding = 6,
//   slideGap = 12,

//   autoSlideInterval = 4000,
// }: CarouselProps) => {
//   const [index, setIndex] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const [isSliding, setIsSliding] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   const startX = useRef<number | null>(null);
//   const viewportRef = useRef<HTMLDivElement | null>(null); // 名前をcontainerRefからviewportRefに変更

//   const hasMultipleImages = images.length > 1;

//   const slideTo = useCallback((dir: number) => {
//     if (isSliding || !hasMultipleImages) return;

//     setIsSliding(true);
//     setOffset(dir * 100);

//     window.setTimeout(() => {
//       setIndex((i) => (i + dir + images.length) % images.length);
//       setOffset(0);
//       setIsSliding(false);
//     }, SLIDE_DURATION);
//   }, [images.length, isSliding, hasMultipleImages]);

//   const jumpTo = (targetIndex: number) => {
//     if (isSliding || targetIndex === index) return;
//     setIndex(targetIndex);
//     setOffset(0);
//     setDragOffset(0);
//   };

//   useEffect(() => {
//     if (!hasMultipleImages || isDragging || isSliding) return;
//     const timer = window.setInterval(() => slideTo(1), autoSlideInterval);
//     return () => clearInterval(timer);
//   }, [autoSlideInterval, hasMultipleImages, isDragging, isSliding, slideTo]);

//   const onStart = (x: number) => {
//     if (!hasMultipleImages) return;
//     startX.current = x;
//     setIsDragging(true);
//   };

//   const onMove = (x: number) => {
//     if (startX.current === null || isSliding) return;
//     const rect = viewportRef.current?.getBoundingClientRect();
//     if (!rect) return;

//     const moveX = x - startX.current;
//     setDragOffset((moveX / rect.width) * 100);
//   };

//   const onEnd = (x: number) => {
//     if (startX.current === null) return;
//     const rect = viewportRef.current?.getBoundingClientRect();
    
//     setIsDragging(false);
    
//     if (rect) {
//         const diff = x - startX.current;
//         const threshold = rect.width * 0.25;
    
//         if (Math.abs(diff) > threshold) {
//           slideTo(diff > 0 ? -1 : 1);
//         }
//     }
    
//     setDragOffset(0);
//     startX.current = null;
//   };

//   const prevIndex = (index - 1 + images.length) % images.length;
//   const nextIndex = (index + 1) % images.length;

//   const visibleItems = [
//     { index: prevIndex, pos: -1 },
//     { index: index, pos: 0 },
//     { index: nextIndex, pos: 1 },
//   ];

//   return (
//     // 外側のラッパー: 縦並び (flex-col) にして画像とインジケーターを配置
//     <div className={`flex flex-col gap-4 ${className}`} style={{ width }}>
      
//       {/* 1. 画像表示エリア (Viewport) */}
//       <div
//         ref={viewportRef}
//         className="relative overflow-hidden select-none touch-pan-y"
//         style={{ height }} // 高さはここで指定
//         // Mouse Events
//         onMouseDown={(e) => onStart(e.clientX)}
//         onMouseMove={(e) => onMove(e.clientX)}
//         onMouseUp={(e) => onEnd(e.clientX)}
//         onMouseLeave={(e) => isDragging && onEnd(e.clientX)}
//         // Touch Events
//         onTouchStart={(e) => onStart(e.touches[0].clientX)}
//         onTouchMove={(e) => onMove(e.touches[0].clientX)}
//         onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
//       >
//         {visibleItems.map(({ index: imgIndex, pos }) => {
//           const baseTranslate = pos * 100;
//           const currentTranslate = baseTranslate - offset + dragOffset;

//           return (
//             <div
//               key={`${imgIndex}-${pos}`}
//               className="absolute inset-0 flex justify-center items-center pointer-events-none will-change-transform"
//               style={{
//                 transform: `translateX(${currentTranslate}%)`,
//                 transition: isDragging
//                   ? "none"
//                   : `transform ${SLIDE_DURATION}ms ease-out`,
//               }}
//             >
//               <div
//                 style={{
//                   width: `calc(100% - ${slideGap}px)`,
//                   height: "100%",
//                   padding: imagePadding,
//                   border: `${imageBorderWidth}px solid ${imageBorderColor}`,
//                   boxSizing: "border-box",
//                 }}
//                 className="bg-white/5"
//               >
//                 <img
//                   src={images[imgIndex]}
//                   alt={`Slide ${imgIndex}`}
//                   draggable={false}
//                   className="w-full h-full object-cover pointer-events-auto"
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* 2. インジケーター (Pagination Dots) - 枠の外 */}
//       {hasMultipleImages && (
//         <div className="flex justify-center items-center gap-2">
//           {images.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => jumpTo(i)}
//               className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
//                 i === index 
//                   // アクティブ: 長い・濃い色 (Tailwind Gray-800)
//                   ? "w-8 bg-gray-800" 
//                   // 非アクティブ: 短い・薄い色 (Tailwind Gray-300)
//                   : "w-2 bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;
