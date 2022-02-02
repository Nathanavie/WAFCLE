import React, { ReactElement } from 'react';
import { getGuessStatuses } from '../../../utils/statuses';
import Square from '../Square/Square';
import StyledRow from '../StyledRow';

interface CompletedRowProps {
  guess: string;
  solutionLength: number;
}

const CompletedRow = ({
  guess,
  solutionLength,
}: CompletedRowProps): ReactElement => {
  const statuses = getGuessStatuses(guess);

  return (
    <StyledRow>
      <>
        {guess.split('').map((letter, i) => (
          <Square
            key={`${letter}${statuses[i]}`}
            value={letter}
            status={statuses[i]}
            solutionLength={solutionLength}
          />
        ))}
      </>
    </StyledRow>
  );
};
export default CompletedRow;
