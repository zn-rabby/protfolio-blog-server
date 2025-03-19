import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

// Mongoose Schema
const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: true }, // array of image URLs
    thumbnail: { type: String, required: true },
    technologies: { type: [String], required: true },
    keyFeatures: { type: [String], required: true },
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'maintenance'],
      required: true,
    },
    liveDemoLink: { type: String, required: true },
    repoLinkClient: { type: String },
    repoLinkServer: { type: String },
    projectGoals: { type: String },
    challengesFaced: { type: String },
    solution: { type: String },
    futureImprovements: { type: String },
    securityConsiderations: { type: String },
    projectTimeline: { type: String },
    contributors: { type: [String] },
    deploymentStack: { type: String },
    testCredentials: {
      username: { type: String },
      password: { type: String },
    },
    tags: { type: [String] },
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Auto add createdAt & updatedAt
  },
);

// Export Model
const ProjectModel = model<IProject>('Project', ProjectSchema);
export default ProjectModel;
