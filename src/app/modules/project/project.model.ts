import { model, Schema } from 'mongoose';
import { IProject } from './project.interface';

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: [true, 'Please provide project name'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please provide project category'],
    },
    title: {
      type: String,
      required: [true, 'Please provide project title'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide project content'],
    },
    image: {
      type: String,
      required: [true, 'Please provide project image'],
    },
    technologies: {
      type: [String], // An array of strings for technologies used
      required: [true, 'Please provide technologies used'],
    },
    liveDemoLink: {
      type: String,
      required: [true, 'Please live DemoLink'],
    },
    repoLinkClient: {
      type: String,
      required: [true, 'Please repo Link Client'],
    },
    repoLinkServer: {
      type: String,
      required: [true, 'Please repo Link Server'],
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  },
);

const Project = model<IProject>('Project', projectSchema);

export default Project;
