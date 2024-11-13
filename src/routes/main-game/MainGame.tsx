import { ErrorBoundary } from 'react-error-boundary';

import { CompErrorFallback } from '@components/ui/errors';
import { PlayerSetup } from '@features/players/components/PlayerSetup';
import { Gameplay } from '@routes/main-game/components/Gameplay';
import { GameStart } from './components/GameStart';

import { useDispatch, useSelector } from '@store';
import {
  resetStart,
  selectIsPlaying,
  selectIsStarted,
} from '../../features/game/slices/gameSlice';

import { cn } from '@utils';

export const Game = () => {
  const isStarted = useSelector(selectIsStarted);
  const isPlaying = useSelector(selectIsPlaying);
  const dispatch = useDispatch();

  const handleResetStart = () => {
    dispatch(resetStart());
  };

  return (
    <div className="flex h-screen min-h-screen w-full">
      <div
        className={cn(
          'relative',
          'h-full w-full',
          'bg-primary',
          'ease-inout-custom transition-all duration-800',
          isPlaying ? 'hidden' : 'block'
        )}
      >
        <div
          className={cn(
            'absolute left-1/2 top-1/2 flex flex-col justify-center',
            'w-full p-5',
            '-translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out',
            isStarted && 'top-[42%]'
          )}
        >
          <GameStart
            isStarted={isStarted}
            isPlaying={isPlaying}
          />

          {isStarted && !isPlaying && (
            <div className="mt-[30px] min-h-[250px]">
              <ErrorBoundary
                FallbackComponent={CompErrorFallback}
              >
                <PlayerSetup
                  className="mx-auto max-w-[400px]"
                  resetStart={handleResetStart}
                />
              </ErrorBoundary>
            </div>
          )}
        </div>
      </div>

      {isPlaying && <Gameplay />}
    </div>
  );
};
