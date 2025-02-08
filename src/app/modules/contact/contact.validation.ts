import { z } from 'zod';

const createContactValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email('Please provide a valid email address!')
      .min(1, 'Email is required!'), // Ensures the email field is not empty
    name: z.string().min(2, 'Name must be at least 2 characters long!'), // Ensures name is at least 2 characters
    message: z.string().min(10, 'Message must be at least 10 characters long!'), // Ensures message is at least 10 characters
  }),
});

export const ContactValidation = {
  createContactValidationSchema,
};
