import { SlideIn } from '@components/ui/transition';
import { useIsMounted } from '@hooks/useIsMounted';
import { cn } from '@utils';

export const ScoreBoard = () => {
  const isMounted = useIsMounted();

  return (
    <SlideIn
      direction="bottom"
      offsetY={50}
      slideOnMount
      withFade
      transition={{
        duration: 800,
        timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      }}
    >
      <div
        className={cn(
          'flex items-center justify-between',
          'my-11',
          isMounted ? 'opacity-1' : 'opacity-0'
        )}
      >
        <div className="text-[35px] font-medium">
          <div>Mohamed</div>
          <div className="text-center font-light">1</div>
        </div>

        <div
          className={cn(
            'flex items-center justify-center',
            'p-[5px_10px]',
            'text-white text-[14px]',
            // 'h-[90px] w-[90px]',
            'rounded-full bg-primary'
          )}
        >
          Round: 1
        </div>
        
        <div className="text-[35px] font-medium">
          <div>Omar</div>
          <div className="text-center font-light">0</div>
        </div>
      </div>
    </SlideIn>
  );
};
