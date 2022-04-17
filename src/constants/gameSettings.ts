interface GameSettings {
  Team: string;
  TeamAbbreviation: string;
  TotalTries: string;
  SuccessRate: string;
  CurrentStreak: string;
  BestStreak: string;
  TeamColor: string;
  CelebrationMessage: string;
  OldestSeason: string;
  GameURL: string;
}
const gameSettings: GameSettings = {
  Team: 'Wigan Athletic',
  TeamAbbreviation: 'WAFC',
  TotalTries: 'Total Tries',
  SuccessRate: 'Success Rate',
  CurrentStreak: 'Current Streak',
  BestStreak: 'Best Streak',
  TeamColor: '#91c7ff',
  CelebrationMessage: 'Up the tics!',
  OldestSeason: '2016/2017',
  GameURL: 'https://wafcle.com',
};
export default gameSettings;
