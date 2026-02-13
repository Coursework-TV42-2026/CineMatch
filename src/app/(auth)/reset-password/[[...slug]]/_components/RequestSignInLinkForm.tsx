'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import z from 'zod';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import { emailSchema } from '@/lib/validation/auth/utils';

const requestSignInLinkSchema = z.object({
  email: emailSchema,
});

type TRequestSignInLinkSchema = z.infer<typeof requestSignInLinkSchema>;

const RequestSignInLinkForm = () => {
  const t = useTranslations('common.auth');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<TRequestSignInLinkSchema>({
    resolver: zodResolver(requestSignInLinkSchema),
  });
  const supabase = createClient();

  const onSubmit = async (formData: TRequestSignInLinkSchema) => {
    const nextUrl = encodeURIComponent('/reset-password/confirm');
    const { error } = await supabase.auth.signInWithOtp({
      email: formData.email,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback?next=${nextUrl}`,
      },
    });

    if (error) {
      setError('root', { message: error.message });
      return;
    }

    router.push('?checkEmail=magicLink');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="email">{t('form.email')}</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          className="w-full"
          {...register('email')}
        />
        <ErrorMessage error={errors.email?.message} isErrorTranslation />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => clearErrors('root')}
      >
        {t('resetPassword.email.sendLink')}
      </Button>

      <ErrorMessage className="mt-2" error={errors.root?.message} isErrorTranslation />
    </form>
  );
};

export default RequestSignInLinkForm;
