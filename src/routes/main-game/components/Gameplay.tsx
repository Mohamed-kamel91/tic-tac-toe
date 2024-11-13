import { Logo } from '@components/ui/logo';
import { Stack } from '@components/ui/layout';
import { GameBoard } from '../../../features/board/components/GameBoard';
import { ScoreTracking } from '../../../features/score/components/ScoreTracking';
import { RoundsTracking } from '../../../features/score/components/RoundsTracking';
import { ExitGame } from '../../../features/game/components/ExitGame';
import { ResetGame } from '../../../features/game/components/ResetGame';
import { GameRules } from '../../../features/game/components/GameRules';

import { cn } from '@utils';
import { NextRound } from '@features/score/components/NextRound';
import { useSelector } from '@store';
import { selectIsWinner } from '@features/board/slices/boardSlice';

export const Gameplay = () => {
  const isWinner = useSelector(selectIsWinner)
  return (
    <div className="w-full bg-blue-light">
      <main className="h-full">
        <Stack justify="center" className="p-5">
          <Logo color="primary" size="md" align="center" />
        </Stack>

        <div className="mx-auto max-w-4xl p-5">
          <Stack justify="center" className="my-[40px]">
            <RoundsTracking />
          </Stack>

          <Stack
            justify="between"
            align="center"
            gap={20}
            className="w-full"
          >
            <ScoreTracking player="X" />
            <GameBoard />
            <ScoreTracking player="O" />
          </Stack>
          {isWinner && <NextRound />}
          <div
            className={cn(
              'fixed bottom-0 left-0 top-0',
              'min-w-20 px-10 py-5'
            )}
          >
            <Stack
              direction="col"
              justify="center"
              gap={12}
              className="h-full"
            >
              <GameRules />
              <ResetGame />
              <ExitGame />
            </Stack>
          </div>
        </div>
      </main>
    </div>
  );
};
