import { RotateCcw as ResetIcon } from 'lucide-react';

import { Button } from '@components/ui/buttons';

import { cn } from '@utils';

type ResetGameProps =
  {} & React.HTMLAttributes<HTMLButtonElement>;

export const ResetGame = ({ className }: ResetGameProps) => {
  return (
    <Button
      className={cn(
        'group gap-0 overflow-hidden',
        'h-16 w-16 px-5 hover:w-28',
        'shadow-sm',
        'transition-all duration-200 ease-out',
        className
      )}
      variant="secondary"
      icon={<ResetIcon />}
    >
      <span
        className={cn(
          'absolute ml-2 group-hover:static',
          'opacity-0 group-hover:opacity-100',
          '-translate-x-1 group-hover:translate-x-0',
          'transition-transform duration-200 ease-out'
        )}
      >
        Reset
      </span>
    </Button>
  );
};
