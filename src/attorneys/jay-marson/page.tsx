import AttorneyPortfolio from "@/components/AttorneyPortfolio";
import type { AttorneyProfile } from "@/types/attorney";

export default function JayMarsonPage({ attorney }: { attorney: AttorneyProfile }) {
  return <AttorneyPortfolio attorney={attorney} />;
}
