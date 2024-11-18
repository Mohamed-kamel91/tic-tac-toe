import { Button } from '@components/ui/buttons';

import { useDispatch } from '@store';
import { resetBoard } from '@features/board/slices/boardSlice';
import { resetScore } from '@features/score/slices/scoreSlice';

import { cn } from '@utils';
import { ButtonProps } from '@components/ui/buttons/types';

type ResetGameProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonProps<'button'>['variant'];
  onClick?: () => void;
};

export const ResetGame = ({
  className,
  variant = 'danger',
  onClick,
}: ResetGameProps) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetBoard());
    dispatch(resetScore());
    onClick?.();
  };

  return (
    <Button
      variant={variant}
      size="lg"
      className={cn('min-w-[90px]', className)}
      onClick={handleReset}
    >
      Reset
    </Button>
  );
};
