import { Cells } from '../types';

const cells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export const getCellPosition = (cell: number) => {
  const cc = cells.flatMap((cellRow, rowIndex) => {
    return cellRow.includes(cell)
      ? [rowIndex + 1, cell + 1]
      : [];
  });

  return cc;
};

const winningPaths = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const findWinningPath = (board: Cells) => {
  for (let i = 0; i < winningPaths.length; i++) {
    const [a, b, c] = winningPaths[i];
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return winningPaths[i];
    }
  }
  return null;
};
