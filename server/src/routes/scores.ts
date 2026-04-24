import { Router } from "express";
import type { Request, Response } from "express";
// import { prisma } from '../prisma'; // Uncomment and configure if using a database

const router = Router();

// Types
interface Score {
  id: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  status: string; // e.g., 'LIVE', 'FT', 'HT'
  time: string;   // e.g., '67' for 67 min
}

/**
 * GET /api/scores
 * Returns: { scores: Score[] }
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    // TODO: Replace with DB/prisma fetch in real app
    // const dbScores = await prisma.score.findMany({ where: {/* ... */} });
    const mockScores: Score[] = [
      {
        id: "1",
        home: "Manchester United",
        away: "Chelsea",
        homeScore: 2,
        awayScore: 1,
        status: "LIVE",
        time: "72'",
      },
      {
        id: "2",
        home: "Barcelona",
        away: "Real Madrid",
        homeScore: 0,
        awayScore: 0,
        status: "HT",
        time: "45'",
      },
      {
        id: "3",
        home: "Juventus",
        away: "Inter Milan",
        homeScore: 1,
        awayScore: 3,
        status: "FT",
        time: "90'",
      },
    ];
    res.status(200).json({ scores: mockScores });
  } catch (err) {
    res.status(500).json({ error: "Failed to load scores" });
  }
});

export default router;
