"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils/CnT";

export default function InstallSnippet({
  command,
  className,
}: {
  command: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (unsupported browser or blocked permission) — safe to ignore.
    }
  }

  return (
    <div
      className={cn(
        "flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs sm:text-sm",
        className
      )}
    >
      <span className="flex items-start gap-2 min-w-0 break-words">
        <span className="text-accent-amber shrink-0" aria-hidden="true">
          $
        </span>
        <span className="text-white-p">
          {command.split("/").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <>
                  /<wbr />
                </>
              )}
            </span>
          ))}
        </span>
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Command copied" : "Copy install command"}
        className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-white/60 hover:text-accent-amber hover:border-accent-amber/40 transition-colors duration-200"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}
