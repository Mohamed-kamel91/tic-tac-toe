import { Swords } from 'lucide-react';

import { SlideIn } from '@components/ui/transition';
import { Button } from '@components/ui/buttons';
import {
  Dialog,
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialogue';

import { useDisclosure } from '@hooks';

import { cn } from '@utils';

type GameRulesDialogProps =
  React.HTMLAttributes<HTMLButtonElement> & {};

export const GameRulesDialog = ({
  className,
}: GameRulesDialogProps) => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
    <SlideIn
        direction="right"
        offsetX={-20}
        slideOnMount
        withFade
        transition={{
          duration: 600,
          delay: 700,
          timingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      >
        <Button
          className={cn(
            'group gap-0 overflow-hidden',
            'h-16 w-16 px-5 hover:w-28',
            'shadow-sm',
            'transition-all duration-200 ease-out',
            className
          )}
          variant="secondary"
          icon={<Swords />}
          aria-controls="dialog"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={open}
        >
          <span
            className={cn(
              'absolute ml-2 group-hover:static',
              'opacity-0 group-hover:opacity-100',
              '-translate-x-1 group-hover:translate-x-0',
              'transition-transform duration-200 ease-out'
            )}
          >
            Rules
          </span>
        </Button>
      </SlideIn>

      <Dialog isOpen={isOpen} onClose={close}>
        <DialogContent className="slide-in">
          <DialogHeader>
            <DialogTitle icon={<Swords strokeWidth={2.4} />}>
              Rules
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p className="">
              <span className="mb-2 block">
                Each player takes turns marking an empty square
                with their respective symbol—Player 1 uses "X"
                and Player 2 uses "O."
              </span>
              <span className="block">
                The objective is to be the first player to align
                three of their symbols either horizontally,
                vertically, or diagonally.
              </span>
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger>
              <Button variant="primary" size="lg">
                Got it !
              </Button>
            </DialogActionTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
