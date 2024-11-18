import { Button } from '@components/ui/buttons';

import { useDispatch } from '@store';
import { resetBoard } from '@features/board/slices/boardSlice';
import { resetScore } from '@features/score/slices/scoreSlice';
import { exitGame } from '../slices/gameSlice';

export const ExitGameAction = () => {
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
