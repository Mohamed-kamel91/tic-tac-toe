import { ErrorBoundary } from 'react-error-boundary';

import { CompErrorFallback } from '@components/ui/errors';
import { PlayerSetup } from '@features/players/components/PlayerSetup';
import { StartButton } from './components/StartButton';

import { useDispatch, useSelector } from '@store';
import {
  resetStart,
  selectIsStarted,
  startGame,
} from '../../store/slices/gameSlice';
import { cn } from '@utils';

export const Game = () => {
  const isStarted = useSelector(selectIsStarted);
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startGame());
  };

  const handleResetStart = () => {
    dispatch(resetStart());
  };

  return (
    <div className="relative min-h-screen bg-orange-400">
      <div
        className={cn(
          'absolute left-1/2 top-1/2 flex flex-col justify-center',
          'w-full p-5',
          isStarted && 'top-[42%]',
          '-translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out'
        )}
      >
        <h1
          className={cn(
            'text-center text-[50px] font-bold tracking-[2px] text-white',
            isStarted && 'text-[35px]',
            'transition-all duration-300 ease-out'
          )}
        >
          TIC TAC TOE
        </h1>

        {!isStarted ? (
          <StartButton startGame={handleStart} />
        ) : (
          <div className="mt-[30px] min-h-[250px]">
            <ErrorBoundary FallbackComponent={CompErrorFallback}>
              <PlayerSetup
                className="mx-auto max-w-[400px]"
                resetStart={handleResetStart}
              />
            </ErrorBoundary>
          </div>
        )}
      </div>
    </div>
  );
};
