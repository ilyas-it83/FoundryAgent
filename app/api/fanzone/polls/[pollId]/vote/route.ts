import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../lib/prisma';

export async function POST(req: NextRequest, { params }: { params: { pollId: string } }) {
  const { optionId, userId } = await req.json();
  // One vote per user per poll enforced
  const option = await prisma.pollOption.findUnique({
    where: { id: optionId },
    include: { poll: true }
  });
  if (!option) return NextResponse.json({ error: 'Option not found' }, { status: 404 });
  const pollId = option.pollId;
  const prevVote = await prisma.pollVote.findFirst({
    where: { userId, option: { pollId } }
  });
  if (prevVote) return NextResponse.json({ error: 'Already voted' }, { status: 400 });
  const vote = await prisma.pollVote.create({
    data: { userId, optionId }
  });
  return NextResponse.json(vote);
}
