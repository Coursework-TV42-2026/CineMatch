'use client';

import { useSearchParams } from 'next/navigation';
import AuthCard from './AuthCard';
import CheckEmail from './CheckEmail';

type TCheckEmailBoundaryProps = {
  children: React.ReactNode;
};

const CheckEmailBoundary = ({ children }: TCheckEmailBoundaryProps) => {
  const searchParams = useSearchParams();
  const showCheckEmail = searchParams.get('checkEmail') === 'true';

  if (showCheckEmail) {
    return (
      <AuthCard>
        <CheckEmail />
      </AuthCard>
    );
  }

  return <>{children}</>;
};

export default CheckEmailBoundary;
