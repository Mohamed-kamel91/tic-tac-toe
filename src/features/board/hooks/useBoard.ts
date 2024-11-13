import { useState } from 'react';

import { useDispatch, useSelector } from '@store';
import {
  selectCells,
  selectIsWinner,
  selectPlayerTurn,
  setCell,
  setDraw,
  setWinner,
  switchTurn,
} from '../slices/boardSlice';

import { findWinningPath } from '../utils/board-utils';
import { Cell, Cells } from '../types';

export const useBoard = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [winningPath, setWinningPath] = useState<
    number[] | null
  >(null);

  const cells = useSelector(selectCells);
  const player = useSelector(selectPlayerTurn);
  const isWinner = useSelector(selectIsWinner);

  const dispatch = useDispatch();

  const handleSelect = (cell: number) => {
    // Validate Cell selection
    validateCell(cell);

    // Update board cells
    const updatedBoard = updateBoard(cell);

    // Check for winner
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
    setErrorMsg('This cell is taken !');
    setTimeout(() => {
      setErrorMsg('');
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

  const isDraw = (board: Cells) => {
    return board.every((cell) => !!cell);
  };

  return {
    cells,
    isWinner,
    winningPath,
    errorMsg,
    handleSelect,
  };
};
