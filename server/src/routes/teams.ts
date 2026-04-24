// teams.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

// GET /api/teams - All clubs
router.get('/', async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
        stadium: true,
        country: true,
        founded: true
      }
    });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teams' });
  }
});

// GET /api/teams/:id - Single club + squad
router.get('/:id', async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    if (isNaN(teamId)) return res.status(400).json({ error: 'Invalid team id' });

    const team = await prisma.team.findUnique({
      where: { id: teamId },
      include: {
        players: true
      }
    });

    if (!team) return res.status(404).json({ error: 'Team not found' });

    // Format response for squad
    res.json({
      id: team.id,
      name: team.name,
      logo: team.logo,
      stadium: team.stadium,
      country: team.country,
      founded: team.founded,
      squad: team.players
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching team profile' });
  }
});

export default router;