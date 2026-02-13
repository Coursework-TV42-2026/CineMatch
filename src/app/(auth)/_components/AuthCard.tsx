import { cn } from '@/lib/cn';

type TAuthCardProps = {
  children: React.ReactNode;
  className?: string;
};

const AuthCard = ({ children, className }: TAuthCardProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-md rounded-2xl bg-card p-8 shadow-2xl dark:bg-card/90 dark:backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AuthCard;
