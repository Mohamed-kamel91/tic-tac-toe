import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

import { useScrollLock } from '@hooks';

// Dialog context
const DialogContext = createContext<{
  isOpen: boolean;
  placement: 'top' | 'bottom' | 'center';
  onClose: () => void;
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
  isOpen: boolean;
  onClose: () => void;
  placement?: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
};

export const DialogProvider = ({
  isOpen,
  onClose,
  placement = 'center',
  children,
}: DialogProviderProps) => {
  // Disable scroll when dialog is open
  useScrollLock({ lock: isOpen });

  const contextValue = useMemo(
    () => ({ isOpen, placement, onClose }),
    [isOpen, placement, onClose]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};
