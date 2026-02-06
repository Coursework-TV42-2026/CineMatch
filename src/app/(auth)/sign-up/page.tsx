import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase/client';
import AuthCard from '../_components/AuthCard';
import SocialButtons from '../_components/SocialButtons';
import SignUpForm from './SignUpForm';

export default function SignUpPage() {
  const t = useTranslations('common.auth');
  // const supabase = createClient();

  // const loginWithGoogle = () => {
  //   supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: `${location.origin}/api/auth/callback`,
  //     },
  //   });
  // };

  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-foreground mb-2 text-2xl font-bold">{t('signUp.title')}</h2>
          <p className="text-muted-foreground text-sm">{t('signUp.description')}</p>
        </div>

        <SignUpForm />

        <div className="relative">
          <Separator />
          <span className="bg-card text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
            {t('form.or')}
          </span>
        </div>

        <SocialButtons provider="signUp" />

        <p className="text-muted-foreground text-center text-sm">
          {t.rich('form.actions.toSignIn', {
            a: (signIn) => (
              <Link href="/sign-in" className="text-primary hover:underline">
                {signIn}
              </Link>
            ),
          })}
        </p>
      </div>
    </AuthCard>
  );
}
