import { Joystick } from 'lucide-react';

import { Button } from '@components/ui/buttons';
import { cn } from '@utils';

type PlayButtonProps =
  {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PlayButton = ({
  disabled,
  ...props
}: PlayButtonProps) => {
  return (
    <Button
      size="lg"
      variant="primary"
      className={cn('mt-[12px] h-[64px] w-full', 'rounded-full')}
      icon={<Joystick className="icon-rg" />}
      {...props}
    >
      Play
    </Button>
  );
};
