import { players, PlayerInfoType } from '../constants/players';
import { validWords } from '../constants/words';
import { acceptedWords } from '../constants/standardWordsList';
import { originalWordleWords } from '../constants/wordleWordList';

export const isWordInWordList = (word: string): boolean =>
  players.some(
    ({ secondName }) => secondName.toLowerCase() === word.toLowerCase()
  ) ||
  validWords.some(
    (validWord) => validWord.toLowerCase() === word.toLowerCase()
  ) ||
  acceptedWords.some(
    (validWord) => validWord.toLowerCase() === word.toLowerCase()
  ) ||
  originalWordleWords.some(
    (validWord) => validWord.toLowerCase() === word.toLowerCase()
  );

export const getWordOfDay = (): {
  solution: string;
  solutionIndex: number;
  tomorrow: number;
  solutionInfo: PlayerInfoType;
} => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('February 2, 2022 00:00:00').valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  return {
    solution: players[index % players.length].secondName.toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
    solutionInfo: players[index % players.length],
  };
};

export const { solution, solutionIndex, tomorrow, solutionInfo } =
  getWordOfDay();

export const isWinningWord = (word: string): boolean =>
  solution.toLowerCase() === word.toLowerCase();
