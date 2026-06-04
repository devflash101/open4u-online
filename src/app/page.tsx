import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import AttorneyPortfolio from "@/components/AttorneyPortfolio";
import { getAttorneyPage } from "@/attorneys/pages";
import { getActiveAttorney } from "@/lib/attorney";

interface HomeProps {
  searchParams: Promise<{ attorney?: string }>;
}

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });

  return {
    title: `${attorney.name} — ${attorney.firm}`,
    description: attorney.tagline,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });
  const AttorneyPage = getAttorneyPage(attorney.slug);

  return (
    <ThemeProvider attorney={attorney}>
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
