import { StartButton } from './StartButton';

import { cn } from '@utils';

type startGameProps = {
  isStarted: boolean;
  isPlaying: boolean;
  handleStart: () => void;
};

export const StartGame = ({
  isStarted,
  isPlaying,
  handleStart,
}: startGameProps) => {
  return (
    <>
      {!isPlaying && (
        <h1
          className={cn(
            'text-center font-Anton text-[50px] font-semibold tracking-[2px]',
            'text-white',
            'transition-all duration-300 ease-out',
            isStarted && 'text-[35px]'
          )}
        >
          TIC TAC TOE
        </h1>
      )}

      {!isStarted && !isPlaying && (
        <StartButton startGame={handleStart} />
      )}
    </>
  );
};
