import type { AttorneyProfile } from "@/types/attorney";

interface CredentialsSectionProps {
  attorney: AttorneyProfile;
}

function CredentialBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3
        className="font-serif text-2xl font-light mb-4"
        style={{ color: "var(--attorney-primary)" }}
      >
        {title}
      </h3>
      <ul className="space-y-3 text-[var(--attorney-primary)]/75 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span style={{ color: "var(--attorney-accent)" }}>—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CredentialsSection({ attorney }: CredentialsSectionProps) {
  const educationItems = attorney.education.map((edu) => {
    const year = edu.year ? ` (${edu.year})` : "";
    return `${edu.degree}, ${edu.school}${year}`;
  });

  return (
    <section id="credentials" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--attorney-accent)" }}
        >
          Credentials
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl font-light mb-14"
          style={{ color: "var(--attorney-primary)" }}
        >
          Education & qualifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <CredentialBlock title="Education" items={educationItems} />
          <CredentialBlock title="Bar Admissions" items={attorney.barAdmissions} />
          {attorney.honors && (
            <CredentialBlock title="Honors & Recognition" items={attorney.honors} />
          )}
          {attorney.memberships && (
            <CredentialBlock title="Memberships & Leadership" items={attorney.memberships} />
          )}
          {attorney.priorExperience && (
            <CredentialBlock title="Prior Experience" items={attorney.priorExperience} />
          )}
          {attorney.community && (
            <CredentialBlock title="Community" items={attorney.community} />
          )}
        </div>
      </div>
    </section>
  );
}
