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
    firstName: 'Thelo',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Aasgaard',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Steven',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Sumner',
    team: Teams.U18s,
  },
  {
    firstName: 'Kelland',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Watts',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Owen',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Goalkeeper,
    secondName: 'Evans',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Danny',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Welsby',
    team: Teams.U18s,
  },
  {
    firstName: 'Jason',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Kerr',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Kal',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Naismith',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Daniel',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Goalkeeper,
    secondName: 'Gyollai',
    team: Teams.U23s,
  },
  {
    firstName: 'Chheyenne',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Dunkley',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Sam',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Goalkeeper,
    secondName: 'Campbell',
    team: Teams.U18s,
  },
  {
    firstName: 'Luke',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Midfielder,
    secondName: 'Burgess',
    team: Teams.U23s,
  },
  {
    firstName: 'James',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'McClean',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Josh',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Magennis',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Emeka',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Defender,
    secondName: 'Obi',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Charlie',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Wyke',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jonas',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Defender,
    secondName: 'Olsson',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Dujon',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Sterling',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Joe',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Sze',
    team: Teams.U18s,
  },
  {
    firstName: 'David',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Goalkeeper,
    secondName: 'Marshall',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Callum',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Lang',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Tom',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Naylor',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Chris',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Sze',
    team: Teams.U18s,
  },
  {
    firstName: 'Max',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Power',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Sam',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Goalkeeper,
    secondName: 'Tickle',
    team: Teams.U23s,
  },
  {
    firstName: 'Jamie',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Forward,
    secondName: 'Proctor',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Dan',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Goalkeeper,
    secondName: 'Lavercombe',
    team: Teams.U23s,
  },
  {
    firstName: 'Dean',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Pinnington',
    team: Teams.U23s,
  },
  {
    firstName: 'Jamal',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Forward,
    secondName: 'Lowe',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'George',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Defender,
    secondName: 'Johnston',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Alex',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Dobre',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Kyle',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Worsley',
    team: Teams.U18s,
  },
  {
    firstName: 'Tom',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Pearce',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Babajide',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Adeeko',
    team: Teams.U23s,
  },
  {
    firstName: 'Harry',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'McHugh',
    team: Teams.U23s,
  },
  {
    firstName: 'Bobby',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Goalkeeper,
    secondName: 'Jones',
    team: Teams.U23s,
  },
  {
    firstName: 'Darron',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Midfielder,
    secondName: 'Gibson',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Gwion',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Edwards',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Tom',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Costello',
    team: Teams.U23s,
  },
  {
    firstName: 'Will',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Keane',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Antonee',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Robinson',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Graeme',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Shinnie',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jordan',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Cousins',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Owen',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Goalkeeper,
    secondName: 'Mooney',
    team: Teams.U18s,
  },
  {
    firstName: 'Joe',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Bennett',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Devante',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Forward,
    secondName: 'Cole',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Alex',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Perry',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Nick',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Midfielder,
    secondName: 'Powell',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Leon',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Balogun',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jack',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Whatmough',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Chris',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Merrie',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Tom',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Goalkeeper,
    secondName: 'Watson',
    team: Teams.U18s,
  },
  {
    firstName: 'Sam',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Morsy',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Gavin',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Massey',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Joe',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Forward,
    secondName: 'Garner',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Dan',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Gardner',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Scott',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Defender,
    secondName: 'Wootton',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'James',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Carragher',
    team: Teams.U23s,
  },
  {
    firstName: 'Corey',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Defender,
    secondName: 'Whelan',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Adam',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Long',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Tendayi',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Darikwa',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Glen',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Rea',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Kieran',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Lloyd',
    team: Teams.U23s,
  },
  {
    firstName: 'Kieran',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Dowell',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Ruben',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Grewal',
    team: Teams.U18s,
  },
  {
    firstName: 'Lee',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Evans',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jordan',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Jones',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Divin',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Baningime',
    team: Teams.U23s,
  },
  {
    firstName: 'Christian',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Goalkeeper,
    secondName: 'Walton',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Cedric',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Kipre',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Arthur',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Lomax',
    team: Teams.U18s,
  },
  {
    firstName: 'Joe',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Forward,
    secondName: 'Gelhardt',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Scott',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Smith',
    team: Teams.U23s,
  },
  {
    firstName: 'Joseph',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Forward,
    secondName: 'Dodoo',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jan',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Forward,
    secondName: 'Mlakar',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Danny',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Fox',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Nathan',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Defender,
    secondName: 'Byrne',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Shaun',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Midfielder,
    secondName: 'MacDonald',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Timi',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Sobowale',
    team: Teams.U23s,
  },
  {
    firstName: 'Charlie',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Hughes',
    team: Teams.U18s,
  },
  {
    firstName: 'Funso',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Ojo',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jamie',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Forward,
    secondName: 'Walker',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Stephen',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Humphrys',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Gary',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Roberts',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Charlie',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Forward,
    secondName: 'Jolley',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jensen',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Weir',
    team: Teams.U23s,
  },
  {
    firstName: 'Tom',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Bayliss',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Lewis',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Macleod',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Josh',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Midfielder,
    secondName: 'Windass',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Joe',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Williams',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Dan',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Smith',
    team: Teams.U18s,
  },
  {
    firstName: 'Kai',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Payne',
    team: Teams.U18s,
  },
  {
    firstName: 'Luke',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Robinson',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Jack',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Reilly',
    team: Teams.U18s,
  },
  {
    firstName: 'Kieffer',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Forward,
    secondName: 'Moore',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Zach',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Forward,
    secondName: 'Clough',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Callum',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Forward,
    secondName: 'McManaman',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Michael',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Jacobs',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Adam',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'Brooks',
    team: Teams.U18s,
  },
  {
    firstName: 'Harry',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'McGee',
    team: Teams.U23s,
  },
  {
    firstName: 'Jamie',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Midfielder,
    secondName: 'McGrath',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Anthony',
    mostRecentYear: Seasons.NineteenTwenty,
    position: Positions.Midfielder,
    secondName: 'Pilkington',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Levi',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Forward,
    secondName: 'Welsh',
    team: Teams.U18s,
  },
  {
    firstName: 'Mackenzie',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Midfielder,
    secondName: 'Oneill',
    team: Teams.U23s,
  },
  {
    firstName: 'Reece',
    mostRecentYear: Seasons.EighteenNineteen,
    position: Positions.Defender,
    secondName: 'James',
    team: Teams.FirstTeam,
  },
  {
    firstName: 'Luca',
    mostRecentYear: Seasons.TwentyOneTwentyTwo,
    position: Positions.Defender,
    secondName: 'Latona',
    team: Teams.U18s,
  },
  {
    firstName: 'Kyle',
    mostRecentYear: Seasons.TwentyTwentyTwentyOne,
    position: Positions.Forward,
    secondName: 'Joseph',
    team: Teams.FirstTeam,
  },
];
