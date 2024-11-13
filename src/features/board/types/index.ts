import { Player } from '@features/players/types';

// Cell types 
export type Cell = 'X' | 'O' | null;
export type Cells = Cell[];
export type CellSymbol = Player['symbol'];

// Player 
export type PlayerTurn = Player['symbol'];
