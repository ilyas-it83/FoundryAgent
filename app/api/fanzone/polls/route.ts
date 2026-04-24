import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  const polls = await prisma.poll.findMany({
    include: { options: { include: { votes: true } } },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(polls);
}

export async function POST(req: NextRequest) {
  const { question, options, authorId } = await req.json();
  const poll = await prisma.poll.create({
    data: {
      question,
      authorId,
      options: {
        create: options.map((text: string) => ({ text }))
      }
    },
    include: { options: true }
  });
  return NextResponse.json(poll);
}
