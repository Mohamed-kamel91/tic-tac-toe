import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import gameSlice from '@store/slices/gameSlice';
import playersSlice from '@features/players/slices/playersSlice';
import { localStorageMiddleware } from './middleweares/localStorageMiddleware';

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;

// Store
export const store = configureStore({
  reducer: {
    game: gameSlice,
    players: playersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Use throughout your app instead of plain useDispatch and useSelector
export const useDispatch =
  useReduxDispatch.withTypes<AppDispatch>();

export const useSelector =
  useReduxSelector.withTypes<RootState>();
