import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { topicId: string } }) {
  const posts = await prisma.forumPost.findMany({
    where: { topicId: Number(params.topicId) },
    orderBy: { createdAt: 'asc' },
  });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest, { params }: { params: { topicId: string } }) {
  const { content, authorId } = await req.json();
  const post = await prisma.forumPost.create({
    data: {
      content,
      topicId: Number(params.topicId),
      authorId,
    }
  });
  return NextResponse.json(post);
}
