// server/src/data/teams.ts
export interface Team {
  id: string;
  name: string;
  shortName: string;
  stadium: string;
  city: string;
  logo: string;
}

const teams: Team[] = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    stadium: 'Emirates Stadium',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
  },
  {
    id: 'astonvilla',
    name: 'Aston Villa',
    shortName: 'AVL',
    stadium: 'Villa Park',
    city: 'Birmingham',
    logo: 'https://resources.premierleague.com/premierleague/badges/t7.png',
  },
  {
    id: 'bournemouth',
    name: 'AFC Bournemouth',
    shortName: 'BOU',
    stadium: 'Vitality Stadium',
    city: 'Bournemouth',
    logo: 'https://resources.premierleague.com/premierleague/badges/t91.png',
  },
  {
    id: 'brentford',
    name: 'Brentford',
    shortName: 'BRE',
    stadium: 'Gtech Community Stadium',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t94.png',
  },
  {
    id: 'brighton',
    name: 'Brighton & Hove Albion',
    shortName: 'BHA',
    stadium: 'Amex Stadium',
    city: 'Brighton',
    logo: 'https://resources.premierleague.com/premierleague/badges/t36.png',
  },
  {
    id: 'burnley',
    name: 'Burnley',
    shortName: 'BUR',
    stadium: 'Turf Moor',
    city: 'Burnley',
    logo: 'https://resources.premierleague.com/premierleague/badges/t94.png',
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    stadium: 'Stamford Bridge',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t8.png',
  },
  {
    id: 'crystalpalace',
    name: 'Crystal Palace',
    shortName: 'CRY',
    stadium: 'Selhurst Park',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t11.png',
  },
  {
    id: 'everton',
    name: 'Everton',
    shortName: 'EVE',
    stadium: 'Goodison Park',
    city: 'Liverpool',
    logo: 'https://resources.premierleague.com/premierleague/badges/t13.png',
  },
  {
    id: 'fulham',
    name: 'Fulham',
    shortName: 'FUL',
    stadium: 'Craven Cottage',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t54.png',
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    stadium: 'Anfield',
    city: 'Liverpool',
    logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
  },
  {
    id: 'luton',
    name: 'Luton Town',
    shortName: 'LUT',
    stadium: 'Kenilworth Road',
    city: 'Luton',
    logo: 'https://resources.premierleague.com/premierleague/badges/t108.png',
  },
  {
    id: 'manchestercity',
    name: 'Manchester City',
    shortName: 'MCI',
    stadium: 'Etihad Stadium',
    city: 'Manchester',
    logo: 'https://resources.premierleague.com/premierleague/badges/t43.png',
  },
  {
    id: 'manchesterunited',
    name: 'Manchester United',
    shortName: 'MUN',
    stadium: 'Old Trafford',
    city: 'Manchester',
    logo: 'https://resources.premierleague.com/premierleague/badges/t1.png',
  },
  {
    id: 'newcastle',
    name: 'Newcastle United',
    shortName: 'NEW',
    stadium: 'St. James' Park',
    city: 'Newcastle',
    logo: 'https://resources.premierleague.com/premierleague/badges/t4.png',
  },
  {
    id: 'nottingham',
    name: 'Nottingham Forest',
    shortName: 'NFO',
    stadium: 'City Ground',
    city: 'Nottingham',
    logo: 'https://resources.premierleague.com/premierleague/badges/t17.png',
  },
  {
    id: 'sheffield',
    name: 'Sheffield United',
    shortName: 'SHU',
    stadium: 'Bramall Lane',
    city: 'Sheffield',
    logo: 'https://resources.premierleague.com/premierleague/badges/t49.png',
  },
  {
    id: 'tottenham',
    name: 'Tottenham Hotspur',
    shortName: 'TOT',
    stadium: 'Tottenham Hotspur Stadium',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t6.png',
  },
  {
    id: 'westham',
    name: 'West Ham United',
    shortName: 'WHU',
    stadium: 'London Stadium',
    city: 'London',
    logo: 'https://resources.premierleague.com/premierleague/badges/t21.png',
  },
  {
    id: 'wolves',
    name: 'Wolverhampton Wanderers',
    shortName: 'WOL',
    stadium: 'Molineux Stadium',
    city: 'Wolverhampton',
    logo: 'https://resources.premierleague.com/premierleague/badges/t39.png',
  },
];

export default teams;
