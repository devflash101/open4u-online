import type { AttorneyTheme } from "@/types/attorney";

export interface FirmPracticeArea {
  name: string;
  description: string;
  featured?: boolean;
}

export interface FirmReview {
  quote: string;
  author: string;
  context: string;
  image: string;
  rating?: number;
}

export interface FirmConfig {
  name: string;
  tagline: string;
  about: string;
  aboutExtended: string[];
  practiceAreas: FirmPracticeArea[];
  reviews: FirmReview[];
  theme: AttorneyTheme;
}

export const FIRM: FirmConfig = {
  name: "Open for You",
  tagline:
    "Compassionate legal guidance for families and immigrants — clear answers when life changes course.",
  about:
    "We are a client-focused law practice dedicated to helping individuals and families navigate life's most important legal matters. Led by attorney Jay, our team combines rigorous legal knowledge with a personal approach — listening carefully, explaining options clearly, and advocating tirelessly on your behalf.",
  aboutExtended: [
    "Family and immigration matters often arrive at the same time — a custody dispute, a green card application, a spouse visa delayed by paperwork. We understand how overwhelming that feels, and we guide clients through each step with patience and direct communication.",
    "Whether you are protecting your children, reuniting with family abroad, or planning for the future, we believe every client deserves attentive representation and honest guidance. Jay and our support staff work together to keep your case moving forward with professionalism and care.",
  ],
  practiceAreas: [
    {
      name: "Family Law",
      description:
        "Divorce, custody, parenting plans, child support, spousal maintenance, and protective orders — with a focus on protecting children and reaching fair outcomes.",
      featured: true,
    },
    {
      name: "Immigration Law",
      description:
        "Family-based petitions, adjustment of status, naturalization, consular processing, and responses to USCIS requests — helping families stay together across borders.",
      featured: true,
    },
    {
      name: "Child Custody & Visitation",
      description: "Parenting time schedules, relocation cases, and modifications when circumstances change.",
      featured: true,
    },
    {
      name: "Divorce & Separation",
      description: "Uncontested and contested divorce, property division, and amicable settlement options.",
    },
    {
      name: "Green Cards & Citizenship",
      description: "Permanent residency applications, citizenship interviews, and document preparation.",
    },
    {
      name: "Mediation & Conflict Resolution",
      description: "Collaborative approaches to family disputes before litigation becomes necessary.",
    },
    {
      name: "Estate Planning",
      description: "Wills, trusts, and planning that protects your family long term.",
    },
  ],
  reviews: [
    {
      quote:
        "Jay returned every call the same day and helped us get a parenting plan approved without going to trial. Simple, clear, and exactly what we needed.",
      author: "Sarah M.",
      context: "Child custody",
      image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "When my marriage ended, my ex and I could not agree on anything regarding our two children — school pickup, holidays, or medical decisions. Jay met with each of us separately, explained custody standards in plain language, and helped us draft a parenting plan covering weekdays, summer breaks, and emergencies. When the other side tried to change terms at the last minute, he filed the right motions and kept the focus on the kids. Four months from first call to court approval — my children finally have a predictable schedule.",
      author: "Maria Elena S.",
      context: "Child custody & parenting plan",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "We got an RFE on my husband's green card and had no idea how to respond. Jay fixed it and we were approved three months later. Calm, thorough, and always available.",
      author: "Priya & Rajesh K.",
      context: "Family-based immigration · RFE response",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "I needed to relocate for work but my custody order restricted moving out of the county. Jay filed a modification, prepared me for mediation, and explained what the judge would consider — the reason for the move, impact on the other parent's time, and whether a new schedule could work. We reached an agreement with expanded summer visitation. Emotionally hard, but I always knew the next step.",
      author: "Daniel W.",
      context: "Custody modification · relocation",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote: "Both I-130 petitions for my parents were approved. Jay checked every form twice.",
      author: "Elena V.",
      context: "Family petition (I-130)",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Our divorce involved a co-owned business and strong feelings on both sides. Jay worked with our accountant to value the company, pushed for a settlement that protected my ownership stake, and kept our daughter's school routine stable in the parenting plan. We avoided trial and can still co-parent without constant conflict.",
      author: "Jennifer & David R.",
      context: "Divorce · business assets & custody",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Jay helped my brother with naturalization after years of putting it off. Found a documentation problem before we filed, ran mock interviews, and he was sworn in last spring.",
      author: "Michael T.",
      context: "Naturalization (N-400)",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "As a single mother petitioning for my parents abroad, I was terrified of a mistake on the I-130 — one wrong box can delay a case for years. Jay organized our evidence, explained immediate relative vs. preference categories, and verified every birth certificate and translation. Both petitions were approved without additional evidence requests, and he walked us through what to expect at consular interviews.",
      author: "Carmen L.",
      context: "Family petition · consular processing",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote: "Green card approved after our marriage interview. Jay made sure we had every document organized.",
      author: "Anita & James P.",
      context: "Green card · marriage-based (I-485)",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "My fiancé was overseas and we were lost with the K-1 process — forms, medical exam timing, embassy interview prep. Jay mapped out the full timeline, helped us file the I-129F correctly the first time, and coached us on what consular officers typically ask. The visa was issued in under eight months and we married within the 90-day window without any surprises.",
      author: "Sofia R.",
      context: "K-1 fiancé visa · consular interview",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "After six years on an H-1B, my employer agreed to sponsor my green card but nobody could explain the PERM and I-140 steps clearly. Jay broke down the labor certification timeline, coordinated with our HR department, and kept my H-1B extensions on track while the priority date waited. When my date became current, he filed the I-485 package and my EAD arrived before my old work authorization expired.",
      author: "Wei L.",
      context: "Employment-based green card · PERM & I-140",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote: "EAD renewal approved in three weeks. No gaps in my work authorization.",
      author: "Fatima A.",
      context: "Work permit renewal (I-765)",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=200&h=200&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "We received a two-year conditional green card through marriage and had to file the I-751 to remove conditions. Jay helped us gather joint lease agreements, tax returns, and affidavits from friends who knew us as a couple. USCIS scheduled an interview — he prepared us on what to bring and how to answer questions about our life together. Our ten-year card arrived without a second request for evidence.",
      author: "Lucia & Marco D.",
      context: "Removal of conditions (I-751)",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face",
      rating: 5,
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
