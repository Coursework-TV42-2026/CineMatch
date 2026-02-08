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
          <h2 className="text-2xl font-bold text-foreground">{t('signIn.title')}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t('signIn.description')}</p>
        </div>

        <SignInForm />

        <div className="flex items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground uppercase">{t('form.or')}</span>
          <Separator className="flex-1" />
        </div>

        <SocialButtons provider="signIn" />

        <p className="text-center text-sm text-muted-foreground">
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
