import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { forumId: string } }) {
  const forum = await prisma.forum.findUnique({
    where: { id: Number(params.forumId) },
  });
  if (!forum) return NextResponse.json({ error: 'Forum not found' }, { status: 404 });
  return NextResponse.json(forum);
}
