import { SlideIn } from '@components/ui/transition';
import { Cell } from './Cell';
import { ShowDraw } from './ShowDraw';
import { ShowWinner } from './ShowWinner';
import { InvalidCellError } from './InvalidCellError';

import { useBoard } from '../hooks/useBoard';

import { cn } from '@utils';

export const GameBoard = () => {
  const {
    cells,
    winner,
    draw,
    winningPath,
    invalidCell,
    handleSelect,
  } = useBoard();

  return (
    <>
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
          {cells.map((cell, index) => {
            return (
              <Cell
                key={index}
                value={cell}
                number={index}
                isWinningCell={!!winningPath?.includes(index)}
                onSelect={() => handleSelect(index)}
              />
            );
          })}
        </div>
      </SlideIn>

      {invalidCell && <InvalidCellError message={invalidCell} />}
      
      <ShowWinner winner={winner} />
          
      <ShowDraw draw={draw} />
    </>
  );
};
