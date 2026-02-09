'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const CheckEmail = () => {
  const t = useTranslations('common.auth.checkEmail');
  const router = useRouter();

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">{t('title')}</h2>
        <p className="text-muted-foreground">{t('description')}</p>
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
  );
};

export default CheckEmail;
