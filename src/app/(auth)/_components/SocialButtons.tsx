'use client';

import { useTranslations } from 'next-intl';
import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';

type TSocialButtonsProps = {
  provider: 'signIn' | 'signUp';
};

const SocialButtons = ({ provider }: TSocialButtonsProps) => {
  const t = useTranslations(`common.auth.${provider}.providers`);
  const supabase = createClient();

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <div className="space-y-3">
      <Button type="button" variant="outline" className="h-fit w-full" onClick={loginWithGoogle}>
        <GoogleIcon className="size-5" />
        <span>{t('google')}</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
