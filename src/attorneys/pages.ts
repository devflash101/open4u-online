import type { ComponentType } from "react";
import type { AttorneyProfile } from "@/types/attorney";
import JayGellhausPage from "@/attorneys/jay-gellhaus/page";
import JayWangPage from "@/attorneys/jay-wang/page";

type AttorneyPageComponent = ComponentType<{ attorney: AttorneyProfile }>;

export const ATTORNEY_PAGES: Record<string, AttorneyPageComponent> = {
  "jay-gellhaus": JayGellhausPage,
  "jay-wang": JayWangPage,
};

export function getAttorneyPage(slug: string): AttorneyPageComponent | null {
  return ATTORNEY_PAGES[slug] ?? null;
}
