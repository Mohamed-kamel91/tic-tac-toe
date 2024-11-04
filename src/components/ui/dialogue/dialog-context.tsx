import { useDisclosure, useScrollLock } from '@hooks';
import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

// Dialog context
const DialogContext = createContext<{
  isOpen: boolean;
  placement: 'top' | 'bottom' | 'center';
  openDialog: () => void;
  closeDialog: () => void;
} | null>(null);

// Dialog hook
export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      'Component must be used within a DialogProvider'
    );
  }

  return context;
};

// Context provider
type DialogProviderProps = {
  open?: boolean;
  placement?: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
};

export const DialogProvider = ({
  open = false,
  placement = 'center',
  children,
}: DialogProviderProps) => {
  const {
    isOpen,
    close: closeDialog,
    open: openDialog,
  } = useDisclosure(open);

  // Disable scroll when dialog is open 
  useScrollLock({ lock: isOpen });

  const contextValue = useMemo(
    () => ({ isOpen, placement, closeDialog, openDialog }),
    [isOpen, placement, closeDialog, openDialog]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};
