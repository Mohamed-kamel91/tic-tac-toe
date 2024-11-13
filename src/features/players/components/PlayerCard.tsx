import { X, Circle as O } from 'lucide-react';

import { Img } from '@components/ui/image';
import { Stack } from '@components/ui/layout';
import { TurnIndicator } from '@features/board/components/TurnIndicator';

import { useSelector } from '@store';
import { selectPlayers } from '../slices/playersSlice';

import { cn } from '@utils';
import { Player } from '../types';

import mascot3D from '@assets/images/3d-mascot.jpg';
import birder3D from '@assets/images/3d-bird.jpg';

type PlayerCardProps = {
  player: Player['symbol'];
};

export const PlayerCard = ({ player }: PlayerCardProps) => {
  const { playerOne, playerTwo } = useSelector(selectPlayers);

  const isPlayerX = player === 'X';
  const name = isPlayerX ? playerOne.name : playerTwo.name;
  const avatar = isPlayerX ? mascot3D : birder3D;
  const symbol = isPlayerX ? (
    <X className="icon-rg drop-shadow-lg" strokeWidth={8} />
  ) : (
    <O
      className="icon-rg rounded-full drop-shadow-lg"
      strokeWidth={8}
    />
  );

  return (
    <Stack
      direction="col"
      justify="end"
      className={cn(
        'relative h-[160px] w-[170px] p-4',
        'rounded-[50px] border border-primary bg-white shadow-lg'
      )}
    >
      <TurnIndicator player={player} />
      <AvatarImage src={avatar} />
      <p
        className={cn(
          'mb-2',
          'text-center text-[22px] font-medium text-black'
        )}
      >
        {name}
      </p>
      <SymbolBadge icon={symbol} />
    </Stack>
  );
};

const AvatarImage = ({ src }: { src: string }) => (
  <div
    className={cn(
      'absolute left-1/2 top-0 overflow-hidden',
      'h-[80px] w-[80px]',
      'rounded-full border-4 border-white shadow-primary',
      '-translate-x-1/2 -translate-y-1/2'
    )}
  >
    <Img src={src} alt="3d icon avatar" objectFit="cover" />
  </div>
);

const SymbolBadge = ({ icon }: { icon: React.ReactNode }) => (
  <Stack
    justify="center"
    align="center"
    className={cn(
      'mx-auto w-[max-content] p-[10px_25px]',
      'rounded-full bg-primary text-white'
    )}
  >
    {icon}
  </Stack>
);
