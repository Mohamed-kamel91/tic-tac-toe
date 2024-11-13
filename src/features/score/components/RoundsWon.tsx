import { cn } from '@utils';

type RoundsWonProps = {
  rounds: number;
};

export const RoundsWon = ({ rounds }: RoundsWonProps) => (
  <div
    className={cn(
      'mt-5 p-2',
      'text-center text-[14px] font-medium text-primary',
      'rounded-full border-2 border-primary'
    )}
  >
    Score: {rounds}
  </div>
);
