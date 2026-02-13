'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PASSWORD } from '@/constants/input-lengths/auth';
import { createClient } from '@/lib/supabase/client';
import { tPath } from '@/lib/utils/i18n';
import { passwordWithConfirmSchema, refinePasswords } from '@/lib/validation/auth/utils';
import PasswordInput from '../../../_components/PasswordInput';
import type z from 'zod';

const resetPasswordSchema = passwordWithConfirmSchema.refine(refinePasswords, {
  message: tPath('common.errors.auth.password.match'),
  path: ['confirmPassword'],
});

type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const t = useTranslations('common.auth');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const supabase = createClient();

  const onSubmit = async (formData: TResetPasswordSchema) => {
    const { error } = await supabase.auth.updateUser({
      password: formData.password,
    });

    if (error) {
      setError('root', { message: error.message });
      return;
    }

    router.push('/');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="password">{t('form.password')}</Label>
        <PasswordInput id="password" className="w-full pr-10" {...register('password')} />
        <ErrorMessage
          error={errors.password?.message}
          isErrorTranslation
          translationArgs={{
            minLength: { length: PASSWORD.minLength },
            maxLength: { length: PASSWORD.maxLength },
          }}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">{t('form.confirmPassword')}</Label>
        <PasswordInput
          id="confirm-password"
          className="w-full pr-10"
          {...register('confirmPassword')}
        />
        <ErrorMessage
          error={errors.confirmPassword?.message}
          isErrorTranslation
          translationArgs={{
            minLength: { length: PASSWORD.minLength },
            maxLength: { length: PASSWORD.maxLength },
          }}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => clearErrors('root')}
      >
        {t('resetPassword.reset.submit')}
      </Button>

      <ErrorMessage className="mt-2" error={errors.root?.message} isErrorTranslation />
    </form>
  );
};

export default ResetPasswordForm;
