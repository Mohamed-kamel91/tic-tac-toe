import { useMemo } from 'react';
import { X, Circle as O } from 'lucide-react';

import { Button } from '@components/ui/buttons';

import { cn } from '@utils';
import { getCellPosition } from '../utils/board-utils';
import { Cell as CellValue } from '../types';
import { useSelector } from '@store';
import { selectIsWinner } from '../slices/boardSlice';

type CellProps = {
  value: CellValue;
  number: number;
  isWinningCell: boolean;
  onSelect: (() => void) | undefined;
};

export const Cell = ({
  value,
  number,
  isWinningCell,
  onSelect,
}: CellProps) => {
  const isWinner = useSelector(selectIsWinner);

  // Get cell row & cell number
  // e.g: (1,1)
  const cellPosition = useMemo(
    () => getCellPosition(number),
    [number]
  );

  return (
    <Button
      variant="default"
      className={cn(
        'text-white',
        'rounded-[24px] bg-primary',
        isWinner ? 'cursor-default' : 'cursor-pointer',
        !isWinner && 'hover:scale-[1.05] hover:bg-blue-hover',
        !isWinner &&
          'focus:scale-[1.05] focus:bg-blue-hover focus:outline-none',
        !isWinner && 'transition-all duration-150 ease-out',
        isWinningCell &&
          isWinner &&
          'bg-indigo-300 hover:bg-indigo-300 focus:bg-indigo-300'
      )}
      aria-label={`cell ${cellPosition.join()}`}
      aria-disabled={!!isWinner}
      onClick={onSelect}
    >
      {value === 'X' ? (
        <X className="scale-in h-[50px] w-[50px] stroke-[5px] drop-shadow-md" />
      ) : value === 'O' ? (
        <O className="scale-in h-[50px] w-[50px] rounded-full stroke-[5px] drop-shadow-md" />
      ) : null}
    </Button>
  );
};
