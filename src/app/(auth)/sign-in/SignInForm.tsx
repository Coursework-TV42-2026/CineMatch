'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignInForm = () => {
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

      <div className="text-right">
        <Link href="#" className="text-primary text-sm hover:underline">
          {t('actions.forgotPassword')}
        </Link>
      </div>

      <Button type="submit" className="w-full">
        {t('actions.signIn')}
      </Button>
    </form>
  );
};

export default SignInForm;
