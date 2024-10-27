import { Swords } from 'lucide-react';

import { SlideIn } from '@components/ui/transition';
import { cn } from '@utils';

export const GameRules = () => {
  return (
    <div className="h-[221px] p-5 text-white">
      <SlideIn
        direction="bottom"
        offsetY={30}
        slideOnMount
        withFade
        transition={{
          duration: 800,
          delay: 1300,
          timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      >
        <p
          className={cn(
            'flex items-center gap-[6px]',
            'mb-4 w-max p-[8px_14px]',
            'text-[14px] text-inherit',
            'rounded-full bg-black'
          )}
        >
          <Swords className="icon-rg" />
          Rules
        </p>
      </SlideIn>

      <SlideIn
        direction="bottom"
        offsetY={30}
        slideOnMount
        withFade
        transition={{
          duration: 800,
          delay: 1500,
          timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      >
        <p className="font-light italic text-inherit">
          <span className="mb-2 block">
            Each player takes turns marking an empty square with
            their respective symbol—Player 1 uses "X" and Player
            2 uses "O."
          </span>
          <span className="block">
            The objective is to be the first player to align
            three of their symbols either horizontally,
            vertically, or diagonally.
          </span>
        </p>
      </SlideIn>
    </div>
  );
};
