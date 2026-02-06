import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import AuthCard from '../_components/AuthCard';
import SocialButtons from '../_components/SocialButtons';
import SignInForm from './SignInForm';

export default function SignInPage() {
  const t = useTranslations('common.auth');

  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-foreground text-2xl font-bold">{t('signIn.title')}</h2>
          <p className="text-muted-foreground mt-2 text-sm">{t('signIn.description')}</p>
        </div>

        <SignInForm />

        <div className="relative">
          <Separator />
          <span className="bg-card text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs uppercase">
            {t('form.or')}
          </span>
        </div>

        <SocialButtons provider="signIn" />

        <p className="text-muted-foreground text-center text-sm">
          {t.rich('form.actions.toSignUp', {
            a: (signUp) => (
              <Link href="/sign-up" className="text-primary hover:underline">
                {signUp}
              </Link>
            ),
          })}
        </p>
      </div>
    </AuthCard>
  );
}
