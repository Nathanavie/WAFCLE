export enum Teams {
  FirstTeam = 'First Team',
  U23s = 'Under 23s',
  U18s = 'Under 18s',
}

export enum Seasons {
  TwentyOneTwentyTwo = '2021 - 2022',
  TwentyTwentyTwentyOne = '2020 - 2021',
  NineteenTwenty = '2019 - 2020',
  EighteenNineteen = '2018 - 2019',
  SeventeenEighteen = '2017 - 2018',
  SixteenSeventeen = '2016 - 2017',
  FifteenSixteen = '2015 - 2016',
  FourteenFifteen = '2014 - 2015',
  ThirteenFourteen = '2013 - 2014',
  TwelveThirteen = '2012 - 2013',
}

export enum Positions {
  Goalkeeper = 'Goalkeeper',
  Defender = 'Defender',
  Midfielder = 'Midfielder',
  Forward = 'Forward',
}

export interface PlayerInfoType {
  firstName: string;
  secondName: string;
  team: Teams;
  position: Positions;
  mostRecentYear: Seasons;
}

export const players: PlayerInfoType[] = [
  {
    firstName: 'Jamie',
    secondName: 'Jones',
    team: Teams.FirstTeam,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Ben',
    secondName: 'Amos',
    team: Teams.FirstTeam,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Kelland',
    secondName: 'Watts',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tom',
    secondName: 'Pearce',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jack',
    secondName: 'Whatmough',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jason',
    secondName: 'Kerr',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Joe',
    secondName: 'Bennett',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Glen',
    secondName: 'Rea',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tendayi',
    secondName: 'Darikwa',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Adam',
    secondName: 'Long',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Luke',
    secondName: 'Robinson',
    team: Teams.FirstTeam,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tom',
    secondName: 'Naylor',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jordan',
    secondName: 'Cousins',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Gwion',
    secondName: 'Edwards',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Max',
    secondName: 'Power',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Gavin',
    secondName: 'Massey',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Graeme',
    secondName: 'Shinnie',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tom',
    secondName: 'Bayliss',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'James',
    secondName: 'McClean',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Thelo',
    secondName: 'Aasgaard',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jamie',
    secondName: 'McGrath',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Charlie',
    secondName: 'Wyke',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Will',
    secondName: 'Keane',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jordan',
    secondName: 'Jones',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Callum',
    secondName: 'Lang',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Josh',
    secondName: 'Magennis',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Stephen',
    secondName: 'Humphrys',
    team: Teams.FirstTeam,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Sam',
    secondName: 'Tickle',
    team: Teams.U23s,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'James',
    secondName: 'Carragher',
    team: Teams.U23s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Timi',
    secondName: 'Sobowale',
    team: Teams.U23s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Kieran',
    secondName: 'Lloyd',
    team: Teams.U23s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Babajide',
    secondName: 'Adeeko',
    team: Teams.U23s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Harry',
    secondName: 'McGee',
    team: Teams.U23s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Harry',
    secondName: 'McHugh',
    team: Teams.U23s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Dean',
    secondName: 'Pinnington',
    team: Teams.U23s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Scott',
    secondName: 'Smith',
    team: Teams.U23s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Divin',
    secondName: 'Baningime',
    team: Teams.U23s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tom',
    secondName: 'Costello',
    team: Teams.U23s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Sam',
    secondName: 'Campbell',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Owen',
    secondName: 'Mooney',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Tom',
    secondName: 'Watson',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Charlie',
    secondName: 'Hughes',
    team: Teams.U18s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Luca',
    secondName: 'Latona',
    team: Teams.U18s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Jack',
    secondName: 'Reilly',
    team: Teams.U18s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Dan',
    secondName: 'Smith',
    team: Teams.U18s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Steven',
    secondName: 'Sumner',
    team: Teams.U18s,
    position: Positions.Defender,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Adam',
    secondName: 'Brooks',
    team: Teams.U18s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Ruben',
    secondName: 'Grewal',
    team: Teams.U18s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Arthur',
    secondName: 'Lomax',
    team: Teams.U18s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Kai',
    secondName: 'Payne',
    team: Teams.U18s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Chris',
    secondName: 'Sze',
    team: Teams.U18s,
    position: Positions.Midfielder,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Danny',
    secondName: 'Welsby',
    team: Teams.U18s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Levi',
    secondName: 'Welsh',
    team: Teams.U18s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Kyle',
    secondName: 'Worsley',
    team: Teams.U18s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
  {
    firstName: 'Joe',
    secondName: 'Sze',
    team: Teams.U18s,
    position: Positions.Forward,
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
  },
];
