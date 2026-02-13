import { useTranslations } from 'next-intl';
import { cn } from '@/lib/cn';
import { type TPathKey } from '@/lib/utils/i18n';

type TTranslationArgs = Record<string, string | number>;

function getTranslationArgs(error: string, translationArgs?: Record<string, TTranslationArgs>) {
  if (!translationArgs) return undefined;

  for (const [substring, argValue] of Object.entries(translationArgs)) {
    if (error.endsWith(substring)) {
      return argValue;
    }
  }

  return undefined;
}

type TErrorMessageProps = {
  className?: string;
  error?: string;
  // Should be used only when sure that error is a translation path
  isErrorTranslation?: boolean;
  // Arguments for translations to be applied when given translation ends with specified key
  translationArgs?: Record<string, TTranslationArgs>; // Record<endsWith, args>
};

const ErrorMessage = ({
  className,
  error,
  isErrorTranslation,
  translationArgs,
}: TErrorMessageProps) => {
  const t = useTranslations();

  if (!error) return null;

  let message: string = error;
  if (isErrorTranslation && error.startsWith('common.')) {
    message = t(error as TPathKey, getTranslationArgs(error, translationArgs));
  }

  return <div className={cn('text-sm text-destructive', className)}>{message}</div>;
};

export default ErrorMessage;
