import { Joystick } from 'lucide-react';

import { Button } from '@components/ui/buttons';
import { cn } from '@utils';
import { useDispatch } from '@store';
import { playGame } from '@store/slices/gameSlice';

type PlayButtonProps =
  {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PlayButton = ({
  disabled,
  ...props
}: PlayButtonProps) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(playGame());
  };

  return (
    <Button
      size="lg"
      variant="primary"
      className={cn('mt-[12px] h-[64px] w-full', 'rounded-full')}
      icon={<Joystick className="icon-rg" />}
      onClick={handlePlay}
      {...props}
    >
      Play
    </Button>
  );
};
