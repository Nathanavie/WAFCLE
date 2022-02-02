import React, { ReactElement } from 'react';
import Square from '../Square/Square';
import StyledRow from '../StyledRow';

interface Props {
  guess: string;
  solutionLength: number;
}

const CurrentRow = ({ guess, solutionLength }: Props): ReactElement => {
  const splitGuess = guess.split('');
  const emptyCells = Array.from(Array(solutionLength - splitGuess.length));

  return (
    <StyledRow>
      <>
        {splitGuess.map((letter, i) => (
          <Square
            key={i}
            value={letter}
            status={null}
            solutionLength={solutionLength}
          />
        ))}
        {emptyCells.map((_, i) => (
          <Square
            key={i}
            value={null}
            status={null}
            solutionLength={solutionLength}
          />
        ))}
      </>
    </StyledRow>
  );
};
export default CurrentRow;
