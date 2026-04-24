import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Helper to map match for API response
define:
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

// GET /api/matches?status=<fixture|live|result>
router.get('/', async (req, res) => {
  try {
    const status = req.query.status as string | undefined;
    const where: any = status ? { status } : {};
    const matches = await prisma.match.findMany({
      where,
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

// GET /api/matches/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid match ID' });
    const match = await prisma.match.findUnique({
      where: { id },
      include: {
        homeTeam: true,
        awayTeam: true,
        events: true
      }
    });
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    const { homeTeam, awayTeam, events, venue, referee } = match;
    res.json({
      match: {
        ...mapMatch(match),
        venue,
        referee,
        events: events?.map(e => ({
          id: e.id,
          minute: e.minute,
          type: e.type,
          team: e.team,
          player: e.player,
          assist: e.assist,
          detail: e.detail
        })) || []
      }
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
