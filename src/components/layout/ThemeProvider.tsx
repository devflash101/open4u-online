"use client";

import { useEffect } from "react";
import type { AttorneyProfile } from "@/types/attorney";

interface ThemeProviderProps {
  attorney: AttorneyProfile;
  children: React.ReactNode;
}

export default function ThemeProvider({ attorney, children }: ThemeProviderProps) {
  const { theme } = attorney;

  useEffect(() => {
    document.documentElement.style.setProperty("--attorney-primary", theme.primary);
    document.documentElement.style.setProperty("--attorney-accent", theme.accent);
    document.documentElement.style.setProperty("--attorney-bg", theme.background);
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.primary;
  }, [theme]);

  return <>{children}</>;
}
