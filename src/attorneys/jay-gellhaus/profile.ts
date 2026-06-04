import type { AttorneyProfile } from "@/types/attorney";

export const jayGellhausProfile: AttorneyProfile = {
  slug: "jay-gellhaus",
  name: "Jay R. Gellhaus",
  title: "Attorney",
  firm: "Gellhaus & Gellhaus Attorneys at Law",
  tagline: "Trusted legal representation in Aberdeen and surrounding communities for over 30 years.",
  bio: "Jay R. Gellhaus is an attorney at Gellhaus & Gellhaus Attorneys at Law in Aberdeen, South Dakota. With decades of experience, he represents clients across civil litigation, personal injury, business and corporate law, estate planning, family law, and employment matters. The firm is known for providing complete, personalized attention and treating every client with compassion and understanding.",
  bioExtended: [
    "Gellhaus & Gellhaus has over 60 years of combined experience representing clients throughout Aberdeen and the surrounding area. Whether you have been injured in an auto accident, need assistance with a will or estate plan, or face a complex business or family legal matter, Jay brings thorough knowledge of South Dakota law and a commitment to the best possible outcome for your case.",
    "As a local Aberdeen law firm, Gellhaus & Gellhaus prides itself on top-tier service that the community can depend on — combining the personal touch of a neighborhood practice with the depth of experience needed for complex legal challenges.",
  ],
  email: "jay@open4u.online",
  phone: "+1 (863) 455-4771",
  address: {
    street: "120 S Lincoln St",
    city: "Aberdeen",
    state: "SD",
    zip: "57401",
  },
  practiceAreas: [
    "Civil Litigation",
    "Personal Injury",
    "Business Law",
    "Corporate Law",
    "Estate Planning",
    "Wills & Trust Planning",
    "Family Law",
    "Employment Law",
    "Insurance",
  ],
  education: [
    {
      school: "University of South Dakota School of Law, Vermillion, SD",
      degree: "J.D.",
      year: "1994",
    },
    {
      school: "Northern State University, Aberdeen, SD",
      degree: "B.S.",
      year: "1988",
    },
  ],
  barAdmissions: [
    "South Dakota, 1995",
    "U.S. District Court, District of South Dakota",
  ],
  theme: {
    primary: "#1a2744",
    accent: "#b8922a",
    background: "#f7f5f0",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85",
  },
};
