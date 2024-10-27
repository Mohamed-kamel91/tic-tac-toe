import { SlideIn } from '@components/ui/transition';
import { cn } from '@utils';

export const GameBoard = () => {
  return (
    <SlideIn
      direction="bottom"
      offsetY={50}
      slideOnMount
      withFade
      transition={{
        duration: 600,
        delay: 300,
        timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      }}
    >
      <div
        className={cn(
          'grid grid-cols-[repeat(3,120px)] grid-rows-[repeat(3,120px)]',
          'content-center justify-center gap-2',
          'mx-auto w-[max-content]',
          'rounded-2xl bg-primary p-2'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          1
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          2
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          3
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          4
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          5
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          6
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          7
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          8
        </div>
        <div
          className={cn(
            'flex items-center justify-center',
            'rounded-xl bg-gray-50'
          )}
        >
          9
        </div>
      </div>
    </SlideIn>
  );
};
