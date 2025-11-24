
export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  advisor?: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string; // e.g. "Full-time", "Internship", "Part-time"
  period: string;
  location: string;
  description: string;
}

export interface Publication {
  id: string;
  citation: string; // Full citation text
  doi?: string;
  year: number;
  title: string; // Extracted title for emphasis if needed
  jcr?: string;
  cas?: string;
}

export interface Project {
  title: string;
  role: string;
  funding: string;
  duration: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string; // Markdown-like string
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  avatar?: string;
  socials: {
    github?: string;
    orcid?: string;
    researchgate?: string;
    googleScholar?: string;
    linkedin?: string;
  };
  bio: string;
  interests: string[];
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  projects: Project[];
  workshops: string[];
  awards: string[];
  skills: SkillCategory[];
  blogs: BlogPost[];
  scholar?: GoogleScholar;
}

export interface GoogleScholar {
  citations: number;
  hIndex: number;
  i10Index: number;
}