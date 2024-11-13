import { SlideIn } from '@components/ui/transition';
import { Stack } from '@components/ui/layout';
import { PlayerCard } from '../../players/components/PlayerCard';
import { RoundsWon } from './RoundsWon';

import { useSelector } from '@store';
import { selectScore } from '../slices/scoreSLice';

import { Player } from '@features/players/types';

type ScoreTrackingProps = {
  player: Player['symbol'];
};

export const ScoreTracking = ({
  player,
}: ScoreTrackingProps) => {
  const score = useSelector(selectScore);

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
        <PlayerCard player={player} />
        <RoundsWon rounds={score[player]} />
      </Stack>
    </SlideIn>
  );
};
