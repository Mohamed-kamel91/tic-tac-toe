import { Button } from '@components/ui/buttons';
import { resetBoard } from '@features/board/slices/boardSlice';
import { resetScore } from '@features/score/slices/scoreSLice';
import { exitGame } from '../slices/gameSlice';

import { useDispatch } from '@store';

export const ExitGame = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(resetBoard());
    dispatch(resetScore());
    dispatch(exitGame());
  };

  return (
    <Button
      variant="primary"
      size="lg"
      className="min-w-[90px]"
      onClick={handleExit}
    >
      Exit
    </Button>
  );
};
