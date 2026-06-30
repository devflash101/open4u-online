import type { Metadata } from "next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import GeneralFirmPage from "@/components/home/GeneralFirmPage";
import { FIRM } from "@/config/firm";

export const metadata: Metadata = {
  title: `${FIRM.name} — Legal Services`,
  description: FIRM.tagline,
};

export default function Home() {
  return (
    <ThemeProvider theme={FIRM.theme}>
      <GeneralFirmPage />
    </ThemeProvider>
  );
}
