import { useEffect, useRef, useState } from "react";

export type TextTitleProps = {
    text: string;
    textColor?: string;
    textSize?: string;
};

const TextTitle = ({
    text,
    textColor = "#fff",
    textSize = "text-2xl",
}: TextTitleProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const timerRef = useRef<number | null>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const currentRootMargin = active ? "0px" : "-15% 0px -15% 0px";
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
            {
                threshold: 0,
                rootMargin: currentRootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            observer.unobserve(element);
        };
    }, [active]);

    return (
        <div ref={ref} className="inline-flex flex-col">
            <h1
                className={`font-bold tracking-wide ${textSize}`}
                style={{ color: textColor }}
            >
                {text}
            </h1>

            {/* 下線 */}
            <div className="mt-[1svh] h-px md:h-0.5 relative overflow-hidden w-[115%] left-[-2.5%]">
                <div
                    className={`
                        h-full
                        origin-left
                        transition-all
                        duration-700
                        ease-out
                        ${active
                            ? "scale-x-100 translate-x-0"
                            : "scale-x-0 -translate-x-4"}
                    `}
                    style={{
                        backgroundColor: textColor,
                    }}
                />
            </div>
        </div>
    );
};

export default TextTitle;
