import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  const predictions = await prisma.matchPrediction.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
  return NextResponse.json(predictions);
}

export async function POST(req: NextRequest) {
  const { match, predictedWinner, userId } = await req.json();
  const prediction = await prisma.matchPrediction.create({
    data: { match, predictedWinner, userId },
  });
  return NextResponse.json(prediction);
}
