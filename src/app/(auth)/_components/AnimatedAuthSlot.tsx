'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useMobile } from '@/lib/hooks/useMobile';

const SLOT_POSITIONS = {
  form: { signIn: '100%', signUp: '0%' },
  hero: { signIn: '0%', signUp: '100%' },
} as const;

type TSlotType = 'form' | 'hero';

type TAnimatedSlotProps = {
  children: React.ReactNode;
  className?: string;
  slotType: TSlotType;
};

const AnimatedAuthSlot = ({ children, className, slotType }: TAnimatedSlotProps) => {
  const isMobile = useMobile();
  const pathname = usePathname();

  const isSignIn = pathname === '/sign-in';
  const xPosition = isSignIn ? SLOT_POSITIONS[slotType].signIn : SLOT_POSITIONS[slotType].signUp;

  return (
    <motion.div
      initial={isMobile ? {} : { x: xPosition }}
      animate={isMobile ? {} : { x: xPosition }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAuthSlot;
