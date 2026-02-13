'use client';

import { observer } from 'mobx-react-lite';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { globalErrorStore } from '@/stores/global-error-store';

const GlobalErrorModal = observer(() => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations('common.errors.modals');

  useEffect(() => {
    const error = searchParams.get('error');
    if (error === null) return;

    switch (error) {
      case 'generic':
        globalErrorStore.showError('generic');
        break;

      default:
        break;
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('error');
    router.replace(`?${newSearchParams.toString()}`);
  }, [searchParams, router]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      globalErrorStore.clearError();
    }
  };

  if (!globalErrorStore.errorType) return null;

  return (
    <Dialog open={!!globalErrorStore.errorType} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {t(`${globalErrorStore.errorType}.title`)}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {t(`${globalErrorStore.errorType}.description`)}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
});

export default GlobalErrorModal;
