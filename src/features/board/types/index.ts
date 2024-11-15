import { PlayerSymbol } from '@features/players/types';

// Cell
export type CellSymbol = PlayerSymbol;
export type Cell = CellSymbol | null;

// Player
export type PlayerTurn = PlayerSymbol;
export type Winner = PlayerSymbol | null;
