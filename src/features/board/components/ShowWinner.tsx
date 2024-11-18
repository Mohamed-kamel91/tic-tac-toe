import { ReactPortal } from '@components/ui/react-portal';
import { DelayedMount } from '@components/ui/delayed-mount';
import { Stack } from '@components/ui/layout';
import { Img } from '@components/ui/image';
import { AvatarImage } from '@features/players/components/PlayerCard';
import { ResetGameAction } from '@features/game/components/ResetGameAction';
import { NextRound } from '@features/score/components/NextRound';

import { useSelector } from '@store';
import { selectPlayers } from '@features/players/slices/playersSlice';

import { cn } from '@utils';
import { Winner } from '../types';

import mascot3D from '@assets/images/3d-mascot.jpg';
import birder3D from '@assets/images/3d-bird.jpg';
import crown from '@assets/images/crown.png';

type ShowWinnerProps = {
  winner: Winner;
};

export const ShowWinner = ({ winner }: ShowWinnerProps) => {
  const { playerOne, playerTwo } = useSelector(selectPlayers);

  if (!winner) return null;

  const isWinnerX = winner === 'X';
  const player = isWinnerX ? playerOne : playerTwo;
  const avatar = isWinnerX ? mascot3D : birder3D;

  return (
    <DelayedMount delay={400}>
      <ReactPortal wrapperId="modal-root">
        <div
          className={cn(
            'fixed left-0 top-0 z-overlay',
            'flex items-center justify-center',
            'h-screen w-screen p-10',
            'fade-in bg-overlay'
          )}
        >
          <Stack
            className={cn(
              'relative',
              'min-h-[320px] w-full max-w-[275px] p-8',
              'slide-in rounded-[50px] bg-white'
            )}
            direction="col"
            align="center"
            justify="center"
          >
            <WinnerAvatar avatar={avatar} />
            <WinnerSummary winnerName={player.name} />
          </Stack>
        </div>
      </ReactPortal>
    </DelayedMount>
  );
};

const WinnerAvatar = ({ avatar }: { avatar: string }) => (
  <div
    className={cn(
      'absolute left-1/2 top-0 z-10',
      '-translate-x-1/2 -translate-y-1/3'
    )}
  >
    <div
      className={cn(
        'absolute bottom-[calc(100%-35px)] left-1/2 -z-10',
        'h-20 w-20',
        '-translate-x-1/2'
      )}
    >
      <Img src={crown} alt="Winner crown" />
    </div>
    <AvatarImage src={avatar} w={120} h={120} />
  </div>
);

const WinnerSummary = ({
  winnerName,
}: {
  winnerName: string;
}) => (
  <Stack className="w-full grow" justify="end" direction="col">
    <p
      className={cn(
        'text-center text-[20px] font-semibold',
        'mb-5'
      )}
    >
      {`${winnerName} is the winner`}
    </p>
    <div className="flex flex-col">
      <ResetGameAction
        className="mb-2 h-[60px] w-full"
        variant="outline"
      />
      <NextRound className="h-[60px] w-full" />
    </div>
  </Stack>
);
