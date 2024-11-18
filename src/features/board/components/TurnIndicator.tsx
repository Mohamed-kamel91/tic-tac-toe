import { useSelector } from '@store';
import { ChevronDown } from 'lucide-react';

import { selectPlayerTurn } from '../slices/boardSlice';

import { cn } from '@utils';
import { PlayerTurn } from '../types';

type TurnIndicatorProps = {
  player: PlayerTurn;
};

export const TurnIndicator = ({
  player,
}: TurnIndicatorProps) => {
  const playerTurn = useSelector(selectPlayerTurn);
  const isPlayerTurn = player === playerTurn;

  return (
    isPlayerTurn && (
      <div
        className={cn(
          'absolute -top-24 left-1/2 -translate-x-1/2',
          'text-primary'
        )}
      >
        <div className="animate-bounce">
          <ChevronDown className="icon-lg" strokeWidth={3} />
        </div>
      </div>
    )
  );
};
