import { Circle as O, X } from 'lucide-react';

import { SlideIn } from '@components/ui/transition';
import { cn } from '@utils';
import { Stack } from '@components/ui/layout';

export const GameBoard = () => {
  return (
    <SlideIn
      direction="bottom"
      offsetY={40}
      slideOnMount
      withFade
      transition={{
        duration: 600,
        delay: 330,
        timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      }}
    >
      <div
        className={cn(
          'grid grid-cols-[repeat(3,110px)] grid-rows-[repeat(3,110px)]',
          'content-center justify-center gap-2',
          'mx-auto w-[max-content] p-3',
          'rounded-[40px] border-[3px] border-dashed border-primary bg-white shadow-2xl'
        )}
      >
        <Square id={1} value="X" />
        <Square id={2} value="" />
        <Square id={3} value="O" />
        <Square id={4} value="" />
        <Square id={5} value="O" />
        <Square id={6} value="X" />
        <Square id={7} value="O" />
        <Square id={8} value="X" />
        <Square id={9} value="" />
      </div>
    </SlideIn>
  );
};

type SquareProps = {
  id: number;
  value: 'X' | 'O' | '';
};

export const Square = ({ value }: SquareProps) => {
  const sqVal =
    value === 'X' ? (
      <X className="h-[50px] w-[50px] stroke-[5px]" />
    ) : value === 'O' ? (
      <O className="h-[50px] w-[50px] rounded-full stroke-[5px]" />
    ) : null;

  return (
    <Stack
      justify="center"
      align="center"
      className={cn('rounded-[24px] bg-primary text-white')}
    >
      {sqVal}
    </Stack>
  );
};
