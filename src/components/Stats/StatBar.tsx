import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { GameStats } from '../../utils/localStorage';

const StatBarContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

const StatItemContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  div {
    font-size: 0.3em;
  }
  > div {
    font-size: inherit;
    font-weight: bold;
  }
`;

interface StatBarProps {
  gameStats: GameStats | null;
}

const StatItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <StatItemContainer>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-xs">{label}</div>
  </StatItemContainer>
);

const StatBar = ({ gameStats }: StatBarProps): ReactElement | null => {
  if (gameStats) {
    return (
      <StatBarContainer>
        <StatItem label="Total Tries" value={gameStats.totalGames} />
        <StatItem label="Success Rate" value={`${gameStats.successRate}%`} />
        <StatItem label="Current Streak" value={gameStats.currentStreak} />
        <StatItem label="Best Streak" value={gameStats.bestStreak} />
      </StatBarContainer>
    );
  }
  return null;
};
export default StatBar;
