import React, { ReactElement } from 'react';
import CompletedRow from './CompletedRow/CompletedRow';
import CurrentRow from './CurrentRow/CurrentRow';
import EmptyRow from './EmptyRow/EmptyRow';

interface GridProps {
  guesses: string[];
  currentGuess: string;
  solutionLength: number;
}

const Grid = ({
  guesses,
  currentGuess,
  solutionLength,
}: GridProps): ReactElement => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];
  return (
    <section className="gridContainer">
      <section className="gridSizer">
        {guesses.map((guess) => (
          <CompletedRow
            key={guess}
            guess={guess}
            solutionLength={solutionLength}
          />
        ))}
        {guesses.length < 6 && (
          <CurrentRow solutionLength={solutionLength} guess={currentGuess} />
        )}
        {empties.map((_, i) => (
          <EmptyRow key={i} solutionLength={solutionLength} />
        ))}
      </section>
    </section>
  );
};
export default Grid;
