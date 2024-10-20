import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

// stepper context
const StepperContext = createContext<{
  activeStep: number;
} | null>(null);

// Stepper context hook
export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error(
      'Component must be used within a StepperProvider'
    );
  }

  return context;
};

// Context provider
type StepperProviderProps = {
  activeStep?: number;
  children: React.ReactNode;
};

export const StepperProvider = ({
  activeStep = 0,
  children,
}: StepperProviderProps) => {
  const contextValue = useMemo(
    () => ({ activeStep }),
    [activeStep]
  );

  return (
    <StepperContext.Provider value={contextValue}>
      {children}
    </StepperContext.Provider>
  );
};
