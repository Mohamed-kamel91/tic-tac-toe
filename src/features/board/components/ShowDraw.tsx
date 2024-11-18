import { ReactPortal } from '@components/ui/react-portal';
import { DelayedMount } from '@components/ui/delayed-mount';
import { Stack } from '@components/ui/layout';
import { Img } from '@components/ui/image';
import { ResetGame } from '@features/game/components/ResetGame';
import { NextRound } from '@features/score/components/NextRound';

import { cn } from '@utils';

import scale from '@assets/images/scale.png';

type ShowDrawProps = {
  draw: boolean;
};

export const ShowDraw = ({ draw }: ShowDrawProps) => {
  if (!draw) {
    return null;
  }

  return (
    <DelayedMount delay={400}>
      <ReactPortal wrapperId="modal-root">
        <div
          className={cn(
            'fixed left-0 top-0 z-overlay',
            'flex items-center justify-center',
            'h-screen w-screen p-10',
            'fade-in bg-overlay'
          )}
        >
          <Stack
            className={cn(
              'relative',
              'min-h-[320px] w-full max-w-[275px] p-8',
              'slide-in rounded-[50px] bg-white'
            )}
            direction="col"
            align="center"
            justify="center"
          >
            <div>
              <Img src={scale} alt="Draw Scale" />
            </div>

            <p
              className={cn(
                'text-center text-[20px] font-semibold',
                'my-5'
              )}
            >
              It's draw !
            </p>
            <ResetGame
              className="mb-2 h-[60px] w-full"
              variant="outline"
            />
            <NextRound className="h-[60px] w-full" />
          </Stack>
        </div>
      </ReactPortal>
    </DelayedMount>
  );
};
