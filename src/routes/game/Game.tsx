import { ErrorBoundary } from 'react-error-boundary';

import { CompErrorFallback } from '@components/ui/errors';
import { PlayerSetup } from '@features/players/components/PlayerSetup';
import { Gameplay } from '@features/gameplay/components/Gameplay';
import { StartGame } from './components/StartGame';
import { GameRules } from '../../features/gameplay/components/GameRules';

import { useDispatch, useSelector } from '@store';
import {
  resetStart,
  selectIsPlaying,
  selectIsStarted,
  startGame,
} from '../../store/slices/gameSlice';
import { cn } from '@utils';

export const Game = () => {
  const isStarted = useSelector(selectIsStarted);
  const isPlaying = useSelector(selectIsPlaying);
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startGame());
  };

  const handleResetStart = () => {
    dispatch(resetStart());
  };

  return (
    <div className="flex h-screen min-h-screen">
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
          <StartGame
            isStarted={isStarted}
            isPlaying={isPlaying}
            handleStart={handleStart}
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
