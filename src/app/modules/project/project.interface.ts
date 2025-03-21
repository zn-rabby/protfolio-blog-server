export interface IProject {
  name: string;
  category: string;
  title: string;
  description: string;
  image: string[];
  technologies: string[];
  keyFeatures: string[];
  status: 'ongoing' | 'completed' | 'maintenance';

  // Links
  liveDemoLink: string;
  repoLinkClient: string;
  repoLinkServer: string;

  // Additional Info (Optional)
  projectGoals?: string;
  
}
