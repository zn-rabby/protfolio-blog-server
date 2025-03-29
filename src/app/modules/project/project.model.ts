import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

const ProjectSchema = new Schema<IProject>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: true },
    technologies: { type: [String], required: true },
    features: { type: [String] },
    projectGoals: { type: String },
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'maintenance'],
      default: 'ongoing',
    },
    liveDemoLink: { type: String, required: true },
    repoLinkClient: { type: String },
    repoLinkServer: { type: String },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// Export Model
const ProjectModel = model<IProject>('Project', ProjectSchema);
export default ProjectModel;
