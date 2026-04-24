import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { pollId: string } }) {
  const poll = await prisma.poll.findUnique({
    where: { id: Number(params.pollId) },
    include: {
      options: { include: { votes: true } },
    },
  });
  if (!poll) return NextResponse.json({ error: 'Poll not found'}, { status: 404 });
  return NextResponse.json(poll);
}
