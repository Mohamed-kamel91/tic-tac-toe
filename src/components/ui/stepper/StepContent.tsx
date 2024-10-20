import { cn } from '@utils';

type StepContentProps = {} & React.HTMLAttributes<HTMLDivElement>;
 
export const StepContent = ({ 
  className, 
  children,  
}: StepContentProps) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
