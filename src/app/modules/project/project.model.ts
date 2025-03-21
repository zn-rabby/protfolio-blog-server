import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

// Mongoose Schema
const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: true }, 
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
  },
  {
    timestamps: true, // Auto add createdAt & updatedAt
  },
);

// Export Model
const ProjectModel = model<IProject>('Project', ProjectSchema);
export default ProjectModel;
