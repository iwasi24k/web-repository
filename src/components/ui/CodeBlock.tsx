import { type ReactNode, useState } from "react";

type CodeBlockProps = {
  children: ReactNode;
  defaultOpen?: boolean;
};

const CodeBlock = ({ children, defaultOpen = false }: CodeBlockProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="
        mt-6
        w-full 
        min-w-0
        border border-white/50
        bg-neutral-950
        flex flex-col
      "
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex w-full items-center justify-between
          px-3 py-2
          text-xs font-mono
          text-neutral-300
          hover:bg-neutral-900
          transition-colors
          shrink-0
        "
      >
        <span>Code</span>
        <span className="text-sm">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="w-full min-w-0 overflow-hidden">
            <pre
            className="
                w-full
                max-w-full
                overflow-x-auto
                p-3 sm:p-4
                font-mono
                text-[11px] sm:text-sm
                leading-relaxed
                text-neutral-100
                border-t border-neutral-800
                scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent
            "
            >
            <code className="block whitespace-pre min-w-max">
                {children}
            </code>
            </pre>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;