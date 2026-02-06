'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AuthCard from '../_components/AuthCard';
import SocialButtons from '../_components/SocialButtons';

export default function SignInPage() {
  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-foreground text-2xl font-bold">Welcome Back!</h2>
          <p className="text-muted-foreground mt-2 text-sm">Enter your details to sign in.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
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

          <div className="text-right">
            <Link href="#" className="text-primary text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <Separator />
          <span className="bg-card text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
            OR
          </span>
        </div>

        <SocialButtons />

        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
