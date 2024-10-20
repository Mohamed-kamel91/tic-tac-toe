import { createBrowserRouter } from 'react-router-dom';
import { Game } from '@routes';
import { RootErrorFallback } from '@components/ui/errors';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Game,
    errorElement: <RootErrorFallback />,
    children: [],
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('../routes/NotFound');
      return { Component: NotFound };
    },
  },
]);
