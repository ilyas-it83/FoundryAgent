export interface LeagueStanding {
  teamId: string;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position?: number;
}

export interface PlayerStats {
  id: string;
  name: string;
  teamName: string;
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}
