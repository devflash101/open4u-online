import AttorneyPortfolio from "@/components/AttorneyPortfolio";
import type { AttorneyProfile } from "@/types/attorney";

/**
 * Jay Wang portfolio page.
 * Customize this file to add attorney-specific sections or layout changes.
 */
export default function JayWangPage({ attorney }: { attorney: AttorneyProfile }) {
  return <AttorneyPortfolio attorney={attorney} />;
}
