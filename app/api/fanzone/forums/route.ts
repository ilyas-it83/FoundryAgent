import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(req: NextRequest) {
  const forums = await prisma.forum.findMany();
  return NextResponse.json(forums);
}
