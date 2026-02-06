'use client';

import { Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpForm = () => {
  const t = useTranslations('common.auth.form');

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t('password')}</Label>
        <div className="relative">
          <Input id="password" type="password" placeholder="••••••••" className="w-full pr-10" />
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">{t('confirmPassword')}</Label>
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
        {t('actions.signUp')}
      </Button>
    </form>
  );
};

export default SignUpForm;
