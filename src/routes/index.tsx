import { createBrowserRouter } from 'react-router-dom';

import { RootErrorFallback } from '@components/ui/errors';
import { Game } from './main-game/MainGame';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Game,
      errorElement: <RootErrorFallback />,
      children: [],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFound } = await import('./NotFound');
        return { Component: NotFound };
      },
    },
  ],
);
