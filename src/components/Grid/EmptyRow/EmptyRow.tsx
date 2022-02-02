import React, { ReactElement } from 'react';
import Square from '../Square/Square';
import StyledRow from '../StyledRow';

interface EmptyRowProps {
  solutionLength: number;
}

const EmptyRow = ({ solutionLength }: EmptyRowProps): ReactElement => {
  const emptyCells = Array.from(Array(solutionLength));

  return (
    <StyledRow>
      <>
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

export default EmptyRow;
