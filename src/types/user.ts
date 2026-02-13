import { type User } from '@supabase/supabase-js';

export type TUser = Pick<User, 'id' | 'email'>;
