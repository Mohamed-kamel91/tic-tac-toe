import { Button } from '@components/ui/buttons';

import { cn } from '@utils';

type StartButtonProps = {
  startGame: () => void;
};

export const StartButton = ({ startGame }: StartButtonProps) => {
  return (
    <Button
      className={cn(
        'mt-[20px] w-[120px] self-center hover:scale-95',
        'text-[16px]',
        'rounded-full border-2 border-white text-white'
      )}
      variant="default"
      onClick={startGame}
    >
      Start
    </Button>
  );
};
