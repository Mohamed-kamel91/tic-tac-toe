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

    // Check if cell is valid
    if (!isCellEmpty(cells[cell])) {
      showErrorMessage();
      return;
    }

    processCellSelection(cell);
  };

  const processCellSelection = (cell: number) => {
    // Set cell and update board state
    dispatch(setCell({ cell, symbol: player }));
    const updatedBoard = updateBoard(cell);

    // Evaluate game state
    evaluateGame(updatedBoard);
  };

  const updateBoard = (cell: number) => {
    const updatedCells = [...cells];
    updatedCells[cell] = player;
    return updatedCells;
  };

  const evaluateGame = (board: Cell[]) => {
    const winningPath = findWinningPath(board);

    if (winningPath) {
      handleWin(winningPath);
    } else if (isDraw(board)) {
      handleDraw();
    } else {
      handleNextTurn();
    }
  };

  const handleWin = (winningPath: number[]) => {
    setWinningPath(winningPath);
    dispatch(setWinner(player));
  };

  const handleDraw = () => {
    dispatch(setDraw());
  };

  const handleNextTurn = () => {
    dispatch(switchTurn());
  };

  const showErrorMessage = () => {
    setInvalidCell('This cell is taken !');
    setTimeout(() => {
      setInvalidCell('');
    }, 2000);
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
