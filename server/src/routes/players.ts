// players.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

// GET /api/teams/:id/players - Squad for a team
router.get('/teams/:id/players', async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    if (isNaN(teamId)) return res.status(400).json({ error: 'Invalid team id' });
    const players = await prisma.player.findMany({
      where: { teamId },
      select: {
        id: true,
        name: true,
        position: true,
        nationality: true,
        number: true,
        photo: true
      }
    });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching players' });
  }
});

export default router;