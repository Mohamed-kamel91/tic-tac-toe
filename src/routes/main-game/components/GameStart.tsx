import { StartGame } from '@features/game/components/StartGame';

import { cn } from '@utils';

type startGameProps = {
  isStarted: boolean;
  isPlaying: boolean;
};

export const GameStart = ({
  isStarted,
  isPlaying,
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

      {!isStarted && !isPlaying && <StartGame />}
    </>
  );
};
