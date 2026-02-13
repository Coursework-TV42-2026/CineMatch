import z from 'zod';
import { basicPasswordSchema, emailSchema } from './utils';

export const signInSchema = z.object({
  email: emailSchema,
  password: basicPasswordSchema,
});

export type TSignInSchema = z.infer<typeof signInSchema>;
