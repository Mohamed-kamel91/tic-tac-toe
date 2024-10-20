import { cn } from '@utils';

export type ErrorFallbackProps = {
  className?: string;
  error?: Error;
  resetErrorBoundary?: (...args: any[]) => void;
  children: React.ReactNode;
};

export const ErrorFallback = ({
  className = '',
  children,
}: ErrorFallbackProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        className
      )}
      role="alert"
    >
      {children}
    </div>
  );
};
