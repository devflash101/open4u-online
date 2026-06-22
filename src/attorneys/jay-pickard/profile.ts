import type { AttorneyProfile } from "@/types/attorney";
import { DEFAULT_CONTACT } from "@/config/default-contact";

export const jayPickardProfile: AttorneyProfile = {
  slug: "jay-pickard",
  name: "Jay B. Pickard",
  title: "Attorney",
  firm: "Pickard Law, P.C.",
  tagline:
    "Dedicated family law representation in Littleton and the greater Denver area — guiding clients through custody, paternity, and divorce with care.",
  bio: "Jay Pickard is an attorney at Pickard Law, P.C. in Littleton, Colorado. His practice extensively covers family law, paternity, and child custody matters, alongside experience in both litigation and transactional law including contracts, business disputes, real estate, wills, trusts, and estate planning.",
  bioExtended: [
    "A Colorado native, Jay attended Pepperdine University in California, earning a degree in International Business cum laude in 2005. He went on to earn his J.D. from the University of Denver, Sturm College of Law in 2008, where he graduated with Order of St. Ives recognition, served as General Editor of the DU Law Review, and was voted Most Professional by the student body.",
    "Jay began his career as in-house counsel with HealthTrans (later acquired by Catamaran), where he negotiated contracts, handled due diligence, and resolved disputes. He joined Pickard Law, P.C. in 2014. Because of the crossover between civil and family law matters, Jay has also practiced extensively in the area of partition and has lectured on the topic, including at the 2020 Real Estate Symposium.",
  ],
  ...DEFAULT_CONTACT,
  address: {
    street: "12712 W. Ken Caryl Ave.",
    city: "Littleton",
    state: "CO",
    zip: "80127",
  },
  practiceAreas: [
    "Family Law",
    "Child Custody",
    "Paternity",
    "Child Support",
    "Divorce & Separation",
    "Prenups & Marital Agreements",
    "Adoption",
    "Wills, Trusts & Estate Planning",
    "Real Estate & Partition",
    "Business & Contract Disputes",
  ],
  education: [
    {
      school: "University of Denver, Sturm College of Law",
      degree: "J.D.",
      year: "2008",
    },
    {
      school: "Pepperdine University",
      degree: "B.A., International Business (cum laude)",
      year: "2005",
    },
  ],
  barAdmissions: [
    "Colorado (admitted 2008)",
  ],
  honors: [
    "Order of St. Ives academic recognition, University of Denver",
    "General Editor, DU Law Review",
    "Voted Most Professional (2008) and Outstanding Academic (2007) by the student body",
    "Make a Difference Award recipient, Catamaran (2013)",
  ],
  memberships: [
    "Colorado Bar Association",
    "CLE presenter on partition and real estate topics (2020 Real Estate Symposium)",
  ],
  priorExperience: [
    "In-house legal counsel, HealthTrans",
    "Legal counsel, Catamaran (following HealthTrans acquisition)",
  ],
  theme: {
    primary: "#1f3a5f",
    accent: "#a8763e",
    background: "#f5f4f1",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85",
  },
};
