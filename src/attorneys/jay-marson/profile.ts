import type { AttorneyProfile } from "@/types/attorney";
import { DEFAULT_CONTACT } from "@/config/default-contact";

export const jayMarsonProfile: AttorneyProfile = {
  slug: "jay-marson",
  name: "Jay David Marson",
  title: "Attorney, Psychotherapist & Mediator",
  firm: "Dr. Jay Marson",
  tagline:
    "Licensed attorney, psychotherapist, and mediator helping clients navigate emotional challenges, family matters, and complex disputes with expertise and compassion.",
  bio: "Jay D. Marson, Esq., M.S.W., is a licensed attorney and psychotherapist operating his own practice under the name Dr. Jay Marson. He received a J.D. from NYU School of Law and a master's degree in social work from the Wurzweiler School of Social Work in New York City, bringing a rare combination of legal training and clinical expertise to his work with clients.",
  bioExtended: [
    "As an experienced cognitive-behavioral psychotherapist, Jay assists clients with anxiety, depression, panic disorders, obsessive-compulsive disorder (OCD), phobias, traumas, and behavioral challenges. He also specializes in self-perception and self-esteem difficulties, helping individuals significantly improve the quality of their lives.",
    "With decades of experience working with individuals, couples, families, and adolescents, Jay is a qualified mediator who helps couples reach amicable, peaceful resolutions to separation and divorce — as well as commercial disputes. His work reflects professionalism, compassion, and empathy, even in the most intricate and emotionally charged circumstances.",
  ],
  ...DEFAULT_CONTACT,
  address: {
    street: "20 Avon Rd",
    city: "Larchmont",
    state: "NY",
    zip: "10538",
  },
  practiceAreas: [
    "Cognitive-Behavioral Psychotherapy",
    "Anxiety & Depression",
    "OCD, Phobias & Trauma",
    "Panic Disorders",
    "Couples & Family Therapy",
    "Adolescent Counseling",
    "Divorce Mediation",
    "Family Law",
    "Commercial Dispute Mediation",
    "Self-Esteem & Personal Growth",
  ],
  education: [
    {
      school: "New York University School of Law",
      degree: "J.D.",
    },
    {
      school: "Wurzweiler School of Social Work, New York City",
      degree: "M.S.W.",
    },
  ],
  barAdmissions: [
    "New York State (admitted 1993, Registration #2562767)",
  ],
  honors: [
    "Jazz saxophonist — recorded and performed in the United States and abroad",
  ],
  memberships: [
    "Family Law Section, New York State Bar Association",
    "Qualified and experienced divorce and commercial mediator",
  ],
  community: [
    "Extensive experience mediating separation, divorce, and commercial disputes",
    "Works with individuals, couples, families, and adolescents across a wide range of psychological and legal challenges",
  ],
  theme: {
    primary: "#2d3a4f",
    accent: "#9b7b6a",
    background: "#f5f3f0",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=85",
  },
};
