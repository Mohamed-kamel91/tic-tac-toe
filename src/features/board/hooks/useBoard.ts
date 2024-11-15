import { useState } from 'react';

import { useDispatch, useSelector } from '@store';
import {
  selectBoard,
  setCell,
  setDraw,
  setWinner,
  switchTurn,
} from '../slices/boardSlice';

import { findWinningPath } from '../utils/board-utils';
import { Cell } from '../types';

export const useBoard = () => {
  const [invalidCell, setInvalidCell] = useState('');
  const [winningPath, setWinningPath] = useState<
    number[] | null
  >(null);

  const {
    cells,
    winner,
    draw,
    playerTurn: player,
  } = useSelector(selectBoard);

  const dispatch = useDispatch();

  const handleSelect = (cell: number) => {
    if (winner) return;

    // Validate Cell selection
    validateCell(cell);

    // Update board cells
    const updatedBoard = updateBoard(cell);

    // Check for winning path
    const winningPath = findWinningPath(updatedBoard);

    if (winningPath) {
      setWinningPath(winningPath);
      dispatch(setWinner(player));
    } else if (isDraw(updatedBoard)) {
      dispatch(setDraw());
    } else {
      dispatch(switchTurn());
    }
  };

  const showErrorMessage = () => {
    setInvalidCell('This cell is taken !');
    setTimeout(() => {
      setInvalidCell('');
    }, 2000);
  };

  const validateCell = (cell: number) => {
    if (isCellEmpty(cells[cell])) {
      dispatch(setCell({ cell, symbol: player }));
    } else {
      showErrorMessage();
      return;
    }
  };

  const updateBoard = (cell: number) => {
    const updatedCells = [...cells];
    updatedCells[cell] = player;
    return updatedCells;
  };

  const isCellEmpty = (value: Cell) => !value;

  const isDraw = (board: Cell[]) => {
    return board.every((cell) => !!cell);
  };

  return {
    cells,
    winner,
    draw,
    winningPath,
    invalidCell,
    handleSelect,
  };
};
