import React, { ReactElement } from 'react';
import { CharStatus } from '../../../utils/statuses';

interface SquareProps {
  value: string | null;
  status: CharStatus | null;
  solutionLength: number;
}

const Square = ({
  value,
  status,
  solutionLength,
}: SquareProps): ReactElement => {
  if (solutionLength < 5) {
    return (
      <section
        style={{ width: `calc(80% / ${solutionLength})` }}
        className={`square ${status}`}
      >
        {value}
      </section>
    );
  }
  return (
    <section
      style={{ width: `calc(100% / ${solutionLength})` }}
      className={`square ${status}`}
    >
      {value}
    </section>
  );
};

export default Square;
