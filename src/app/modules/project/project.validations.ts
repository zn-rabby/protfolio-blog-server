import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    slug: z
      .string({ required_error: 'Project slug is required!' })
      .min(2, 'Project slug must be at least 2 characters long'),

    title: z
      .string({ required_error: 'Project title is required!' })
      .min(5, 'Project title must be at least 5 characters long'),

    category: z
      .string({ required_error: 'Project category is required!' })
      .min(3, 'Category must be at least 3 characters long'),

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

    features: z
      .array(z.string(), { required_error: 'Key features are required!' })
      .optional(), // Make this optional, as per the interface definition

    projectGoals: z.string().optional(), // Optional as per the interface definition

    status: z.enum(['ongoing', 'completed', 'maintenance'], {
      required_error: 'Status is required!',
    }),

    liveDemoLink: z
      .string({ required_error: 'Live demo link is required!' })
      .url('Invalid live demo link URL format'),

    repoLinkClient: z
      .string()
      .url('Invalid client-side repo link URL format')
      .optional(),

    repoLinkServer: z
      .string()
      .url('Invalid server-side repo link URL format')
      .optional(),

    isPublished: z.boolean({
      required_error: 'Publish status is required!',
    }),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    slug: z
      .string()
      .min(2, 'Project slug must be at least 2 characters long')
      .optional(),

    title: z
      .string()
      .min(5, 'Project title must be at least 5 characters long')
      .optional(),

    category: z
      .string()
      .min(3, 'Category must be at least 3 characters long')
      .optional(),

    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long')
      .optional(),

    image: z.array(z.string().url('Each image must be a valid URL')).optional(),

    technologies: z
      .array(z.string())
      .min(1, 'At least one technology must be provided')
      .optional(),

    features: z.array(z.string()).optional(),

    projectGoals: z.string().optional(),

    status: z.enum(['ongoing', 'completed', 'maintenance']).optional(),

    liveDemoLink: z
      .string()
      .url('Invalid live demo link URL format')
      .optional(),

    repoLinkClient: z
      .string()
      .url('Invalid client-side repo link URL format')
      .optional(),

    repoLinkServer: z
      .string()
      .url('Invalid server-side repo link URL format')
      .optional(),

    isPublished: z.boolean().optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
