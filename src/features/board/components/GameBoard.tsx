import { ReactPortal } from '@components/ui/react-portal';
import { SlideIn } from '@components/ui/transition';
import { Cell } from './Cell';

import { useBoard } from '../hooks/useBoard';

import { cn } from '@utils';

export const GameBoard = () => {
  const {
    cells,
    isWinner,
    winningPath,
    errorMsg,
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
                onSelect={
                  !isWinner
                    ? () => handleSelect(index)
                    : undefined
                }
              />
            );
          })}
        </div>
      </SlideIn>

      {errorMsg && (
        <ReactPortal wrapperId="toast-root">
          <div
            className="fixed bottom-5 left-1/2 -translate-x-1/2"
            role="alert"
            aria-live="assertive"
          >
            <div
              className={cn(
                'p-[10px_20px]',
                'rounded-full border border-primary bg-white shadow-md',
                'slide-in'
              )}
            >
              <p className="text-[14px] font-medium text-primary">
                {errorMsg}
              </p>
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};
