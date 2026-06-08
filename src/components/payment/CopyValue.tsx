"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyValueProps {
  label: string;
  value: string;
}

export default function CopyValue({ label, value }: CopyValueProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[var(--attorney-primary)]/10 last:border-0">
      <div className="min-w-0">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--attorney-primary)]/50 mb-1">
          {label}
        </p>
        <p className="text-[var(--attorney-primary)] font-mono text-sm break-all">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="shrink-0 p-2 rounded border border-[var(--attorney-primary)]/20 text-[var(--attorney-primary)]/70 hover:border-[var(--attorney-accent)] hover:text-[var(--attorney-accent)] transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
