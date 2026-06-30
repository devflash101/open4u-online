import { notFound } from "next/navigation";
import type { AttorneyProfile } from "@/types/attorney";
import { ATTORNEY_REGISTRY, ATTORNEY_SLUGS } from "@/attorneys/registry";

export { ATTORNEY_COOKIE } from "@/lib/attorney-constants";

export function isValidAttorneySlug(slug: string): boolean {
  return ATTORNEY_SLUGS.includes(slug);
}

export function getAttorneyBySlug(slug: string): AttorneyProfile | null {
  return ATTORNEY_REGISTRY[slug] ?? null;
}

export function getAttorneyFromParams(slug: string): AttorneyProfile {
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) {
    notFound();
  }
  return attorney;
}

export function getAllAttorneySlugs(): string[] {
  return ATTORNEY_SLUGS;
}
