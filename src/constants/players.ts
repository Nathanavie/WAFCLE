export enum Teams {
  FirstTeam = 'First Team',
  U23s = 'Under 23s',
  U18s = 'Under 18s',
}

export enum Positions {
  Goalkeeper = 'GoalKeeper',
  Defender = 'Defender',
  Midfielder = 'Midfielder',
  Forward = 'Forward',
}

export interface PlayerInfoType {
  firstName: string;
  secondName: string;
  team: Teams;
  position: Positions;
}

export const players: PlayerInfoType[] = [
  {
    firstName: 'Jamie',
    secondName: 'Jones',
    team: Teams.FirstTeam,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'Ben',
    secondName: 'Amos',
    team: Teams.FirstTeam,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'Kelland',
    secondName: 'Watts',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Tom',
    secondName: 'Pearce',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Jack',
    secondName: 'Whatmough',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Jason',
    secondName: 'Kerr',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Joe',
    secondName: 'Bennett',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Glen',
    secondName: 'Rea',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Tendayi',
    secondName: 'Darikwa',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Adam',
    secondName: 'Long',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Luke',
    secondName: 'Robinson',
    team: Teams.FirstTeam,
    position: Positions.Defender,
  },
  {
    firstName: 'Tom',
    secondName: 'Naylor',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Jordan',
    secondName: 'Cousins',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Gwion',
    secondName: 'Edwards',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Max',
    secondName: 'Power',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Gavin',
    secondName: 'Massey',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Graeme',
    secondName: 'Shinnie',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Tom',
    secondName: 'Bayliss',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'James',
    secondName: 'McClean',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Thelo',
    secondName: 'Aasgaard',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Jamie',
    secondName: 'McGrath',
    team: Teams.FirstTeam,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Charlie',
    secondName: 'Wyke',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Will',
    secondName: 'Keane',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Jordan',
    secondName: 'Jones',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Callum',
    secondName: 'Lang',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Josh',
    secondName: 'Magennis',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Stephen',
    secondName: 'Humphrys',
    team: Teams.FirstTeam,
    position: Positions.Forward,
  },
  {
    firstName: 'Sam',
    secondName: 'Tickle',
    team: Teams.U23s,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'James',
    secondName: 'Carragher',
    team: Teams.U23s,
    position: Positions.Defender,
  },
  {
    firstName: 'Timi',
    secondName: 'Sobowale',
    team: Teams.U23s,
    position: Positions.Defender,
  },
  {
    firstName: 'Kieran',
    secondName: 'Lloyd',
    team: Teams.U23s,
    position: Positions.Defender,
  },
  {
    firstName: 'Babajide',
    secondName: 'Adeeko',
    team: Teams.U23s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Harry',
    secondName: 'McGee',
    team: Teams.U23s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Harry',
    secondName: 'McHugh',
    team: Teams.U23s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Dean',
    secondName: 'Pinnington',
    team: Teams.U23s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Scott',
    secondName: 'Smith',
    team: Teams.U23s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Divin',
    secondName: 'Baningime',
    team: Teams.U23s,
    position: Positions.Forward,
  },
  {
    firstName: 'Tom',
    secondName: 'Costello',
    team: Teams.U23s,
    position: Positions.Forward,
  },
  {
    firstName: 'Sam',
    secondName: 'Campbell',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'Owen',
    secondName: 'Mooney',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'Tom',
    secondName: 'Watson',
    team: Teams.U18s,
    position: Positions.Goalkeeper,
  },
  {
    firstName: 'Charlie',
    secondName: 'Hughes',
    team: Teams.U18s,
    position: Positions.Defender,
  },
  {
    firstName: 'Luca',
    secondName: 'Latona',
    team: Teams.U18s,
    position: Positions.Defender,
  },
  {
    firstName: 'Jack',
    secondName: 'Reilly',
    team: Teams.U18s,
    position: Positions.Defender,
  },
  {
    firstName: 'Dan',
    secondName: 'Smith',
    team: Teams.U18s,
    position: Positions.Defender,
  },
  {
    firstName: 'Steven',
    secondName: 'Sumner',
    team: Teams.U18s,
    position: Positions.Defender,
  },
  {
    firstName: 'Adam',
    secondName: 'Brooks',
    team: Teams.U18s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Ruben',
    secondName: 'Grewal',
    team: Teams.U18s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Arthur',
    secondName: 'Lomax',
    team: Teams.U18s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Kai',
    secondName: 'Payne',
    team: Teams.U18s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Chris',
    secondName: 'Sze',
    team: Teams.U18s,
    position: Positions.Midfielder,
  },
  {
    firstName: 'Danny',
    secondName: 'Welsby',
    team: Teams.U18s,
    position: Positions.Forward,
  },
  {
    firstName: 'Levi',
    secondName: 'Welsh',
    team: Teams.U18s,
    position: Positions.Forward,
  },
  {
    firstName: 'Kyle',
    secondName: 'Worsley',
    team: Teams.U18s,
    position: Positions.Forward,
  },
  {
    firstName: 'Joe',
    secondName: 'Sze',
    team: Teams.U18s,
    position: Positions.Forward,
  },
];
