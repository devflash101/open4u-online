import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import BookkeeperPortfolio from "@/components/bookkeeper/BookkeeperPortfolio";
import { BOOKKEEPER } from "@/config/bookkeeper";
import { getActiveAttorney } from "@/lib/attorney";

interface BookkeeperPageProps {
  searchParams: Promise<{ attorney?: string }>;
}

export async function generateMetadata({ searchParams }: BookkeeperPageProps): Promise<Metadata> {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });

  return {
    title: `${BOOKKEEPER.name} — Bookkeeper · ${attorney.firm}`,
    description: BOOKKEEPER.tagline,
  };
}

export default async function BookkeeperPage({ searchParams }: BookkeeperPageProps) {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });

  return (
    <ThemeProvider attorney={attorney}>
      <BookkeeperPortfolio attorney={attorney} />
      <Suspense fallback={null}>
        <AttorneySwitch activeSlug={attorney.slug} />
      </Suspense>
    </ThemeProvider>
  );
}
