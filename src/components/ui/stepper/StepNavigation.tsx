import { cn } from '@utils';

type StepNavigationProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const StepNavigation = ({
  className,
  children,
}: StepNavigationProps) => {
  return (
    <div className={cn('mt-5 flex items-center', className)}>
      {children}
    </div>
  );
};
