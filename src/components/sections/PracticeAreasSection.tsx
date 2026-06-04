import type { AttorneyProfile } from "@/types/attorney";

interface PracticeAreasSectionProps {
  attorney: AttorneyProfile;
}

export default function PracticeAreasSection({ attorney }: PracticeAreasSectionProps) {
  return (
    <section
      id="practice"
      className="py-24 px-6 md:px-10"
      style={{ backgroundColor: `${attorney.theme.primary}08` }}
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
          Areas of expertise
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attorney.practiceAreas.map((area) => (
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
  );
}
