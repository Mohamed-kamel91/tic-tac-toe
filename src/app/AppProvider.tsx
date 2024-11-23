import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { RootErrorFallback } from '@components/ui/errors';
import { store } from '@store';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <HelmetProvider>{children}</HelmetProvider>
      </ErrorBoundary>
    </ReduxProvider>
  );
};
