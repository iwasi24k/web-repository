import { type ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
};

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div
      className="
      hidden xl:block
    mt-6
    rounded-md
    border border-neutral-800
    bg-neutral-950
  "
    >
      <pre
        className="
      max-w-full
      overflow-x-auto
      overscroll-x-contain
      p-3 sm:p-4
      font-mono
      text-[11px] sm:text-sm
      leading-relaxed
      text-neutral-100
    "
      >
        <code className="whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}
