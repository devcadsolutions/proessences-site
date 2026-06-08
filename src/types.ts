export type AppTab = 'home' | 'about' | 'applications' | 'blog' | 'contact';

export interface ScentBriefInput {
  productFormat: string;
  olfactoryDirections: string[];
  targetAudience: string;
  brandPersonality: string;
  inspiration: string;
}

export interface ScentBriefOutput {
  themeName: string;
  olfactiveFamily: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  idealApplications: string[];
  marketingCopy: string;
  regulatoryAdvice: string;
  recommendedConcentration: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export interface RegionalPartner {
  country: string;
  name: string;
  role?: string;
  phone?: string;
  email: string;
  address?: string;
  website?: string;
  company?: string;
}

export interface FragranceApplication {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  commonNotes: string[];
  technicalRequirements: string[];
  safetyInsights: string;
  imageUrl?: string;
}
