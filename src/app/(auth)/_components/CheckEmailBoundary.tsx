'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import AuthCard from './AuthCard';

type TCheckEmailBoundaryProps = {
  children: React.ReactNode;
};

const CheckEmailBoundary = ({ children }: TCheckEmailBoundaryProps) => {
  const t = useTranslations('common.auth.checkEmail');
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkEmailType = searchParams.get('checkEmail');

  if (checkEmailType === 'confirm' || checkEmailType === 'magicLink') {
    return (
      <AuthCard>
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t(`${checkEmailType}.title`)}</h2>
            <p className="text-muted-foreground">{t(`${checkEmailType}.description`)}</p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => router.push(window.location.pathname)} // Clear search params
              variant="outline"
              className="flex-1"
            >
              {t('back')}
            </Button>
            <Button asChild className="flex-1">
              <Link href="/">{t('goHome')}</Link>
            </Button>
          </div>
        </div>
      </AuthCard>
    );
  }

  return <>{children}</>;
};

export default CheckEmailBoundary;
