import { MoveLeft, MoveRight } from 'lucide-react';

import { cn } from '@utils';

type StepButtonProps = {
  name?: string;
  icon?: JSX.Element;
  direction: 'prev' | 'next';
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const StepButton = ({
  className = '',
  name,
  icon,
  direction,
  disabled,
  children,
  onClick,
  ...props
}: StepButtonProps) => {
  const iconStyles =
    'icon-rg transition-all duration-250 ease-out';

  return (
    <button
      className={cn(
        'group flex items-center gap-2',
        'p-[10px_10px]',
        'text-white',
        'cursor-pointer rounded-full',
        direction === 'prev' && 'mr-auto',
        direction === 'next' && 'ml-auto',
        disabled &&
          'cursor-default text-[rgba(255,255,255,0.6)]',
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* Prev icon */}
      {direction === 'prev' &&
        (icon || (
          <MoveLeft
            className={cn(
              iconStyles,
              !disabled && 'group-hover:-translate-x-1'
            )}
          />
        ))}

      {/* Button name */}
      <span className="text-[14px]">{children || name}</span>

      {/* Next icon */}
      {direction === 'next' &&
        (icon || (
          <MoveRight
            className={cn(
              iconStyles,
              !disabled && 'group-hover:translate-x-1'
            )}
          />
        ))}
    </button>
  );
};
