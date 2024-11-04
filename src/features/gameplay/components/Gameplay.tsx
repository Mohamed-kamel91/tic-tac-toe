import { Logo } from '@components/ui/logo';
import { Stack } from '@components/ui/layout';
import { PlayerScore } from './PlayerScore';
import { GameBoard } from './GameBoard';
import { GameRound } from './GameRound';
import { ExitGame } from './ExitGame';
import { ResetGame } from './ResetGame';
import { GameRules } from './GameRules';

import { cn } from '@utils';

export const Gameplay = () => {
  return (
    <div className="w-full bg-blue-light">
      <main className="h-full">
        <Stack justify="center" className="p-5">
          <Logo color="primary" size="md" align="center" />
        </Stack>

        <div className="mx-auto max-w-4xl p-5">
          <Stack justify="center" className="my-[40px]">
            <GameRound />
          </Stack>

          <Stack
            justify="between"
            align="center"
            gap={20}
            className="w-full"
          >
            <PlayerScore playerSymbol="X" playerName="Mohamed" />
            <GameBoard />
            <PlayerScore playerSymbol="O" playerName="Omar" />
          </Stack>

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
