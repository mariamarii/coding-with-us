// lib/validation.ts
import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(
      /[!@#$%^&*()[\]{};:'",.<>/?\\|`~+=_-]/,
      'Must contain a special character'
    ),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(
      /[!@#$%^&*()[\]{};:'",.<>/?\\|`~+=_-]/,
      'Must contain a special character'
    ),
});

// Types derived from schemas
export type SignupData = z.infer<typeof signupSchema>;
export type LoginData = z.infer<typeof loginSchema>;
