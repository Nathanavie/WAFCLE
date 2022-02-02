import React, { ReactElement } from 'react';
import { GameStats } from '../../utils/localStorage';
import Progress from './Progress';

type Props = {
  gameStats: GameStats | null;
};

const Histogram = ({ gameStats }: Props): ReactElement | null => {
  if (gameStats) {
    const { winDistribution } = gameStats;
    const maxValue = Math.max(...winDistribution);

    return (
      <section className="histogram">
        {winDistribution.map((value, i) => (
          <Progress
            key={i}
            index={i}
            size={90 * (value / maxValue)}
            label={String(value)}
          />
        ))}
      </section>
    );
  }
  return null;
};
export default Histogram;
