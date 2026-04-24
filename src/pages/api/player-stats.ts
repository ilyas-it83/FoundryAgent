import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const players = await prisma.player.findMany({
      include: {
        team: true,
        appearances: true
      }
    });

    const stats = players.map(player => {
      const matches = player.appearances;
      const appearances = matches.length;
      let goals = 0, assists = 0, yellowCards = 0, redCards = 0;
      for (const app of matches) {
        goals += app.goals;
        assists += app.assists;
        yellowCards += app.yellowCards;
        redCards += app.redCards;
      }
      return {
        id: player.id,
        name: player.name,
        teamName: player.team.name,
        appearances,
        goals,
        assists,
        yellowCards,
        redCards
      };
    });

    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch player stats" });
  }
}
