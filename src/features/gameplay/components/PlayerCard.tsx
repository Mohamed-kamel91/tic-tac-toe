import { Img } from '@components/ui/image';
import { Stack } from '@components/ui/layout';

import { cn } from '@utils';

type PlayerCardProps = {
  playerName: string;
  playerAvatar: string;
  symbolIcon: React.ReactNode;
};

export const PlayerCard = ({
  playerName,
  playerAvatar,
  symbolIcon,
}: PlayerCardProps) => (
  <Stack
    direction="col"
    justify="end"
    className={cn(
      'relative h-[160px] w-[170px] p-4',
      'rounded-[50px] border border-primary bg-white shadow-lg'
    )}
  >
    <AvatarImage src={playerAvatar} />
    <p className="mb-2 text-center text-[22px] font-medium text-slate-700">
      {playerName}
    </p>
    <SymbolBadge icon={symbolIcon} />
  </Stack>
);

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
