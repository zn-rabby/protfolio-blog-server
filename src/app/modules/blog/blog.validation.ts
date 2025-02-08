import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required!' })
      .min(2, 'Name must be at least 2 characters long'),
    title: z
      .string({ required_error: 'Title is required!' })
      .min(5, 'Title must be at least 5 characters long'),
    content: z
      .string({ required_error: 'Content is required!' })
      .min(10, 'Content must be at least 10 characters long'),
    category: z
      .string({ required_error: 'Content is required!' })
      .min(10, 'Content must be at least 10 characters long'),

    isPublished: z.boolean().default(true),
    views: z.number().optional().default(0),
    likes: z.number().optional().default(0),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
};
