import { useTranslations } from 'next-intl';
import LogoIcon from '@/assets/icons/logo-icon.svg';

const AuthHero = () => {
  const t = useTranslations('common.auth.hero');

  return (
    <div className="flex max-w-md flex-col items-center justify-center gap-6 text-center">
      <div className="size-16 rounded-2xl bg-white/20 p-2 backdrop-blur-sm">
        <LogoIcon className="size-full" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
        <p className="text-lg text-white/90">{t('description')}</p>
      </div>
    </div>
  );
};

export default AuthHero;
