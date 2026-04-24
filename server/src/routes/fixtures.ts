import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Helper to map match for API response
const mapMatch = (match: any) => ({
  id: match.id,
  homeTeam: {
    id: match.homeTeam.id,
    name: match.homeTeam.name,
    logoUrl: match.homeTeam.logoUrl
  },
  awayTeam: {
    id: match.awayTeam.id,
    name: match.awayTeam.name,
    logoUrl: match.awayTeam.logoUrl
  },
  date: match.date,
  status: match.status,
  scoreHome: match.scoreHome,
  scoreAway: match.scoreAway
});

// GET /api/fixtures
router.get('/', async (_req, res) => {
  try {
    const now = new Date();
    const matches = await prisma.match.findMany({
      where: {
        status: 'fixture',
        date: {
          gte: now
        }
      },
      include: {
        homeTeam: true,
        awayTeam: true
      },
      orderBy: { date: 'asc' }
    });
    res.json({ matches: matches.map(mapMatch) });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
