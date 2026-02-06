import { cn } from '@/lib/cn';

type TAuthCardProps = {
  children: React.ReactNode;
  className?: string;
};

const AuthCard = ({ children, className }: TAuthCardProps) => {
  return (
    <div
      className={cn(
        'bg-card dark:bg-card/90 w-full max-w-md rounded-2xl p-8 shadow-2xl dark:backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AuthCard;
