import { DoorClosed as ExitIcon } from 'lucide-react';

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

import { useDispatch } from '@store';
import { exitGame } from '../slices/gameSlice';

import { cn } from '@utils';
import { useDisclosure } from '@hooks';

type ExitGameProps =
  {} & React.HTMLAttributes<HTMLButtonElement>;

export const ExitGame = ({ className }: ExitGameProps) => {
  const { isOpen, open, close } = useDisclosure();

  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(exitGame());
  };

  return (
    <>
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

            <Button
              variant="primary"
              size="lg"
              className="min-w-[90px]"
              onClick={handleExit}
            >
              Exit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
