// server/src/data/standings.ts
export interface Standing {
  teamId: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

const standings: Standing[] = [
  { teamId: 'manchestercity', position: 1, played: 10, won: 7, drawn: 2, lost: 1, points: 23, goalsFor: 23, goalsAgainst: 10, goalDifference: 13 },
  { teamId: 'arsenal', position: 2, played: 10, won: 7, drawn: 1, lost: 2, points: 22, goalsFor: 21, goalsAgainst: 11, goalDifference: 10 },
  { teamId: 'liverpool', position: 3, played: 10, won: 6, drawn: 3, lost: 1, points: 21, goalsFor: 18, goalsAgainst: 8, goalDifference: 10 },
  { teamId: 'tottenham', position: 4, played: 10, won: 6, drawn: 2, lost: 2, points: 20, goalsFor: 20, goalsAgainst: 15, goalDifference: 5 },
  { teamId: 'astonvilla', position: 5, played: 10, won: 5, drawn: 3, lost: 2, points: 18, goalsFor: 19, goalsAgainst: 14, goalDifference: 5 },
  { teamId: 'chelsea', position: 6, played: 10, won: 5, drawn: 2, lost: 3, points: 17, goalsFor: 16, goalsAgainst: 13, goalDifference: 3 },
  { teamId: 'newcastle', position: 7, played: 10, won: 4, drawn: 4, lost: 2, points: 16, goalsFor: 17, goalsAgainst: 14, goalDifference: 3 },
  { teamId: 'manchesterunited', position: 8, played: 10, won: 4, drawn: 2, lost: 4, points: 14, goalsFor: 15, goalsAgainst: 17, goalDifference: -2 },
  { teamId: 'brighton', position: 9, played: 10, won: 3, drawn: 4, lost: 3, points: 13, goalsFor: 12, goalsAgainst: 13, goalDifference: -1 },
  { teamId: 'westham', position: 10, played: 10, won: 3, drawn: 3, lost: 4, points: 12, goalsFor: 11, goalsAgainst: 11, goalDifference: 0 },
  { teamId: 'brentford', position: 11, played: 10, won: 2, drawn: 5, lost: 3, points: 11, goalsFor: 9, goalsAgainst: 12, goalDifference: -3 },
  { teamId: 'bournemouth', position: 12, played: 10, won: 2, drawn: 4, lost: 4, points: 10, goalsFor: 8, goalsAgainst: 15, goalDifference: -7 },
  { teamId: 'crystalpalace', position: 13, played: 10, won: 2, drawn: 4, lost: 4, points: 10, goalsFor: 8, goalsAgainst: 14, goalDifference: -6 },
  { teamId: 'fulham', position: 14, played: 10, won: 2, drawn: 3, lost: 5, points: 9, goalsFor: 7, goalsAgainst: 16, goalDifference: -9 },
  { teamId: 'everton', position: 15, played: 10, won: 2, drawn: 2, lost: 6, points: 8, goalsFor: 6, goalsAgainst: 14, goalDifference: -8 },
  { teamId: 'wolves', position: 16, played: 10, won: 1, drawn: 5, lost: 4, points: 8, goalsFor: 7, goalsAgainst: 16, goalDifference: -9 },
  { teamId: 'nottingham', position: 17, played: 10, won: 1, drawn: 5, lost: 4, points: 8, goalsFor: 6, goalsAgainst: 13, goalDifference: -7 },
  { teamId: 'luton', position: 18, played: 10, won: 1, drawn: 3, lost: 6, points: 6, goalsFor: 5, goalsAgainst: 19, goalDifference: -14 },
  { teamId: 'burnley', position: 19, played: 10, won: 1, drawn: 2, lost: 7, points: 5, goalsFor: 4, goalsAgainst: 23, goalDifference: -19 },
  { teamId: 'sheffield', position: 20, played: 10, won: 0, drawn: 4, lost: 6, points: 4, goalsFor: 3, goalsAgainst: 20, goalDifference: -17 },
];

export default standings;
