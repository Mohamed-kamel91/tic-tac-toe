import { cn } from '@utils';
import React from 'react';

export type StackProps = {
  direction?: 'row' | 'col';
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  align?: 'stretch' | 'start' | 'center' | 'end' | 'baseline';
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
}

export const Stack = ({
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap,
  children,
  ...props
}: StackProps) => {
  return (
    <div
      className={cn(
        'flex',
        direction === 'col' && 'flex-col',
        justify && `justify-${justify}`,
        align &&  alignClasses[align],
        gap && `gap-${gap}`,
        className
      )}
      style={{ gap: `${gap}px` }}
      {...props}
    >
      {children}
    </div>
  );
};
