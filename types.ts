/**
 * Schema types for Adam's Portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: "Web App" | "Mobile Design" | "UI/UX Case" | "Branding";
  tags: string[];
  link?: string;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  accentGradient: string;
  role: string;
  duration: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Awards" | "Certificates";
  description: string;
  credentialId?: string;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  email?: string;
  text: string;
  timestamp: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}
