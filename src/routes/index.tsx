import { createBrowserRouter } from 'react-router-dom';

import { RootErrorFallback } from '@components/ui/errors';
import { Game } from './main-game/MainGame';

const BASE_NAME =
  import.meta.env.MODE === 'production' ? '/tic-tac-toe' : '/';

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
  {
    basename: BASE_NAME,
  }
);
