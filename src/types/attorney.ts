export interface AttorneyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface AttorneyEducation {
  school: string;
  degree: string;
  year?: string;
}

export interface AttorneyTheme {
  primary: string;
  accent: string;
  background: string;
  heroImage: string;
}

export interface AttorneyProfile {
  slug: string;
  name: string;
  title: string;
  firm: string;
  tagline: string;
  bio: string;
  bioExtended?: string[];
  email: string;
  phone: string;
  fax?: string;
  address: AttorneyAddress;
  practiceAreas: string[];
  education: AttorneyEducation[];
  barAdmissions: string[];
  honors?: string[];
  memberships?: string[];
  community?: string[];
  priorExperience?: string[];
  theme: AttorneyTheme;
}

export type AttorneySlug = string;
