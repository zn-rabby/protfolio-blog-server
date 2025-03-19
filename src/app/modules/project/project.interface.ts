export interface IProject {
  name: string;
  category: string;
  title: string;
  description: string;
  image: string[];
  thumbnail: string;
  technologies: string[];
  keyFeatures: string[];
  status: 'ongoing' | 'completed' | 'maintenance';

  // Links
  liveDemoLink: string;
  repoLinkClient?: string;
  repoLinkServer?: string;

  // Additional Info (Optional)
  projectGoals?: string;
  challengesFaced?: string;
  solution?: string;
  futureImprovements?: string;
  securityConsiderations?: string;
  projectTimeline?: string;

  // Team & Deployment
  contributors?: string[];
  deploymentStack?: string;
  testCredentials?: { username: string; password: string };
  tags?: string[];

  // Meta Data
  isFeatured?: boolean;
  isPublished?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
