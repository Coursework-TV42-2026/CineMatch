import { Skeleton } from '@/components/ui/skeleton';
import AuthCard from '../../_components/AuthCard';

export default function ResetPasswordPageLoading() {
  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-7 w-48" /> {/* title */}
          <Skeleton className="h-4 w-64" /> {/* description */}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" /> {/* label */}
            <Skeleton className="h-10 w-full" /> {/* input */}
          </div>
          <Skeleton className="h-10 w-full" /> {/* button */}
        </div>
      </div>
    </AuthCard>
  );
}
