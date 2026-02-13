import { tPath } from '@/lib/utils/i18n';
import { emailSchema, passwordWithConfirmSchema, refinePasswords } from './utils';
import type z from 'zod';

export const signUpSchema = passwordWithConfirmSchema
  .extend({
    email: emailSchema,
  })
  .refine(refinePasswords, {
    message: tPath('common.errors.auth.password.match'),
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
