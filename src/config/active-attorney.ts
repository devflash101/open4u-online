/**
 * Active attorney for this branch / deployment.
 *
 * Branch workflow:
 * - Each attorney branch sets this slug to their profile.
 * - Merge that branch into `release` to deploy their site.
 *
 * Local dev override: use the attorney switcher (?attorney=slug) or
 * NEXT_PUBLIC_ACTIVE_ATTORNEY in .env.local.
 */
export const ACTIVE_ATTORNEY_SLUG = "jay-marson";
// export const ACTIVE_ATTORNEY_SLUG = "jay-marson";
// export const ACTIVE_ATTORNEY_SLUG = "jay-gervasi";
// export const ACTIVE_ATTORNEY_SLUG = "jay-gellhaus";
// export const ACTIVE_ATTORNEY_SLUG = "jay-wang";
