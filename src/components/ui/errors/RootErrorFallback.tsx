import { RotateCcw } from 'lucide-react';

import {
  ErrorFallback,
  ErrorFallbackProps,
} from './ErrorFallback';
import { cn } from '@utils';
import { Button } from '../buttons';

type RootErrorFallbackProps = Pick<
  ErrorFallbackProps,
  'error' | 'resetErrorBoundary'
>;

export const RootErrorFallback = ({
  error,
}: RootErrorFallbackProps) => {
  return (
    <ErrorFallback className="h-screen w-screen bg-orange-400">
      <h2 className="mb-[20px] text-[20px] font-medium text-white">
        {error?.message ?? 'Ooops, something went wrong!'}
      </h2>

      <Button
        size="md"
        variant="secondary"
        className={cn('rounded-full')}
        icon={<RotateCcw className="icon-rg" />}
        onClick={() => window.location.reload()}
      >
        Refresh
      </Button>
    </ErrorFallback>
  );
};
