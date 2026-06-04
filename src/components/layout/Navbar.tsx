import Link from "next/link";
import type { AttorneyProfile } from "@/types/attorney";

interface NavbarProps {
  attorney: AttorneyProfile;
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#credentials", label: "Credentials" },
  { href: "/bookkeeper", label: "Bookkeeper" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ attorney }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--attorney-bg)]/90 backdrop-blur-md border-b border-[var(--attorney-primary)]/10">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="min-w-0">
          <span
            className="block font-serif text-lg md:text-xl font-light tracking-wide truncate"
            style={{ color: "var(--attorney-primary)" }}
          >
            {attorney.name}
          </span>
          <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-[var(--attorney-primary)]/60 truncate">
            {attorney.firm}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--attorney-primary)]/70 hover:text-[var(--attorney-accent)] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
