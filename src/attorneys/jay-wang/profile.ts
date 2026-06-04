import type { AttorneyProfile } from "@/types/attorney";

export const jayWangProfile: AttorneyProfile = {
  slug: "jay-wang",
  name: "Jay Wang",
  title: "Partner",
  firm: "Hixson Nagatani LLP",
  tagline: "Over 20 years counseling and defending employers across the United States.",
  bio: "Jay Wang is a Partner at Hixson Nagatani LLP, a boutique employment law firm based in San Jose, California. He has over 20 years of experience counseling and litigating on behalf of companies throughout the United States, with a practice focused on employment litigation and human resources compliance.",
  bioExtended: [
    "Mr. Wang's litigation practice includes civil claims involving wrongful termination, harassment, unpaid wages, discrimination, trade secrets, and workplace violence. He counsels clients on HR policies, executive and severance agreements, wage and hour issues, workplace investigations, and disciplinary matters.",
    "He has appeared on behalf of employers in federal and state courts and before administrative forums including the EEOC, DFEH, DLSE, EDD, and the Office of Administrative Law Judges for the U.S. Department of Labor. He is a frequent speaker on employment law topics for bar associations, the National Employment Law Institute, and employer advisory councils.",
  ],
  email: "jay@hnemploymentlaw.com",
  phone: "408-486-9933",
  address: {
    street: "2021 The Alameda, Suite 240",
    city: "San Jose",
    state: "CA",
    zip: "95126",
  },
  practiceAreas: [
    "Employment Litigation",
    "Wrongful Termination Defense",
    "Harassment & Discrimination Claims",
    "Wage & Hour Compliance",
    "Trade Secret Protection",
    "Workplace Investigations",
    "HR Policy Counseling",
    "Executive & Severance Agreements",
    "Class & Representative Actions",
  ],
  education: [
    {
      school: "Georgetown University Law Center",
      degree: "J.D.",
      year: "1999",
    },
    {
      school: "University of California, Los Angeles",
      degree: "B.A., Political Science",
    },
  ],
  barAdmissions: ["California"],
  honors: [
    "AV Preeminent rating from Martindale-Hubbell (highest peer rating, 4.9/5.0)",
    "Articles Editor, Georgetown Journal of Legal Ethics",
  ],
  memberships: [
    "State Bar of California",
    "American Bar Association",
    "Santa Clara County Bar Association",
    "Board of Trustees, Santa Clara County Bar Association (2007–2011)",
    "Chairman, Labor & Employment Section, Santa Clara County Bar (2010)",
  ],
  community: [
    "Volunteer Counsel for Monarch Services (Watsonville) since 2010 — pro bono representation for a nonprofit offering emergency shelter and social services to victims of domestic violence and sexual assault",
  ],
  priorExperience: [
    "Founder & Partner, Fox, Wang & Morgan P.C. (15 years)",
    "Manatt, Phelps & Phillips, LLP",
    "Fisher & Phillips LLP",
  ],
  theme: {
    primary: "#0c2340",
    accent: "#c45c26",
    background: "#f4f6f8",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85",
  },
};
