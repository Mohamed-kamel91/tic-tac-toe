import { Stack } from '@components/ui/layout';
import { SlideIn } from '@components/ui/transition';

import { cn } from '@utils';
import { selectRounds } from '../slices/scoreSLice';
import { useSelector } from '@store';

export const RoundsTracking = () => {
  const rounds = useSelector(selectRounds);

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
          'text-center text-[14px] font-medium text-black',
          'overflow-hidden rounded-full bg-amber-100 shadow-md'
        )}
      >
        <Stack
          justify="center"
          align="center"
          className="px-5 py-4"
        >
          Round:
          <span className="w-2" />
          <span className="text-[25px] leading-8">{rounds}</span>
        </Stack>
      </div>
    </SlideIn>
  );
};
