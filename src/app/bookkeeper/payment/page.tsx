import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import BankTransferPage from "@/components/payment/BankTransferPage";
import { getActiveAttorney } from "@/lib/attorney";

interface PaymentPageProps {
  searchParams: Promise<{ attorney?: string }>;
}

export async function generateMetadata({ searchParams }: PaymentPageProps): Promise<Metadata> {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });

  return {
    title: `Bank Transfer — ${attorney.firm}`,
    description: "Pay by ACH or wire transfer using our bank account details.",
  };
}

export default async function PaymentPage({ searchParams }: PaymentPageProps) {
  const params = await searchParams;
  const attorney = await getActiveAttorney({ querySlug: params.attorney });

  return (
    <ThemeProvider attorney={attorney}>
      <BankTransferPage attorney={attorney} />
      <Suspense fallback={null}>
        <AttorneySwitch activeSlug={attorney.slug} />
      </Suspense>
    </ThemeProvider>
  );
}
