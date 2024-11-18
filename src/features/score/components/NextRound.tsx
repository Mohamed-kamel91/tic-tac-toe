import { Button } from '@components/ui/buttons';

import { useDispatch, useSelector } from '@store';
import {
  resetBoard,
  selectPlayerTurn,
} from '@features/board/slices/boardSlice';
import {
  incrementRounds,
  incrementScore,
} from '../slices/scoreSlice';
import { cn } from '@utils';

type NextRoundProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
};

export const NextRound = ({
  className,
  onClick,
}: NextRoundProps) => {
  const player = useSelector(selectPlayerTurn);

  const dispatch = useDispatch();

  const handleNextRound = () => {
    dispatch(incrementRounds());
    dispatch(incrementScore(player));
    dispatch(resetBoard());
    onClick?.();
  };

  return (
    <Button
      className={cn('min-w-[90px]', className)}
      variant="primary"
      size="lg"
      onClick={handleNextRound}
    >
      Next round
    </Button>
  );
};
