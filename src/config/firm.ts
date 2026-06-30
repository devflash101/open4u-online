import type { AttorneyTheme } from "@/types/attorney";

export interface FirmReview {
  quote: string;
  author: string;
  context: string;
}

export interface FirmConfig {
  name: string;
  tagline: string;
  about: string;
  aboutExtended: string[];
  practiceAreas: string[];
  reviews: FirmReview[];
  theme: AttorneyTheme;
}

export const FIRM: FirmConfig = {
  name: "Jay Law Group",
  tagline: "Trusted legal counsel with compassion, clarity, and decades of combined experience.",
  about:
    "Jay Law Group is a client-focused law practice dedicated to helping individuals and families navigate life's most important legal matters. Led by attorney Jay, our team combines rigorous legal knowledge with a personal approach — listening carefully, explaining options clearly, and advocating tirelessly on your behalf.",
  aboutExtended: [
    "Whether you are facing a family transition, recovering from an injury, planning your estate, or resolving a business dispute, we believe every client deserves attentive representation and honest guidance. Jay and our support staff work together to keep your case moving forward with professionalism and care.",
    "We serve clients across multiple practice areas and take pride in building lasting relationships founded on trust, responsiveness, and results.",
  ],
  practiceAreas: [
    "Family Law & Custody",
    "Personal Injury",
    "Workers' Compensation",
    "Estate Planning",
    "Business & Contract Disputes",
    "Employment Law",
    "Mediation & Conflict Resolution",
  ],
  reviews: [
    {
      quote:
        "Jay took the time to understand our situation and walked us through every step. We felt supported from the first call to the final resolution.",
      author: "Sarah M.",
      context: "Family law client",
    },
    {
      quote:
        "Professional, responsive, and genuinely caring. Jay explained complex legal issues in plain language and fought hard for a fair outcome.",
      author: "Michael T.",
      context: "Personal injury client",
    },
    {
      quote:
        "We were going through a difficult time, and Jay's calm, knowledgeable approach made all the difference. Highly recommend this firm.",
      author: "Jennifer & David R.",
      context: "Custody matter",
    },
    {
      quote:
        "Excellent communication throughout the entire process. Jay and the team always returned calls promptly and kept us informed.",
      author: "Robert L.",
      context: "Estate planning client",
    },
    {
      quote:
        "I appreciated how straightforward and honest Jay was about our options. No surprises — just solid legal advice and strong representation.",
      author: "Amanda K.",
      context: "Workers' compensation",
    },
  ],
  theme: {
    primary: "#1a2744",
    accent: "#b8922a",
    background: "#f7f5f0",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85",
  },
};
