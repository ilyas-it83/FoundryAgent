// server/prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import teams from '../src/data/teams';
import players from '../src/data/players';
import matches from '../src/data/matches';
import standings from '../src/data/standings';

const prisma = new PrismaClient();

async function main() {
  // Seed Teams
  for (const team of teams) {
    await prisma.team.upsert({
      where: { id: team.id },
      update: {},
      create: {
        id: team.id,
        name: team.name,
        shortName: team.shortName,
        stadium: team.stadium,
        city: team.city,
        logo: team.logo,
      },
    });
  }

  // Seed Players
  for (const player of players) {
    await prisma.player.upsert({
      where: { id: player.id },
      update: {},
      create: {
        id: player.id,
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        shirtNumber: player.shirtNumber,
        teamId: player.teamId,
        photo: player.photo,
      },
    });
  }

  // Seed Matches
  for (const match of matches) {
    await prisma.match.upsert({
      where: { id: match.id },
      update: {},
      create: {
        id: match.id,
        date: match.date,
        homeTeamId: match.homeTeamId,
        awayTeamId: match.awayTeamId,
        homeGoals: match.homeGoals,
        awayGoals: match.awayGoals,
        venue: match.venue,
        status: match.status,
      },
    });
  }

  // Seed Standings
  for (const standing of standings) {
    await prisma.standing.upsert({
      where: { teamId: standing.teamId },
      update: {},
      create: {
        teamId: standing.teamId,
        position: standing.position,
        played: standing.played,
        won: standing.won,
        drawn: standing.drawn,
        lost: standing.lost,
        points: standing.points,
        goalsFor: standing.goalsFor,
        goalsAgainst: standing.goalsAgainst,
        goalDifference: standing.goalDifference,
      },
    });
  }
}

main()
  .then(() => {
    console.log('Database seeded successfully!');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error('Seed error:', e);
    prisma.$disconnect();
    process.exit(1);
  });
