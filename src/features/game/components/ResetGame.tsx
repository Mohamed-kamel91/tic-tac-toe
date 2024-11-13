import { RotateCcw as ResetIcon } from 'lucide-react';

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

import { cn } from '@utils';
import { useDispatch } from '@store';
import { resetBoard } from '@features/board/slices/boardSlice';
import { resetScore } from '@features/score/slices/scoreSLice';
import { useDisclosure } from '@hooks';

type ResetGameProps =
  {} & React.HTMLAttributes<HTMLButtonElement>;

export const ResetGame = ({ className }: ResetGameProps) => {
  const { isOpen, open, close } = useDisclosure();
  
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetBoard());
    dispatch(resetScore());
    close();
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
        icon={<ResetIcon />}
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
          Reset
        </span>
      </Button>

      <Dialog isOpen={isOpen} onClose={close}>
        <DialogContent className="slide-in">
          <DialogHeader>
            <DialogTitle icon={<ResetIcon strokeWidth={2.4} />}>
              Reset Game
            </DialogTitle>
          </DialogHeader>
          <DialogBody>Do you want to reset the game?</DialogBody>
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
              variant="danger"
              size="lg"
              className="min-w-[90px]"
              onClick={handleReset}
            >
              Reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
