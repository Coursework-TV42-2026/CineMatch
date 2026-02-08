import z from 'zod';
import { PASSWORD } from '@/constants/input-lengths/auth';
import { tPath } from '@/lib/utils/i18n';

export const basicPasswordSchema = z
  .string(tPath('common.errors.auth.types.string'))
  .min(PASSWORD.minLength, tPath('common.errors.auth.password.minLength'))
  .max(PASSWORD.maxLength, tPath('common.errors.auth.password.maxLength'));

export const strongPasswordSchema = basicPasswordSchema
  .regex(/[a-z]/, tPath('common.errors.auth.password.lowercase'))
  .regex(/[A-Z]/, tPath('common.errors.auth.password.uppercase'))
  .regex(/\d/, tPath('common.errors.auth.password.number'));

export const emailSchema = z.email(tPath('common.errors.auth.email.invalid'));
