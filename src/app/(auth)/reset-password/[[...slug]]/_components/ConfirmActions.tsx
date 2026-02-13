import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const ConfirmActions = () => {
  const t = useTranslations('common.auth.resetPassword.confirm');

  return (
    <div className="space-y-3">
      <Button asChild className="w-full">
        <Link href="/reset-password/reset">{t('resetPassword')}</Link>
      </Button>

      <Button asChild variant="outline" className="w-full">
        <Link href="/">{t('goHome')}</Link>
      </Button>
    </div>
  );
};

export default ConfirmActions;
