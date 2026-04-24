// server/src/data/matches.ts
export interface Match {
  id: string;
  date: string;
  homeTeamId: string;
  awayTeamId: string;
  homeGoals: number;
  awayGoals: number;
  venue: string;
  status: 'finished' | 'scheduled';
}

const matches: Match[] = [
  {
    id: 'm1',
    date: '2024-08-12T15:00:00Z',
    homeTeamId: 'arsenal',
    awayTeamId: 'nottingham',
    homeGoals: 2,
    awayGoals: 1,
    venue: 'Emirates Stadium',
    status: 'finished',
  },
  {
    id: 'm2',
    date: '2024-08-12T17:30:00Z',
    homeTeamId: 'chelsea',
    awayTeamId: 'liverpool',
    homeGoals: 1,
    awayGoals: 1,
    venue: 'Stamford Bridge',
    status: 'finished',
  },
  {
    id: 'm3',
    date: '2024-08-13T12:30:00Z',
    homeTeamId: 'manchestercity',
    awayTeamId: 'burnley',
    homeGoals: 3,
    awayGoals: 0,
    venue: 'Etihad Stadium',
    status: 'finished',
  },
  {
    id: 'm4',
    date: '2024-08-13T15:00:00Z',
    homeTeamId: 'manchesterunited',
    awayTeamId: 'wolves',
    homeGoals: 0,
    awayGoals: 1,
    venue: 'Old Trafford',
    status: 'finished',
  },
  {
    id: 'm5',
    date: '2024-08-14T16:00:00Z',
    homeTeamId: 'brentford',
    awayTeamId: 'tottenham',
    homeGoals: 2,
    awayGoals: 2,
    venue: 'Gtech Community Stadium',
    status: 'finished',
  },
  {
    id: 'm6',
    date: '2024-08-14T19:00:00Z',
    homeTeamId: 'everton',
    awayTeamId: 'fulham',
    homeGoals: 0,
    awayGoals: 1,
    venue: 'Goodison Park',
    status: 'finished',
  },
  {
    id: 'm7',
    date: '2024-08-15T13:00:00Z',
    homeTeamId: 'brighton',
    awayTeamId: 'luton',
    homeGoals: 4,
    awayGoals: 1,
    venue: 'Amex Stadium',
    status: 'finished',
  },
  {
    id: 'm8',
    date: '2024-08-15T16:00:00Z',
    homeTeamId: 'astonvilla',
    awayTeamId: 'newcastle',
    homeGoals: 1,
    awayGoals: 5,
    venue: 'Villa Park',
    status: 'finished',
  },
  {
    id: 'm9',
    date: '2024-08-15T18:30:00Z',
    homeTeamId: 'bournemouth',
    awayTeamId: 'westham',
    homeGoals: 1,
    awayGoals: 1,
    venue: 'Vitality Stadium',
    status: 'finished',
  },
  {
    id: 'm10',
    date: '2024-08-16T15:00:00Z',
    homeTeamId: 'crystalpalace',
    awayTeamId: 'sheffield',
    homeGoals: 1,
    awayGoals: 0,
    venue: 'Selhurst Park',
    status: 'finished',
  },
];

export default matches;
