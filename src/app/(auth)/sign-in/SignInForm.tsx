'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import { signInSchema, type TSignInSchema } from '@/lib/validation/auth/sign-in-schema';
import PasswordInput from '../_components/PasswordInput';

const SignInForm = () => {
  const t = useTranslations('common.auth.form');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const supabase = createClient();

  const onSubmit = async (formData: TSignInSchema) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError('root', { message: error.message });
      return;
    }

    // TODO: set user data to MobX store
    console.log('User signed in:', data);
    router.push('/');
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
        <ErrorMessage error={errors.password?.message} isErrorTranslation />
      </div>

      <div className="text-right">
        <Link href="#" className="text-sm text-primary hover:underline">
          {t('actions.forgotPassword')}
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => clearErrors('root')}
      >
        {t('actions.signIn')}
      </Button>

      <ErrorMessage className="mt-2" error={errors.root?.message} isErrorTranslation />
    </form>
  );
};

export default SignInForm;
