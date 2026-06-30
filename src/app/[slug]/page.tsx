import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import AttorneyPortfolio from "@/components/AttorneyPortfolio";
import { getAttorneyPage } from "@/attorneys/pages";
import { getAttorneyFromParams, getAllAttorneySlugs } from "@/lib/attorney";

interface AttorneyRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllAttorneySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AttorneyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);

  return {
    title: `${attorney.name} — ${attorney.firm}`,
    description: attorney.tagline,
  };
}

export default async function AttorneyRoute({ params }: AttorneyRouteProps) {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);
  const AttorneyPage = getAttorneyPage(slug);

  return (
    <ThemeProvider theme={attorney.theme}>
      {AttorneyPage ? (
        <AttorneyPage attorney={attorney} />
      ) : (
        <AttorneyPortfolio attorney={attorney} />
      )}

      <Suspense fallback={null}>
        <AttorneySwitch activeSlug={attorney.slug} />
      </Suspense>
    </ThemeProvider>
  );
}
