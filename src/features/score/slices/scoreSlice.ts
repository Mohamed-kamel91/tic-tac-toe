import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

type PlayerScore = {
  X: number;
  O: number;
};

export type ScoreState = {
  rounds: number;
  score: PlayerScore;
};

const initialState: ScoreState = {
  rounds: 1,
  score: {
    X: 0,
    O: 0,
  },
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementRounds: (state) => {
      state.rounds += 1;
    },
    incrementScore: (
      state,
      action: PayloadAction<'X' | 'O'>
    ) => {
      const player = action.payload;
      state.score[player] += 1;
    },
    resetScore: () => initialState,
  },
});

// Action creators
export const { incrementRounds, incrementScore, resetScore } =
  scoreSlice.actions;

// Selector functions
export const selectXscore = (state: RootState) =>
  state.score.score.X;

export const selectOscore = (state: RootState) =>
  state.score.score.O;

export const selectScore = (state: RootState) =>
  state.score.score;

export const selectRounds = (state: RootState) =>
  state.score.rounds;

export default scoreSlice.reducer;
