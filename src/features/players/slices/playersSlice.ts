import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@store';
import { getLocalStorage } from '@utils/localStorage';
import { Player } from '../types';

export type PlayersState = {
  playerOne: Player;
  playerTwo: Player;
};

const savedPlayers = getLocalStorage<PlayersState>('players');

const initialState: PlayersState = {
  playerOne: {
    name: savedPlayers?.playerOne.name || '',
    symbol: 'X',
  },
  playerTwo: {
    name: savedPlayers?.playerTwo.name || '',
    symbol: 'O',
  },
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayerOne: (
      state,
      action: PayloadAction<Player['name']>
    ) => {
      state.playerOne.name = action.payload;
    },
    addPlayerTwo: (
      state,
      action: PayloadAction<Player['name']>
    ) => {
      state.playerTwo.name = action.payload;
    },
  },
});

// Action creators
export const { addPlayerOne, addPlayerTwo } =
  playersSlice.actions;

// Selector functions
export const selectPlayers = (state: RootState) => state.players;

export default playersSlice.reducer;
