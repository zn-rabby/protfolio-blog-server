export interface IProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string[];
  technologies: string[];
  features?: string[];
  projectGoals?: string;
  status: 'ongoing' | 'completed' | 'maintenance';
  liveDemoLink: string;
  repoLinkClient?: string;
  repoLinkServer?: string;
  isPublished: boolean;
}
