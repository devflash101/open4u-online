import type { AttorneyProfile } from "@/types/attorney";
import { jayGellhausProfile } from "@/attorneys/jay-gellhaus/profile";
import { jayWangProfile } from "@/attorneys/jay-wang/profile";

export const ATTORNEY_REGISTRY: Record<string, AttorneyProfile> = {
  [jayGellhausProfile.slug]: jayGellhausProfile,
  [jayWangProfile.slug]: jayWangProfile,
};

export const ATTORNEY_LIST = Object.values(ATTORNEY_REGISTRY);

export const ATTORNEY_SLUGS = Object.keys(ATTORNEY_REGISTRY);
