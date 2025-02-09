import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Project name is required!' })
      .min(2, 'Project name must be at least 2 characters long'),
    category: z
      .string({ required_error: 'Project category is required!' })
      .min(3, 'Category must be at least 3 characters long'),
    title: z
      .string({ required_error: 'Project title is required!' })
      .min(5, 'Project title must be at least 5 characters long'),
    content: z
      .string({ required_error: 'Project content is required!' })
      .min(10, 'Content must be at least 10 characters long'),
    image: z
      .string({ required_error: 'Project image is required!' })
      .url('Invalid image URL format'), // Ensure the image URL is valid
    technologies: z
      .array(z.string(), { required_error: 'Technologies are required!' })
      .min(1, 'At least one technology must be provided'),
    liveDemoLink: z
      .string({ required_error: 'Live demo link is required!' })
      .url('Invalid live demo link URL format'),
    repoLinkClient: z
      .string({ required_error: 'Client-side repo link is required!' })
      .url('Invalid client-side repo link URL format'),
    repoLinkServer: z
      .string({ required_error: 'Server-side repo link is required!' })
      .url('Invalid server-side repo link URL format'),
    isPublished: z.boolean().default(true),
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
};
