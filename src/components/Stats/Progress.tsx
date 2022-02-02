import React, { ReactElement } from 'react';

interface ProgressProps {
  index: number;
  size: number;
  label: string;
}

const Progress = ({ index, size, label }: ProgressProps): ReactElement => (
  <section className="progressBarContainer">
    <section className="progressBarLabel">{index + 1}</section>
    <section className="outerProgressBar">
      <section style={{ width: `${5 + size}%` }} className="innerProgressBar">
        {label}
      </section>
    </section>
  </section>
);
export default Progress;
