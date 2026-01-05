import { useEffect, useState, useRef } from "react";

type Block = {
  x: number;
  y: number;
  size: number;
  depth: number;
  color: string;
};

// ブロック生成関数（widthは外部から渡す）
const createBlocks = (count: number, width: number): Block[] => {
  return Array.from({ length: count }, () => {
    const size = Math.min(width * (Math.random() * 0.02 + 0.02), 70); // 最大サイズ 70px
    return {
      x: Math.random() * 100,
      y: Math.random() * 180 - 100,
      size,
      depth: Math.random() * 0.8 + 0.2,
      color: `hsl(0,0%,${Math.random() * 60 + 20}%)`,
    };
  });
};

export const WorldBlocksLayer = () => {
  // SSR対応：初期幅は固定値1024を使用
  const initialWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const [blocks, setBlocks] = useState<Block[]>(() =>
    createBlocks(30, initialWidth),
  );
  const [scrollY, setScrollY] = useState(0);

  const lastBpRef = useRef<string>("lg");
  const lastDprRef = useRef<number>(
    typeof window !== "undefined" ? window.devicePixelRatio : 1,
  );

  const getBreakpoint = (width: number) => {
    if (width < 640) return "sm";
    if (width < 1024) return "md";
    return "lg";
  };

  // Resize & block regeneration
  useEffect(() => {
    const updateBlocks = () => {
      if (typeof window === "undefined") return; // 念のため
      const width = window.innerWidth;
      const bp = getBreakpoint(width);
      const dpr = window.devicePixelRatio;

      if (bp !== lastBpRef.current || dpr !== lastDprRef.current) {
        lastBpRef.current = bp;
        lastDprRef.current = dpr;
        setBlocks(createBlocks(30, width));
      }
    };

    let ticking = false;
    const onResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateBlocks();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateBlocks(); // 初回クライアントマウント時

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll tracking
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-20 overflow-hidden pointer-events-none">
      {blocks.map((block, index) => {
        const translateY = scrollY * block.depth * 0.2;
        const opacity = 0.2 + 0.2 * block.depth; // 遠いブロックは薄く

        return (
          <div
            key={index}
            className="absolute"
            style={{
              width: block.size,
              height: block.size,
              left: `${block.x}vw`,
              top: `${block.y}vh`,
              transform: `translate3d(0, ${translateY}px, 0)`,
              background: block.color,
              opacity,
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              willChange: "transform, opacity",
            }}
          />
        );
      })}
    </div>
  );
};
