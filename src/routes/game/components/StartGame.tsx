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
      <h1
        className={cn(
          'text-center text-[50px] font-semibold tracking-[2px] text-white',
          'transition-all duration-300 ease-out',
          isStarted && 'text-[35px]',
          isPlaying && 'hidden'
        )}
      >
        TIC TAC TOE
      </h1>

      {!isStarted && !isPlaying && (
        <StartButton startGame={handleStart} />
      )}
    </>
  );
};
