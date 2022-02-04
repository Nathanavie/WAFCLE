import gameSettings from '../constants/gameSettings';

const gameStateKey = `${gameSettings.TeamAbbreviation.toLowerCase()}leState`;

type StoredGameState = {
  guesses: string[];
  solution: string;
  lastActive: string;
};

export const saveGameStateToLocalStorage = (
  gameState: StoredGameState
): void => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = (): StoredGameState | null => {
  const state = localStorage.getItem(gameStateKey);
  return state ? (JSON.parse(state) as StoredGameState) : null;
};

const gameStatKey = `${gameSettings.TeamAbbreviation.toLowerCase()}leStats`;

export type GameStats = {
  winDistribution: number[];
  gamesFailed: number;
  currentStreak: number;
  bestStreak: number;
  totalGames: number;
  successRate: number;
};

export const saveStatsToLocalStorage = (gameStats: GameStats): void => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats));
};

export const loadStatsFromLocalStorage = (): GameStats | null => {
  const stats = localStorage.getItem(gameStatKey);
  return stats ? (JSON.parse(stats) as GameStats) : null;
};
