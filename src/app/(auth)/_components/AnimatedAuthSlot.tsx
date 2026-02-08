'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

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
  const pathname = usePathname();

  const isSignIn = pathname === '/sign-in';
  const xPosition = isSignIn ? SLOT_POSITIONS[slotType].signIn : SLOT_POSITIONS[slotType].signUp;

  return (
    <motion.div
      initial={{ x: xPosition }}
      animate={{ x: xPosition }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={cn(className, 'max-lg:transform-none!')}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAuthSlot;
