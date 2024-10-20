import {
  ErrorFallback,
  ErrorFallbackProps,
} from './ErrorFallback';
import { cn } from '@utils';
import { Button } from '../buttons';

type CompErrorFallbackProps = { className?: string } & Pick<
  ErrorFallbackProps,
  'error' | 'resetErrorBoundary'
>;

export const CompErrorFallback = ({
  error,
  resetErrorBoundary,
}: CompErrorFallbackProps) => {
  return (
    <ErrorFallback>
      <h2 className="mb-[20px] font-medium text-white">
        {error?.message ?? 'Ooops, something went wrong!'}
      </h2>

      <Button
        size="sm"
        variant='secondary'
        className={cn('rounded-full')}
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </ErrorFallback>
  );
};
