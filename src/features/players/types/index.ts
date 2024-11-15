import { z } from 'zod';

export const PlayerNameSchema = z
  .string()
  .trim()
  .min(1, { message: 'Player name is required' })
  .min(3, {
    message: 'Player name must be at least 3 characters',
  });

export const SymbolSchema = z
  .string()
  .refine((val) => val === 'X' || val === 'O', {
    message: "Side must be either 'X' or 'O'",
  });

export const playerSchema = z.object({
  name: PlayerNameSchema,
  symbol: SymbolSchema,
});

export type Player = z.infer<typeof playerSchema>;
export type PlayerName = z.infer<typeof PlayerNameSchema>;
export type PlayerSymbol = z.infer<typeof SymbolSchema>;
