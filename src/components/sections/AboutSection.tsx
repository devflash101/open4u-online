import type { AttorneyProfile } from "@/types/attorney";

interface AboutSectionProps {
  attorney: AttorneyProfile;
}

export default function AboutSection({ attorney }: AboutSectionProps) {
  return (
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
            Dedicated to your legal needs
          </h2>
        </div>

        <div className="space-y-6 text-[var(--attorney-primary)]/80 leading-relaxed">
          <p className="text-lg">{attorney.bio}</p>
          {attorney.bioExtended?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
