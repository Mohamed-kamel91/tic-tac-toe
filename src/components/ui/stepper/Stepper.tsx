import React from 'react';

import { StepperProvider } from './stepper-context';

type StepperProps = {
  activeStep?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stepper = ({
  activeStep = 0,
  className,
  children,
}: StepperProps) => {
  const steps = React.Children.map(children, (child, index) => {
    // Ensure child is a valid ReactElement
    if (React.isValidElement<{ index: number }>(child)) {
      return React.cloneElement(child, {
        index,
      });
    }
    return child;
  });

  return (
    <StepperProvider activeStep={activeStep}>
      <div className={className}>{steps}</div>
    </StepperProvider>
  );
};
