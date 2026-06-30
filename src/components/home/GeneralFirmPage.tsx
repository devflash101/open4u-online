import Link from "next/link";
import { Mail, Phone, Quote } from "lucide-react";
import { FIRM } from "@/config/firm";
import { DEFAULT_CONTACT } from "@/config/default-contact";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function GeneralFirmPage() {
  const firm = FIRM;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--attorney-bg)]/90 backdrop-blur-md border-b border-[var(--attorney-primary)]/10">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="min-w-0">
            <span
              className="block font-serif text-lg md:text-xl font-light tracking-wide truncate"
              style={{ color: "var(--attorney-primary)" }}
            >
              {firm.name}
            </span>
            <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-[var(--attorney-primary)]/60 truncate">
              Legal Services
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

      <main>
        <section
          id="hero"
          className="relative min-h-screen flex items-center pt-16 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, ${firm.theme.background}ee 40%, ${firm.theme.background}88 70%, transparent), url('${firm.theme.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 w-full">
            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--attorney-accent)" }}
            >
              {firm.name}
            </p>
            <h1
              className="font-serif font-light leading-[1.05] mb-6 max-w-3xl"
              style={{ color: "var(--attorney-primary)" }}
            >
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)]">
                Counsel you can trust
              </span>
              <span
                className="block mt-3 text-[clamp(1.2rem,3vw,2rem)] italic font-light"
                style={{ color: "var(--attorney-accent)" }}
              >
                with Attorney Jay
              </span>
            </h1>
            <p
              className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
              style={{ color: `${firm.theme.primary}bb` }}
            >
              {firm.tagline}
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--attorney-primary)" }}
            >
              Schedule Consultation
            </Link>
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
                A firm built on trust
              </h2>
            </div>
            <div className="space-y-6 text-[var(--attorney-primary)]/80 leading-relaxed">
              <p className="text-lg">{firm.about}</p>
              {firm.aboutExtended.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="practice"
          className="py-24 px-6 md:px-10"
          style={{ backgroundColor: `${firm.theme.primary}08` }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--attorney-accent)" }}
            >
              Practice Areas
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-light mb-12"
              style={{ color: "var(--attorney-primary)" }}
            >
              How we can help
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {firm.practiceAreas.map((area) => (
                <li
                  key={area}
                  className="px-5 py-4 border border-[var(--attorney-primary)]/15 bg-[var(--attorney-bg)] text-[var(--attorney-primary)]/85 text-sm tracking-wide"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="reviews" className="py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--attorney-accent)" }}
            >
              Client Reviews
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-light mb-12"
              style={{ color: "var(--attorney-primary)" }}
            >
              What our clients say
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {firm.reviews.map((review) => (
                <li
                  key={review.author}
                  className="p-6 border border-[var(--attorney-primary)]/15 bg-[var(--attorney-bg)]"
                >
                  <Quote
                    className="w-8 h-8 mb-4 opacity-30"
                    style={{ color: "var(--attorney-accent)" }}
                  />
                  <p className="text-[var(--attorney-primary)]/85 leading-relaxed mb-4 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="text-sm font-medium text-[var(--attorney-primary)]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[var(--attorney-primary)]/50 mt-0.5">
                    {review.context}
                  </p>
                </li>
              ))}
            </ul>
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
                Let&apos;s discuss your case
              </h2>
              <p className="opacity-75 leading-relaxed max-w-md">
                Reach out to {firm.name} to schedule a consultation with Jay and our team.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "var(--attorney-accent)" }}
                />
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Phone</p>
                  <a
                    href={`tel:${DEFAULT_CONTACT.phone.replace(/\D/g, "")}`}
                    className="hover:opacity-80"
                  >
                    {DEFAULT_CONTACT.phone}
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
                  <a href={`mailto:${DEFAULT_CONTACT.email}`} className="hover:opacity-80">
                    {DEFAULT_CONTACT.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--attorney-primary)]/10 py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-sm text-[var(--attorney-primary)]/60">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
