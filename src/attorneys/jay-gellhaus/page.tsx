import AttorneyPortfolio from "@/components/AttorneyPortfolio";
import type { AttorneyProfile } from "@/types/attorney";

/**
 * Jay Gellhaus portfolio page.
 * Customize this file to add attorney-specific sections or layout changes.
 */
export default function JayGellhausPage({ attorney }: { attorney: AttorneyProfile }) {
  return <AttorneyPortfolio attorney={attorney} />;
}
