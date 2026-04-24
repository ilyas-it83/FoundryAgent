import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Aggregate stats for standings
    const teams = await prisma.team.findMany({
      include: {
        homeMatches: true,
        awayMatches: true,
      }
    });

    const standings = teams.map(team => {
      const home = team.homeMatches;
      const away = team.awayMatches;
      const matches = [...home, ...away];
      const played = matches.filter(m => m.status === "FINISHED").length;
      let wins = 0, draws = 0, losses = 0, gf = 0, ga = 0;
      for (const match of matches) {
        if (match.status !== "FINISHED") continue;

        const isHome = match.homeTeamId === team.id;
        const teamGoals = isHome ? match.homeScore : match.awayScore;
        const oppGoals = isHome ? match.awayScore : match.homeScore;
        gf += teamGoals;
        ga += oppGoals;
        if (teamGoals > oppGoals) wins++;
        else if (teamGoals === oppGoals) draws++;
        else losses++;
      }
      const points = wins * 3 + draws;
      return {
        teamId: team.id,
        teamName: team.name,
        played,
        wins,
        draws,
        losses,
        goalsFor: gf,
        goalsAgainst: ga,
        goalDifference: gf - ga,
        points: points
      };
    });

    standings.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      return b.goalsFor - a.goalsFor;
    });
    standings.forEach((s, i) => (s.position = i + 1));

    res.status(200).json(standings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch standings" });
  }
}
