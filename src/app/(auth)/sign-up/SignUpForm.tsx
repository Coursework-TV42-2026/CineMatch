'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PASSWORD } from '@/constants/input-lengths/auth';
import { createClient } from '@/lib/supabase/client';
import { signUpSchema, type TSignUpSchema } from '@/lib/validation/auth/sign-up-schema';
import PasswordInput from '../_components/PasswordInput';

const SignUpForm = () => {
  const t = useTranslations('common.auth.form');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const supabase = createClient();

  const onSubmit = async (formData: TSignUpSchema) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: `${origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError('root', { message: error.message });
      return;
    }

    // TODO: set user data to MobX store
    console.log('User signed up:', data);
    // router.push('/');

    // Ask to confirm email
    router.push('?checkEmail=true');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          className="w-full"
          {...register('email')}
        />
        <ErrorMessage error={errors.email?.message} isErrorTranslation />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t('password')}</Label>
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
        <Label htmlFor="confirm-password">{t('confirmPassword')}</Label>
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
        {t('actions.signUp')}
      </Button>

      <ErrorMessage className="mt-2" error={errors.root?.message} isErrorTranslation />
    </form>
  );
};

export default SignUpForm;
