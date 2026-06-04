import { cookies } from "next/headers";
import { ACTIVE_ATTORNEY_SLUG } from "@/config/active-attorney";
import { ATTORNEY_REGISTRY, ATTORNEY_SLUGS } from "@/attorneys/registry";
import type { AttorneyProfile } from "@/types/attorney";
import { ATTORNEY_COOKIE } from "@/lib/attorney-constants";

export { ATTORNEY_COOKIE } from "@/lib/attorney-constants";

export function isValidAttorneySlug(slug: string): boolean {
  return ATTORNEY_SLUGS.includes(slug);
}

export function getAttorneyBySlug(slug: string): AttorneyProfile | null {
  return ATTORNEY_REGISTRY[slug] ?? null;
}

export function resolveAttorneySlug(options?: {
  querySlug?: string;
  cookieSlug?: string;
}): string {
  const envSlug = process.env.NEXT_PUBLIC_ACTIVE_ATTORNEY;

  if (process.env.NODE_ENV === "development") {
    if (options?.querySlug && isValidAttorneySlug(options.querySlug)) {
      return options.querySlug;
    }
    if (options?.cookieSlug && isValidAttorneySlug(options.cookieSlug)) {
      return options.cookieSlug;
    }
  }

  if (envSlug && isValidAttorneySlug(envSlug)) {
    return envSlug;
  }

  if (isValidAttorneySlug(ACTIVE_ATTORNEY_SLUG)) {
    return ACTIVE_ATTORNEY_SLUG;
  }

  return ATTORNEY_SLUGS[0];
}

export async function getActiveAttorney(options?: {
  querySlug?: string;
}): Promise<AttorneyProfile> {
  const cookieStore = await cookies();
  const cookieSlug = cookieStore.get(ATTORNEY_COOKIE)?.value;
  const slug = resolveAttorneySlug({
    querySlug: options?.querySlug,
    cookieSlug,
  });
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    throw new Error(`Attorney profile not found for slug: ${slug}`);
  }

  return attorney;
}
