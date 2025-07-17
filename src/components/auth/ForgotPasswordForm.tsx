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
import { useForgotPasswordForm } from './hooks/use-forgot-password';
import { 
  useForgotPasswordSchema, 
  ForgotPasswordFormValues, 
  forgotPasswordDefaultValues 
} from '@/types/auth-forms';

type Props = {
  onBack: () => void;
};

const ForgotPasswordForm = ({ onBack }: Props) => {
  const { trigger, isMutating, isSuccess } = useForgotPasswordForm();
  const formSchema = useForgotPasswordSchema();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: forgotPasswordDefaultValues,
  });

  const handleSubmit = (data: ForgotPasswordFormValues) => {
    trigger(data);
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h1 className="text-2xl !text-[#282837] font-bold">Forgot Password</h1>
        <p className="text-sm text-muted-foreground">
          {isSuccess 
            ? 'Reset password email has been sent to your email address.'
            : 'Enter your email to receive a password reset link.'
          }
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <fieldset disabled={isMutating || isSuccess}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pb-3">
                  <FormLabel className="text-[#75757E]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. ahmed@gmail.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#C0DE9D] hover:bg-[#76B729]"
              disabled={isMutating || isSuccess}
            >
              {isSuccess 
                ? 'Reset Password Email Sent'
                : isMutating 
                ? 'Processing...' 
                : 'Forgot Password'
              }
            </Button>

            <Button
              type="button"
              variant="link"
              onClick={onBack}
              className="w-full text-[#76B729] text-sm underline cursor-pointer"
            >
              Back to login page
            </Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm; 