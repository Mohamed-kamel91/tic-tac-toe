import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { getLocalStorage } from '@utils/localStorage';

export type GameState = {
  isStarted: boolean;
  isPlaying: boolean;
};

const initialState: GameState = {
  isStarted: false,
  isPlaying: getLocalStorage('isPlaying') || false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isStarted = true;
    },
    resetStart: (state) => {
      state.isStarted = false;
    },
    playGame: (state) => {
      state.isPlaying = true;
    },
  },
});

// Action creators
export const { startGame, resetStart, playGame } =
  gameSlice.actions;

// Selector functions
export const selectIsStarted = (state: RootState) =>
  state.game.isStarted;

export const selectIsPlaying = (state: RootState) =>
  state.game.isPlaying;

export default gameSlice.reducer;
