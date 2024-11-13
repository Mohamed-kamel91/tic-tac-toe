import { Button } from '@components/ui/buttons';

import { useDispatch } from '@store';
import { startGame } from '../slices/gameSlice';

import { cn } from '@utils';

export const StartGame = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startGame());
  };

  return (
    <Button
      className={cn(
        'self-center',
        'mt-[20px] h-[64px] w-[120px] hover:w-[130px]',
        'border-2 border-white bg-primary text-white',
        'transition-all duration-100 ease-linear'
      )}
      variant="default"
      onClick={handleStart}
    >
      Start
    </Button>
  );
};
