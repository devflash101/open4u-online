import { Mail, MapPin, Phone } from "lucide-react";
import type { AttorneyProfile } from "@/types/attorney";

interface ContactSectionProps {
  attorney: AttorneyProfile;
}

export default function ContactSection({ attorney }: ContactSectionProps) {
  const { address } = attorney;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
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
            Reach out to schedule a consultation. {attorney.name} and the team at{" "}
            {attorney.firm} are ready to help.
          </p>
        </div>

        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <Phone className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--attorney-accent)" }} />
            <div>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Phone</p>
              <a href={`tel:${attorney.phone.replace(/\D/g, "")}`} className="hover:opacity-80">
                {attorney.phone}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <Mail className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--attorney-accent)" }} />
            <div>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Email</p>
              <a href={`mailto:${attorney.email}`} className="hover:opacity-80">
                {attorney.email}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--attorney-accent)" }} />
            <div>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 mb-1">Office</p>
              <p>{fullAddress}</p>
              {attorney.fax && (
                <p className="mt-2 text-sm opacity-70">Fax: {attorney.fax}</p>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
