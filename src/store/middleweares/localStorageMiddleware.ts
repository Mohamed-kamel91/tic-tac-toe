import { Middleware } from '@reduxjs/toolkit';

import { RootState } from '@store';
import { playGame } from '@features/game/slices/gameSlice';
import { setLocalStorage } from '@utils/localStorage';

export const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);

    const { players, game }: RootState = storeAPI.getState();

    const { playerOne, playerTwo } = players;
    const { isPlaying } = game;

    if (playGame.match(action)) {
      setLocalStorage('players', {
        playerOne,
        playerTwo,
      });
      setLocalStorage('isPlaying', isPlaying);
    }

    return result;
  };
