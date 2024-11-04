import { Stack } from '../layout';

export type ErrorFallbackProps = {
  className?: string;
  error?: Error;
  resetErrorBoundary?: (...args: any[]) => void;
  children: React.ReactNode;
};

export const ErrorFallback = ({
  className,
  children,
}: ErrorFallbackProps) => {
  return (
    <Stack
      direction="col"
      justify="center"
      align="center"
      className={className}
      role="alert"
    >
      {children}
    </Stack>
  );
};
