import { DoorClosed as ExitIcon } from 'lucide-react';

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
} from '@components/ui/dialogue/Dialog';
import { ExitGame } from './ExitGame';

import { useDisclosure } from '@hooks';

import { cn } from '@utils';

type ExitGameDialogProps =
  React.HTMLAttributes<HTMLButtonElement> & {};

export const ExitGameDialog = ({
  className,
}: ExitGameDialogProps) => {
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
          delay: 1000,
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
          icon={<ExitIcon />}
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
            Exit
          </span>
        </Button>
      </SlideIn>

      <Dialog isOpen={isOpen} onClose={close}>
        <DialogContent className="slide-in">
          <DialogHeader>
            <DialogTitle icon={<ExitIcon strokeWidth={2.4} />}>
              Exit Game
            </DialogTitle>
          </DialogHeader>
          <DialogBody>Do you want to exit the game?</DialogBody>
          <DialogFooter>
            <DialogActionTrigger>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[90px]"
              >
                Cancel
              </Button>
            </DialogActionTrigger>

            <ExitGame />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};