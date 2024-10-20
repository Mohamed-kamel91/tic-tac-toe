import { useCallback, useState } from 'react';

export const useStepper = (initialStep: number = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    activeStep,
    handlePrev,
    handleNext,
    handleReset,
  };
};
