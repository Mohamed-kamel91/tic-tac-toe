import { useStepperContext } from './stepper-context';
import { cn } from '@utils';

type StepProps = {
  index?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Step = ({
  index,
  className,
  children,
  ...props
}: StepProps) => {
  const stepperContext = useStepperContext();

  if (stepperContext?.activeStep === index) {
    return (
      <div className={cn('relative', className)} {...props}>
        {children}
      </div>
    );
  }

  return null;
};
