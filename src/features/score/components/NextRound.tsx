import { Button } from '@components/ui/buttons';

import { useDispatch, useSelector } from '@store';
import {
  resetBoard,
  selectPlayerTurn,
} from '@features/board/slices/boardSlice';
import {
  incrementRounds,
  incrementScore,
} from '../slices/scoreSLice';

export const NextRound = () => {
  const player = useSelector(selectPlayerTurn);

  const dispatch = useDispatch();

  const handleNextRound = () => {
    dispatch(incrementRounds());
    dispatch(incrementScore(player));
    dispatch(resetBoard());
  };

  return (
    <Button
      variant="primary"
      size="lg"
      className="min-w-[90px]"
      onClick={handleNextRound}
    >
      Next round
    </Button>
  );
};
