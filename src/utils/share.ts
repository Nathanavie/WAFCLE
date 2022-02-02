import { getGuessStatuses } from './statuses';
import { solutionIndex } from './wordUtils';

export const generateEmojiGrid = (guesses: string[]): string =>
  guesses
    .map((guess) => {
      const status = getGuessStatuses(guess);
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩';
            case 'present':
              return '🟨';
            default:
              return '⬛';
          }
        })
        .join('');
    })
    .join('\n')
    .trim();

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  handleShare: () => void
): void => {
  const shareString = ` WAFCLE ${solutionIndex + 1} ${
    lost ? 'X' : guesses.length
  }/6\n\n${generateEmojiGrid(guesses)}\n#wafc #wafcle \nhttps://wafcle.com`;
  if (navigator.share) {
    navigator
      .share({
        title: `WAFCLE ${solutionIndex + 1}`,
        text: shareString,
      })
      .then(() => {
        handleShare();
      })
      .catch(() => {
        navigator.clipboard.writeText(shareString);
        handleShare();
      });
  } else {
    navigator.clipboard.writeText(shareString);
    handleShare();
  }
};
