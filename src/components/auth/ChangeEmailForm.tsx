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
import { useChangeEmail } from '@/hooks/useChangeEmail';
import { z } from 'zod';

const changeEmailSchema = z.object({
  oldEmail: z.string().email('Invalid email address'),
  newEmail: z.string().email('Invalid email address'),
});

type ChangeEmailFormValues = z.infer<typeof changeEmailSchema>;

type Props = {
  email: string;
  onBack: () => void;
};

const ChangeEmailForm = ({ email, onBack }: Props) => {
  const { mutate, isPending } = useChangeEmail();

  const form = useForm<ChangeEmailFormValues>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      oldEmail: email,
      newEmail: '',
    },
  });

  const handleSubmit = (data: ChangeEmailFormValues) => {
    mutate({
      oldEmail: data.oldEmail,
      newEmail: data.newEmail,
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h1 className="text-2xl !text-[#282837] font-bold">Change Email</h1>
        <p className="text-sm text-muted-foreground">
          Enter your new email address below.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <fieldset disabled={isPending}>
            <FormField
              control={form.control}
              name="newEmail"
              render={({ field }) => (
                <FormItem className="pb-3">
                  <FormLabel>New Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. newmail@gmail.com"
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

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#C0DE9D] hover:bg-[#76B729] text-black font-semibold py-3"
                disabled={isPending}
              >
                {isPending ? 'Processing...' : 'Change Email'}
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

export default ChangeEmailForm; 