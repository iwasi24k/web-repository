import { useEffect, useState } from "react";

type Block = {
  x: number;
  y: number;
  size: number;
  depth: number;
  color: string;
};

const createBlocks = (count: number): Block[] => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 180 - 100,
    size: window.innerWidth * (Math.random() * 0.02 + 0.02),
    depth: Math.random() * 0.8 + 0.2,
    color: `hsl(0, 0%, ${Math.random() * 60 + 20}%)`,
  }));
};

export const WorldBlocksLayer = () => {
  const [blocks, setBlocks] = useState<Block[]>(() => createBlocks(30));
  const [scrollY, setScrollY] = useState(0);

  const getBreakpoint = () => {
    const w = window.innerWidth;
    if (w < 640) return "sm";
    if (w < 1024) return "md";
    return "lg";
  };

  useEffect(() => {
    let lastBp = getBreakpoint();
    let lastDpr = window.devicePixelRatio;

    const onResize = () => {
      const bp = getBreakpoint();
      const dpr = window.devicePixelRatio;

      if (bp === lastBp && dpr === lastDpr) return;

      lastBp = bp;
      lastDpr = dpr;
      setBlocks(createBlocks(30));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-20 overflow-hidden pointer-events-none">
      {blocks.map((block, index) => {
        const translateY = scrollY * block.depth * 0.2;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              width: block.size,
              height: block.size,
              left: `${block.x}vw`,
              top: `${block.y}svh`,
              transform: `translateY(${translateY}px)`,
              background: block.color,
              opacity: 0.4,
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
};
