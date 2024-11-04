import { RotateCcw } from 'lucide-react';

import {
  ErrorFallback,
  ErrorFallbackProps,
} from './ErrorFallback';
import { Button } from '../buttons';

type RootErrorFallbackProps = Pick<
  ErrorFallbackProps,
  'error' | 'resetErrorBoundary'
>;

export const RootErrorFallback = ({
  error,
}: RootErrorFallbackProps) => {
  return (
    <ErrorFallback className="h-screen w-screen bg-blue-light">
      <h2 className="mb-[20px] text-[20px] font-medium text-black">
        {error?.message ?? 'Ooops, something went wrong!'}
      </h2>

      <Button
        size="lg"
        variant="primary"
        icon={<RotateCcw className="icon-rg" />}
        onClick={() => window.location.reload()}
      >
        Refresh
      </Button>
    </ErrorFallback>
  );
};
