import { Button } from '@components/ui/buttons';

import { cn } from '@utils';

type StartButtonProps = {
  startGame: () => void;
};

export const StartButton = ({ startGame }: StartButtonProps) => {
  return (
    <Button
      className={cn(
        'self-center',
        'mt-[20px] h-[64px] w-[120px] hover:w-[130px]',
        'border-2 border-white bg-primary text-white',
        'transition-all duration-100 ease-linear'
      )}
      variant="default"
      onClick={startGame}
    >
      Start
    </Button>
  );
};
