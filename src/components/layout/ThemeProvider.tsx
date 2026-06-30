"use client";

import { useEffect } from "react";
import type { AttorneyTheme } from "@/types/attorney";

interface ThemeProviderProps {
  theme: AttorneyTheme;
  children: React.ReactNode;
}

export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--attorney-primary", theme.primary);
    document.documentElement.style.setProperty("--attorney-accent", theme.accent);
    document.documentElement.style.setProperty("--attorney-bg", theme.background);
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.primary;
  }, [theme]);

  return <>{children}</>;
}
