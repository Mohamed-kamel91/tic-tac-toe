import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@store';

import { Cells, PlayerTurn, CellSymbol } from '../types';

type SetCellPayload = {
  cell: number;
  symbol: CellSymbol;
};

export type BoardState = {
  playerTurn: PlayerTurn;
  cells: Cells;
  winner: PlayerTurn | null;
  draw: boolean;
};

const initialState: BoardState = {
  playerTurn: 'X',
  cells: Array(9).fill(null),
  winner: null,
  draw: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    switchTurn: (state) => {
      state.playerTurn = state.playerTurn === 'X' ? 'O' : 'X';
    },
    setCell: (state, action: PayloadAction<SetCellPayload>) => {
      const { cell, symbol } = action.payload;
      state.cells[cell] = symbol;
    },
    setWinner: (state, action: PayloadAction<PlayerTurn>) => {
      state.winner = action.payload;
    },
    setDraw: (state) => {
      state.draw = true;
    },
    resetBoard: () => initialState,
  },
});

// Action creators
export const {
  switchTurn,
  setCell,
  setWinner,
  setDraw,
  resetBoard,
} = boardSlice.actions;

// Selector functions
export const selectPlayerTurn = (state: RootState) =>
  state.board.playerTurn;

export const selectCells = (state: RootState) =>
  state.board.cells;

export const selectIsWinner = (state: RootState) =>
  !!state.board.winner;

export const selectIsDraw = (state: RootState) =>
  state.board.draw;

export default boardSlice.reducer;
