import { useTranslations } from 'next-intl';
import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components/ui/button';

type TSocialButtonsProps = {
  onGoogleClick?: () => void;
  provider: 'signIn' | 'signUp';
};

const SocialButtons = ({ onGoogleClick, provider }: TSocialButtonsProps) => {
  const t = useTranslations(`common.auth.${provider}.providers`);

  return (
    <div className="space-y-3">
      <Button type="button" variant="outline" className="h-fit w-full" onClick={onGoogleClick}>
        <GoogleIcon className="size-5" />
        <span>{t('google')}</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
