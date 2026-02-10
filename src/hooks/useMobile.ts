import { useEffect, useState } from 'react';

const BREAKPOINT = 1024;

const initialValue = typeof window !== 'undefined' ? window.innerWidth < BREAKPOINT : false;

export function useMobile() {
  const [isMobile, setIsMobile] = useState(initialValue);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
}
