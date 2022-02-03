import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { GameStats } from '../../utils/localStorage';
import gameSettings from '../../constants/gameSettings';

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
        <StatItem
          label={gameSettings.TotalTries}
          value={gameStats.totalGames}
        />
        <StatItem
          label={gameSettings.SuccessRate}
          value={`${gameStats.successRate}%`}
        />
        <StatItem
          label={gameSettings.CurrentStreak}
          value={gameStats.currentStreak}
        />
        <StatItem
          label={gameSettings.BestStreak}
          value={gameStats.bestStreak}
        />
      </StatBarContainer>
    );
  }
  return null;
};
export default StatBar;
