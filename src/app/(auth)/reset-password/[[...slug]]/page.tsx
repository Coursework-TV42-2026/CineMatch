import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import AuthCard from '../../_components/AuthCard';
import ConfirmActions from './_components/ConfirmActions';
import RequestSignInLinkForm from './_components/RequestSignInLinkForm';
import ResetPasswordForm from './_components/ResetPasswordForm';

const KNOWN_ROUTES = ['email', 'confirm', 'reset'] as const;
type TRoute = (typeof KNOWN_ROUTES)[number];

type TPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function ResetPasswordPage({ params }: TPageProps) {
  const t = await getTranslations('common.auth.resetPassword');
  const { slug } = await params;
  const route = slug?.[0] as TRoute | undefined;

  // Redirect to the correct route and verify that route is indeed of type TRoute
  if (!route || !KNOWN_ROUTES.includes(route)) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    redirect(data.user ? '/reset-password/reset' : '/reset-password/email');
  }

  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">{t(`${route}.title`)}</h2>
          <p className="text-sm text-muted-foreground">{t(`${route}.description`)}</p>
        </div>

        <ContentComponent route={route} />

        {route === 'email' && (
          <Button asChild variant="link" className="flex">
            <Link href="/sign-in" className="mx-auto w-fit text-primary hover:underline">
              {t('email.backToSignIn')}
            </Link>
          </Button>
        )}
      </div>
    </AuthCard>
  );
}

const ContentComponent = ({ route }: { route: TRoute }) => {
  switch (route) {
    case 'email':
      return <RequestSignInLinkForm />;

    case 'reset':
      return <ResetPasswordForm />;

    case 'confirm':
      return <ConfirmActions />;
  }
};
