import React from 'react';

export type TransitionCssProps = {
  property?: React.CSSProperties['transitionProperty'];
  duration?: number;
  timingFunction?: React.CSSProperties['transitionTimingFunction'];
  delay?: number;
};

type TransitionProps = {
  className?: string
  styles: React.CSSProperties;
  children: React.ReactNode;
} & TransitionCssProps;

export const Transition = ({
  className = "",
  styles,
  property = 'all',
  duration = 150,
  timingFunction = 'ease-in',
  delay = 0,
  children,
}: TransitionProps) => {
  const style: React.CSSProperties = {
    ...styles,
    transitionProperty: `${property}`,
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
