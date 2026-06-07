import type { AttorneyProfile } from "@/types/attorney";
import { DEFAULT_CONTACT } from "@/config/default-contact";

export const jayGervasiProfile: AttorneyProfile = {
  slug: "jay-gervasi",
  name: "Jay A. Gervasi Jr.",
  title: "Principal Attorney",
  firm: "Jay Gervasi, P.A.",
  tagline:
    "Board-certified workers' compensation and personal injury representation for injured workers across North Carolina.",
  bio: "Attorney Jay A. Gervasi Jr. is the principal of Jay Gervasi, P.A., a Greensboro law firm specializing in workers' compensation and personal injury cases. With more than 35 years of legal experience, he represents injured workers before the North Carolina Industrial Commission and in personal injury matters throughout the state.",
  bioExtended: [
    "Jay graduated cum laude from Duke University and earned his J.D. from Vanderbilt University Law School, graduating in the top 15 percent of his class. After early experience representing defendants and insurance companies, he has devoted his career since 1990 to advocating for injured workers and plaintiffs in workers' compensation and personal injury claims.",
    "In 2000, Jay opened Jay Gervasi, P.A., where he continues to provide respectful, open, and dedicated service to clients navigating workplace injuries, premises liability, and related claims. His background on both sides of workers' compensation disputes gives clients practical insight into how insurers and employers approach these cases.",
  ],
  ...DEFAULT_CONTACT,
  address: {
    street: "910 N Elm St",
    city: "Greensboro",
    state: "NC",
    zip: "27401",
  },
  practiceAreas: [
    "Workers' Compensation",
    "Workplace Injury Claims",
    "Personal Injury",
    "Premises Liability",
    "Industrial Commission Hearings",
    "Workers' Comp Appeals",
    "Third-Party Liability Claims",
    "General Liability Claims",
  ],
  education: [
    {
      school: "Vanderbilt University Law School",
      degree: "J.D.",
      year: "1986",
    },
    {
      school: "Duke University",
      degree: "B.S., Zoology (cum laude)",
      year: "1980",
    },
  ],
  barAdmissions: [
    "North Carolina State Bar, ID 13504 (admitted 1986)",
  ],
  honors: [
    "Board Certified Specialist in Workers' Compensation Law — NC State Bar Board of Legal Specialization (since 2000)",
    "Listed in The Best Lawyers in America",
  ],
  memberships: [
    "North Carolina Academy of Trial Lawyers",
    "Chair, Workers' Compensation Section, NC Academy of Trial Lawyers",
    "Permanent member, Executive Committee, Workers' Compensation Section",
  ],
  priorExperience: [
    "Plaintiffs' personal injury firm, Greensboro — headed workers' compensation practice (1990–2000)",
    "Defense-oriented firms representing insurers and employers in workers' compensation matters",
    "Medical research technician, Duke Medical Center",
  ],
  theme: {
    primary: "#1a3c34",
    accent: "#b8860b",
    background: "#f6f4ef",
    heroImage:
      "https://images.unsplash.com/photo-1479144562537-4f30e6a36963?w=1800&q=85",
  },
};
