'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase/client';
import AuthCard from '../_components/AuthCard';
import SocialButtons from '../_components/SocialButtons';

export default function SignUpPage() {
  const t = useTranslations('common.auth');
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
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-foreground mb-2 text-2xl font-bold">{t('signUp.title')}</h2>
          <p className="text-muted-foreground text-sm">{t('signUp.description')}</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('form.email')}</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('form.password')}</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full pr-10"
              />
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">{t('form.confirmPassword')}</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="w-full pr-10"
              />
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            {t('form.actions.signUp')}
          </Button>
        </form>

        <div className="relative">
          <Separator />
          <span className="bg-card text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
            {t('form.or')}
          </span>
        </div>

        <SocialButtons onGoogleClick={loginWithGoogle} provider="signUp" />

        <p className="text-muted-foreground text-center text-sm">
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
  );
}
