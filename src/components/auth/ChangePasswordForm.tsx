'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useChangePassword } from '@/hooks/useChangePassword';
import { z } from 'zod';

const changePasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
  oldPassword: z.string().min(1, 'Old password is required'),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(
      /[!@#$%^&*()[\]{};:'",.<>/?\\|`~+=_-]/,
      'Must contain a special character'
    ),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

type Props = {
  email: string;
  onBack: () => void;
};

const ChangePasswordForm = ({ email, onBack }: Props) => {
  const { mutate, isPending } = useChangePassword();

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      email,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (data: ChangePasswordFormValues) => {
    mutate({
      email: data.email,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h1 className="text-2xl !text-[#282837] font-bold">Change Password</h1>
        <p className="text-sm text-muted-foreground">
          Enter your old and new password below.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <fieldset disabled={isPending}>
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem className="pb-3 text-[#282837]">
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter old password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="pb-3">
                  <FormLabel className="text-[#282837]">New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter new password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="pb-3">
                  <FormLabel className="text-[#282837]">Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Confirm new password"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#76B729] hover:bg-green-700 text-black font-semibold py-3"
                disabled={isPending}
              >
                {isPending ? 'Processing...' : 'Change Password'}
              </Button>
            </div>

            <Button
              type="button"
              variant="link"
              onClick={onBack}
              className="w-full text-[#76B729] text-sm underline cursor-pointer"
            >
              Back to home page
            </Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm; 