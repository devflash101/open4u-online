import type { AttorneyProfile } from "@/types/attorney";

interface FooterProps {
  attorney: AttorneyProfile;
}

export default function Footer({ attorney }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--attorney-primary)]/10 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[var(--attorney-primary)]/60">
        <p>
          © {year} {attorney.name}. All rights reserved.
        </p>
        <p className="text-[0.7rem] tracking-wide">
          {attorney.firm} · {attorney.address.city}, {attorney.address.state}
        </p>
      </div>
    </footer>
  );
}
