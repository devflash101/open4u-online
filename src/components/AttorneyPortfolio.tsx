import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactSection from "@/components/sections/ContactSection";
import type { AttorneyProfile } from "@/types/attorney";

interface AttorneyPortfolioProps {
  attorney: AttorneyProfile;
}

/**
 * Default portfolio layout shared by all attorneys.
 * Override sections per attorney in attorneys/{slug}/page.tsx if needed.
 */
export default function AttorneyPortfolio({ attorney }: AttorneyPortfolioProps) {
  return (
    <>
      <Navbar attorney={attorney} />
      <main>
        <HeroSection attorney={attorney} />
        <AboutSection attorney={attorney} />
        <PracticeAreasSection attorney={attorney} />
        <CredentialsSection attorney={attorney} />
        <ContactSection attorney={attorney} />
      </main>
      <Footer attorney={attorney} />
    </>
  );
}
