import { ScoreBoard } from './ScoreBoard';
import { GameRound } from './GameRound';
import { GameBoard } from './GameBoard';
import { GameRules } from '@features/gameplay/components/GameRules';

import { useIsMounted } from '@hooks/useIsMounted';
import { cn } from '@utils';

export const Gameplay = () => {
  const { isMounted: isGameMounted } = useIsMounted();

  return (
    <div className="flex h-full w-full overflow-hidden">
      <aside
        className={cn(
          'flex flex-col justify-center',
          'rounded-br-[40px] rounded-tr-[40px] bg-primary shadow-box',
          'ease-inout-custom transition-all delay-[600ms] duration-800',
          isGameMounted ? 'w-[400px]' : 'w-0'
        )}
      >
        <GameRules />
      </aside>

      <main className="ml-5 grow bg-white">
        <div className="p-5">
          <h1 className="text-center font-semibold">
            TIC TAC TOE
          </h1>
        </div>

        <div className="h-full overflow-auto">
          <div className="mx-auto max-w-4xl p-5">
            <ScoreBoard />
            <GameRound />
            <GameBoard />
          </div>
        </div>
      </main>
    </div>
  );
};
