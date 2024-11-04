import React, { forwardRef, HTMLAttributes } from 'react';
import { X } from 'lucide-react';

import { ReactPortal } from '../react-portal';
import { Button, IconButton } from '../buttons';
import { Stack, StackProps } from '../layout';

import {
  DialogProvider,
  useDialogContext,
} from './dialog-context';
import { cn } from '@utils';

type BaseDialogProps = HTMLAttributes<HTMLDivElement>;
type DialogProps = {
  id?: string;
  placement?: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
};
type DialogContentProps = BaseDialogProps & {};
type DialogTitleProps = BaseDialogProps & { icon?: JSX.Element };
type DialogHeaderProps = BaseDialogProps & {};
type DialogBodyProps = BaseDialogProps & {};
type DialogFooterProps = BaseDialogProps & {};
type DialogTriggerProps = {
  children: React.ReactNode;
};

const Dialog = ({
  placement = 'center',
  children,
}: DialogProps) => {
  return (
    <DialogProvider placement={placement}>
      {children}
    </DialogProvider>
  );
};

const DialogOverlay = () => {
  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-overlay',
        'h-screen w-screen',
        'fade-in bg-overlay'
      )}
    />
  );
};

const DialogContent = forwardRef<
  HTMLDivElement,
  DialogContentProps
>(({ className, children }, ref) => {
  const { isOpen, placement, closeDialog } = useDialogContext();

  const align: Record<string, StackProps['align']> = {
    top: 'start',
    center: 'center',
    bottom: 'end',
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal wrapperId="modal-root">
      <DialogOverlay />

      <Stack
        justify="center"
        align={align[placement]}
        className={cn(
          'fixed left-0 top-0 z-dialog',
          'h-full w-full p-10'
        )}
        onClick={closeDialog}
      >
        <div
          ref={ref}
          className={cn(
            'relative flex flex-col',
            'min-h-[220px] w-[450px]',
            'rounded-3xl bg-white text-black shadow-dialog',
            className
          )}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          <DialogCloseTrigger />
          {children}
        </div>
      </Stack>
    </ReactPortal>
  );
});
DialogContent.displayName = 'DialogContent';

const DialogTitle = ({ icon, children }: DialogTitleProps) => {
  return (
    <Stack align="center" gap={10}>
      {icon}
      <h2 className="text-lg font-semibold">{children}</h2>
    </Stack>
  );
};

const DialogHeader = ({
  className,
  children,
  ...props
}: DialogHeaderProps) => {
  return (
    <div className={cn('px-5 pb-2 pt-5', className)} {...props}>
      {children}
    </div>
  );
};

const DialogBody = ({
  className,
  children,
  ...props
}: DialogBodyProps) => {
  return (
    <div className={cn('grow px-5 py-3', className)} {...props}>
      {children}
    </div>
  );
};

const DialogFooter = ({
  className,
  children,
  ...props
}: DialogFooterProps) => {
  return (
    <div
      className={cn(
        'flex justify-end gap-2 px-5 pb-5 pt-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogCloseTrigger = () => {
  const { closeDialog } = useDialogContext();

  return (
    <IconButton
      size="md"
      className="absolute right-3 top-3"
      aria-label="close"
      onClick={closeDialog}
    >
      <X className="icon-sm" />
    </IconButton>
  );
};

const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const { isOpen, openDialog } = useDialogContext();

  if (
    !React.isValidElement<{
      onClick: typeof openDialog;
      'aria-expanded': React.AriaAttributes['aria-expanded'];
      'aria-haspopup': React.AriaAttributes['aria-haspopup'];
    }>(children)
  ) {
    console.error(
      'DialogTrigger expects a single React element as a child.'
    );
    return null;
  }

  return React.cloneElement(children, {
    onClick: openDialog,
    'aria-haspopup': 'dialog',
    'aria-expanded': isOpen,
  });
};

const DialogActionTrigger = ({
  children,
}: DialogTriggerProps) => {
  const { closeDialog } = useDialogContext();

  const styles = 'min-w-[90px]';

  if (
    !React.isValidElement<{
      className: string;
      onClick: typeof closeDialog;
      'aria-label': React.AriaAttributes['aria-label'];
    }>(children)
  ) {
    return (
      <Button
        variant="outline"
        size="lg"
        className={styles}
        onClick={closeDialog}
        aria-label="Cancel and close dialog"
      >
        {children}
      </Button>
    );
  }

  return React.cloneElement(children, {
    className: styles,
    onClick: closeDialog,
    'aria-label': 'Cancel and close dialog',
  });
};

export {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTrigger,
  DialogActionTrigger,
};
