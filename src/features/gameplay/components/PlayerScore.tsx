import { Circle as O, X } from 'lucide-react';

import { SlideIn } from '@components/ui/transition';
import { Stack } from '@components/ui/layout';
import { PlayerCard } from './PlayerCard';
import { RoundsWon } from './RoundsWon';

import { Player } from '@features/players/types';

import mascot3D from '@assets/images/3d-mascot.jpg';
import birder3D from '@assets/images/3d-bird.jpg';

type PlayerScoreProps = {
  playerName: Player['name'];
  playerSymbol: Player['symbol'];
};

export const PlayerScore = ({
  playerName,
  playerSymbol,
}: PlayerScoreProps) => {
  const isPlayerX = playerSymbol === 'X';
  const playerAvatar = isPlayerX ? mascot3D : birder3D;
  const symbolIcon = isPlayerX ? (
    <X className="icon-rg stroke-[8] drop-shadow-lg" />
  ) : (
    <O className="icon-rg rounded-full stroke-[8] drop-shadow-lg" />
  );

  return (
    <SlideIn
      direction="bottom"
      offsetY={60}
      slideOnMount
      withFade
      transition={{
        duration: 800,
        timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      }}
    >
      <Stack direction="col" justify="between">
        <PlayerCard
          playerName={playerName}
          playerAvatar={playerAvatar}
          symbolIcon={symbolIcon}
        />
        <RoundsWon rounds={1} />
      </Stack>
    </SlideIn>
  );
};
