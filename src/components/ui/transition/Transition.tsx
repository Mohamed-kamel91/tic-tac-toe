import React from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/utils';

type TransitionProps = {
  className?: string;
  translateX?: number;
  translateY?: number;
  duration?: number;
  timingFunction?: React.CSSProperties['transitionTimingFunction'];
  delay?: number;
  children: React.ReactNode;
};

export const Transition = ({
  className,
  translateX = 0,
  translateY = 0,
  duration = 150,
  timingFunction = 'ease-in',
  delay = 0,
  children,
}: TransitionProps) => {
  const { isMounted } = useIsMounted();

  const animation = isMounted
    ? '0px, 0px'
    : `${translateX}px, ${translateY}px`;

  const style: React.CSSProperties = {
    opacity: isMounted ? 1 : 0,
    transform: `translate(${animation})`,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: timingFunction,
  };

  return (
    <div
      style={style}
      className={cn('transition-all', className)}
    >
      {children}
    </div>
  );
};
