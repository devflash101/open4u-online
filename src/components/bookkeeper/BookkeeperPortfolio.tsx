import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BOOKKEEPER } from "@/config/bookkeeper";
import { attorneyPaths } from "@/lib/paths";
import type { AttorneyProfile } from "@/types/attorney";

interface BookkeeperPortfolioProps {
  attorney: AttorneyProfile;
}

function formatOfficeAddress(attorney: AttorneyProfile): string {
  const { street, city, state, zip } = attorney.address;
  return `${street}, ${city}, ${state} ${zip}`;
}

export default function BookkeeperPortfolio({ attorney }: BookkeeperPortfolioProps) {
  const b = BOOKKEEPER;
  const paths = attorneyPaths(attorney.slug);
  const officeLocation = formatOfficeAddress(attorney);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--attorney-bg)]/90 backdrop-blur-md border-b border-[var(--attorney-primary)]/10">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="min-w-0">
            <span
              className="block font-serif text-lg md:text-xl font-light tracking-wide truncate"
              style={{ color: "var(--attorney-primary)" }}
            >
              {b.name}
            </span>
            <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-[var(--attorney-primary)]/60 truncate">
              {b.title} · {attorney.firm}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
              { href: paths.profile, label: "Attorney" },
            ].map((link) => (
              <li key={link.href + link.label}>
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

      <main className="pt-16">
        <section
          className="py-20 px-6 md:px-10"
          style={{ backgroundColor: `${attorney.theme.primary}08` }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--attorney-accent)" }}
            >
              Office support for {attorney.name}
            </p>
            <h1
              className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight mb-6"
              style={{ color: "var(--attorney-primary)" }}
            >
              {b.name}
            </h1>
            <p
              className="text-xl italic mb-4"
              style={{ color: "var(--attorney-accent)" }}
            >
              {b.title}
            </p>
            <p className="text-lg max-w-2xl leading-relaxed text-[var(--attorney-primary)]/80">
              {b.tagline}
            </p>
          </div>
        </section>

        <section id="about" className="py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div>
              <p
                className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
                style={{ color: "var(--attorney-accent)" }}
              >
                About
              </p>
              <h2
                className="font-serif text-4xl md:text-5xl font-light leading-tight"
                style={{ color: "var(--attorney-primary)" }}
              >
                Your practice, organized
              </h2>
            </div>
            <div className="space-y-6 text-[var(--attorney-primary)]/80 leading-relaxed">
              <p className="text-lg">{b.bio}</p>
              {b.bioExtended?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p className="text-sm text-[var(--attorney-primary)]/60">{officeLocation}</p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-24 px-6 md:px-10"
          style={{ backgroundColor: `${attorney.theme.primary}08` }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--attorney-accent)" }}
            >
              Services
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-light mb-12"
              style={{ color: "var(--attorney-primary)" }}
            >
              What Ronel can help with
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 mb-16">
              {b.services.map((service) => (
                <li
                  key={service}
                  className="px-5 py-4 border border-[var(--attorney-primary)]/15 bg-[var(--attorney-bg)] text-[var(--attorney-primary)]/85 text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3
                  className="font-serif text-2xl font-light mb-4"
                  style={{ color: "var(--attorney-primary)" }}
                >
                  Qualifications
                </h3>
                <ul className="space-y-3 text-sm text-[var(--attorney-primary)]/75">
                  {b.qualifications.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span style={{ color: "var(--attorney-accent)" }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className="font-serif text-2xl font-light mb-4"
                  style={{ color: "var(--attorney-primary)" }}
                >
                  Software & tools
                </h3>
                <ul className="space-y-3 text-sm text-[var(--attorney-primary)]/75">
                  {b.software.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span style={{ color: "var(--attorney-accent)" }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[var(--attorney-primary)]/60">
                  <strong className="font-normal text-[var(--attorney-primary)]/80">
                    Availability:
                  </strong>{" "}
                  {b.availability}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 px-6 md:px-10"
          style={{ backgroundColor: "var(--attorney-primary)", color: "var(--attorney-bg)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p
                className="text-[0.7rem] tracking-[0.25em] uppercase mb-3 opacity-70"
                style={{ color: "var(--attorney-accent)" }}
              >
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
                Get in touch with Ronel
              </h2>
              <p className="opacity-75 leading-relaxed max-w-md mb-8">
                For bookkeeping inquiries related to {attorney.name}&apos;s practice, reach out
                directly. All communications are handled confidentially.
              </p>
              <Link
                href={paths.payment}
                className="inline-flex items-center gap-3 px-6 py-3.5 border transition-colors hover:bg-[var(--attorney-bg)] hover:text-[var(--attorney-primary)]"
                style={{
                  borderColor: "var(--attorney-accent)",
                  color: "var(--attorney-accent)",
                }}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--attorney-accent)", color: "var(--attorney-bg)" }}
                  aria-hidden
                >
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-left">
                  <span className="block text-[0.65rem] tracking-[0.2em] uppercase opacity-80">
                    Pay by bank transfer
                  </span>
                  <span className="block text-sm font-normal">View payment details →</span>
                </span>
              </Link>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "var(--attorney-accent)" }}
                />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Phone</p>
                  <a href={`tel:${b.phone.replace(/\D/g, "")}`} className="hover:opacity-80">
                    {b.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "var(--attorney-accent)" }}
                />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Email</p>
                  <a href={`mailto:${b.email}`} className="hover:opacity-80">
                    {b.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "var(--attorney-accent)" }}
                />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">
                    Location
                  </p>
                  <p>{officeLocation}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--attorney-primary)]/10 py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[var(--attorney-primary)]/60">
          <p>© {new Date().getFullYear()} {b.name}. All rights reserved.</p>
          <Link href={paths.profile} className="text-[0.7rem] tracking-wide hover:text-[var(--attorney-accent)]">
            Back to {attorney.name}
          </Link>
        </div>
      </footer>
    </>
  );
}
