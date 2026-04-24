import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { topicId: string } }) {
  const topic = await prisma.forumTopic.findUnique({
    where: { id: Number(params.topicId) },
  });
  if (!topic) return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
  return NextResponse.json(topic);
}
