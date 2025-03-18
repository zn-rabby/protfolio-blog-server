import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    category: z
      .string({ required_error: 'Category is required!' })
      .min(3, 'Category must be at least 3 characters long'),

    name: z
      .string({ required_error: 'Name is required!' })
      .min(2, 'Name must be at least 2 characters long'),

    image: z
      .string({ required_error: 'Image URL is required!' })
      .url('Invalid image URL format'),

    title: z
      .string({ required_error: 'Title is required!' })
      .min(5, 'Title must be at least 5 characters long'),

    content: z
      .string({ required_error: 'Content is required!' })
      .min(10, 'Content must be at least 10 characters long'),

    introduction: z
      .string({ required_error: 'Introduction is required!' })
      .min(10, 'Introduction must be at least 10 characters long'),

    tags: z
      .array(z.string()) // First, ensure it's an array
      .min(1, 'At least one tag should be provided') // Now you can apply .min()
      .optional(), // Make it optional but still enforce the min if provided

    isPublished: z.boolean().default(true), // Default to true if not provided

    isDeleted: z.boolean().default(false), // Default to false

    views: z.number().optional().default(0), // Optional field with a default value of 0

    likes: z.number().optional().default(0), // Optional field with a default value of 0

    thumbnail: z.string().optional(), // Optional but if provided, it must be a valid URL

    authorName: z
      .string({ required_error: 'Author name is required!' })
      .min(2, 'Author name must be at least 2 characters long'),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
};
