'use client';

import { Eye, EyeClosed } from 'lucide-react';
import { useState, type ComponentPropsWithRef } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/cn';

type TPasswordInputProps = {
  containerProps?: ComponentPropsWithRef<'div'>;
} & Omit<ComponentPropsWithRef<'input'>, 'type'>;

const PasswordInput = ({ containerProps, ...props }: TPasswordInputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div {...containerProps} className={cn('relative', containerProps?.className)}>
      <Input
        {...props}
        placeholder={props.placeholder ?? '••••••••'}
        type={isVisible ? 'text' : 'password'}
      />
      <button
        type="button"
        className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? <EyeClosed className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default PasswordInput;
