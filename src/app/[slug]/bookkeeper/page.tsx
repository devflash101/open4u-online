import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import BookkeeperPortfolio from "@/components/bookkeeper/BookkeeperPortfolio";
import { BOOKKEEPER } from "@/config/bookkeeper";
import { getAttorneyFromParams } from "@/lib/attorney";

interface BookkeeperRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BookkeeperRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);

  return {
    title: `${BOOKKEEPER.name} — Bookkeeper · ${attorney.firm}`,
    description: BOOKKEEPER.tagline,
  };
}

export default async function BookkeeperRoute({ params }: BookkeeperRouteProps) {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);

  return (
    <ThemeProvider theme={attorney.theme}>
      <BookkeeperPortfolio attorney={attorney} />
      <Suspense fallback={null}>
        <AttorneySwitch activeSlug={attorney.slug} />
      </Suspense>
    </ThemeProvider>
  );
}
