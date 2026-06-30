import { Suspense } from "react";
import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import AttorneySwitch from "@/components/dev/AttorneySwitch";
import BankTransferPage from "@/components/payment/BankTransferPage";
import { getAttorneyFromParams } from "@/lib/attorney";

interface PaymentRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PaymentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);

  return {
    title: `Bank Transfer — ${attorney.firm}`,
    description: "Pay by ACH or wire transfer using our bank account details.",
  };
}

export default async function PaymentRoute({ params }: PaymentRouteProps) {
  const { slug } = await params;
  const attorney = getAttorneyFromParams(slug);

  return (
    <ThemeProvider theme={attorney.theme}>
      <BankTransferPage attorney={attorney} />
      <Suspense fallback={null}>
        <AttorneySwitch activeSlug={attorney.slug} />
      </Suspense>
    </ThemeProvider>
  );
}
