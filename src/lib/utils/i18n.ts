import type en from '@/locales/en.json';

type FlattenKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${K & string}`
    : T[K] extends object
      ? FlattenKeys<T[K], `${Prefix}${K & string}.`>
      : never;
}[keyof T];

// Type for full i18n translation path
export type TPathKey = FlattenKeys<typeof en>;

// Function to verify i18n translation path. Will avoid typos in translation keys
export function tPath(key: TPathKey) {
  return key;
}
