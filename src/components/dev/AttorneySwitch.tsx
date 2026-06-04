"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ATTORNEY_COOKIE } from "@/lib/attorney-constants";
import { ATTORNEY_LIST } from "@/attorneys/registry";

interface AttorneySwitchProps {
  activeSlug: string;
}

export default function AttorneySwitch({ activeSlug }: AttorneySwitchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const switchAttorney = useCallback(
    (slug: string) => {
      document.cookie = `${ATTORNEY_COOKIE}=${slug}; path=/; max-age=31536000; SameSite=Lax`;
      const params = new URLSearchParams(searchParams.toString());
      params.set("attorney", slug);
      router.push(`/?${params.toString()}`);
      router.refresh();
      setOpen(false);
    },
    [router, searchParams],
  );

  useEffect(() => {
    const querySlug = searchParams.get("attorney");
    if (querySlug && querySlug !== activeSlug) {
      document.cookie = `${ATTORNEY_COOKIE}=${querySlug}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [searchParams, activeSlug]);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const active = ATTORNEY_LIST.find((a) => a.slug === activeSlug);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-xs font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
        Dev: {active?.name ?? activeSlug}
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Switch attorney profile"
          className="absolute bottom-full right-0 mb-2 w-72 rounded-xl shadow-xl bg-white border border-neutral-200 overflow-hidden"
        >
          <div className="px-3 py-2 text-[0.65rem] tracking-wider uppercase text-neutral-500 border-b border-neutral-100">
            Switch attorney (dev only)
          </div>
          <ul>
            {ATTORNEY_LIST.map((attorney) => (
              <li key={attorney.slug}>
                <button
                  type="button"
                  role="option"
                  aria-selected={attorney.slug === activeSlug}
                  onClick={() => switchAttorney(attorney.slug)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-neutral-50 transition-colors ${
                    attorney.slug === activeSlug ? "bg-neutral-50 font-medium" : ""
                  }`}
                >
                  <span className="block text-neutral-900">{attorney.name}</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">{attorney.firm}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="px-3 py-2 text-[0.65rem] text-neutral-400 border-t border-neutral-100">
            Production uses branch config in src/config/active-attorney.ts
          </div>
        </div>
      )}
    </div>
  );
}
