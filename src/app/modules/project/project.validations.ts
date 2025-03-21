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

    description: z
      .string({ required_error: 'Project description is required!' })
      .min(10, 'Description must be at least 10 characters long'),

    image: z
      .array(z.string().url('Each image must be a valid URL'), {
        required_error: 'At least one image is required',
      })
      .nonempty('At least one image is required'),

   
    technologies: z
      .array(z.string(), { required_error: 'Technologies are required!' })
      .min(1, 'At least one technology must be provided'),

    keyFeatures: z
      .array(z.string(), { required_error: 'Key features are required!' })
      .min(1, 'At least one key feature must be provided'),

    status: z.enum(['ongoing', 'completed', 'maintenance'], {
      required_error: 'Status is required!',
    }),

    liveDemoLink: z
      .string({ required_error: 'Live demo link is required!' })
      .url('Invalid live demo link URL format'),

    repoLinkClient: z
      .string({ required_error: 'Client-side repo link is required!' })
      .url('Invalid client-side repo link URL format')
      .optional(),

    repoLinkServer: z
      .string({ required_error: 'Server-side repo link is required!' })
      .url('Invalid server-side repo link URL format')
      .optional(),

    projectGoals: z.string().optional(),

    
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
};
