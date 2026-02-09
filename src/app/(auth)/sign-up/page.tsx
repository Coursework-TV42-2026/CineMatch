import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import AuthCard from '../_components/AuthCard';
import CheckEmailBoundary from '../_components/CheckEmailBoundary';
import SocialButtons from '../_components/SocialButtons';
import SignUpForm from './SignUpForm';

export default function SignUpPage() {
  const t = useTranslations('common.auth');

  return (
    <CheckEmailBoundary>
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground">{t('signUp.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('signUp.description')}</p>
          </div>

          <SignUpForm />

          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground uppercase">{t('form.or')}</span>
            <Separator className="flex-1" />
          </div>

          <SocialButtons provider="signUp" />

          <p className="text-center text-sm text-muted-foreground">
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
    </CheckEmailBoundary>
  );
}
