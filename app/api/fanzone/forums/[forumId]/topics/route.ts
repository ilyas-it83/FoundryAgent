import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { forumId: string } }) {
  const topics = await prisma.forumTopic.findMany({
    where: { forumId: Number(params.forumId) },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(topics);
}

export async function POST(req: NextRequest, { params }: { params: { forumId: string } }) {
  const { title, authorId } = await req.json();
  const topic = await prisma.forumTopic.create({
    data: {
      title,
      forumId: Number(params.forumId),
      authorId,
    }
  });
  return NextResponse.json(topic);
}
