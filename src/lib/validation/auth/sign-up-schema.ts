import z from 'zod';
import { tPath } from '@/lib/utils/i18n';
import { basicPasswordSchema, emailSchema, strongPasswordSchema } from './utils';

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: strongPasswordSchema,
    confirmPassword: basicPasswordSchema,
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: tPath('common.errors.auth.password.match'),
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
