import { z } from 'zod';

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Signup Schema
export const signupSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^A-Za-z0-9]/, 'Must contain a special character'),
});

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

// Change Password Schema
export const changePasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  oldPassword: z.string().min(1, 'Old password is required'),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^A-Za-z0-9]/, 'Must contain a special character'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Change Email Schema
export const changeEmailSchema = z.object({
  oldEmail: z.string().email('Please enter a valid email address'),
  newEmail: z.string().email('Please enter a valid email address'),
});

// Confirm Email Schema
export const confirmEmailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  secret: z.string().min(1, 'Confirmation code is required'),
});

// Reset Password Confirm Schema
export const resetPasswordConfirmSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  token: z.string().min(1, 'Token is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^A-Za-z0-9]/, 'Must contain a special character'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Type exports
export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
export type ChangeEmailFormValues = z.infer<typeof changeEmailSchema>;
export type ConfirmEmailFormValues = z.infer<typeof confirmEmailSchema>;
export type ResetPasswordConfirmFormValues = z.infer<typeof resetPasswordConfirmSchema>;

// Default values
export const loginDefaultValues: LoginFormValues = {
  email: '',
  password: '',
};

export const signupDefaultValues: SignupFormValues = {
  name: '',
  email: '',
  password: '',
};

export const forgotPasswordDefaultValues: ForgotPasswordFormValues = {
  email: '',
};

export const changePasswordDefaultValues: ChangePasswordFormValues = {
  email: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const changeEmailDefaultValues: ChangeEmailFormValues = {
  oldEmail: '',
  newEmail: '',
};

export const confirmEmailDefaultValues: ConfirmEmailFormValues = {
  email: '',
  secret: '',
};

export const resetPasswordConfirmDefaultValues: ResetPasswordConfirmFormValues = {
  email: '',
  token: '',
  password: '',
  confirmPassword: '',
};

// Hook exports for backward compatibility
export const useLoginSchema = () => loginSchema;
export const useSignupSchema = () => signupSchema;
export const useForgotPasswordSchema = () => forgotPasswordSchema;
export const useChangePasswordSchema = () => changePasswordSchema;
export const useChangeEmailSchema = () => changeEmailSchema;
export const useConfirmEmailSchema = () => confirmEmailSchema; 
export const useResetPasswordConfirmSchema = () => resetPasswordConfirmSchema; 