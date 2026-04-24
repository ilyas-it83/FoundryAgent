import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { Category } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const {
      search = '',
      category,
      take = '10',
      skip = '0',
      sort = 'createdAt',
      order = 'desc',
    } = req.query;

    const where: any = {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } }
              ]
            }
          : {},
        category && category !== 'ALL' ? { category } : {}
      ]
    };
    try {
      const [news, count] = await Promise.all([
        prisma.news.findMany({
          where,
          skip: Number(skip),
          take: Number(take),
          orderBy: { [sort as string]: order === 'asc' ? 'asc' : 'desc' }
        }),
        prisma.news.count({ where })
      ]);
      res.json({ news, count });
    } catch (e) {
      res.status(500).json({ error: 'Failed to fetch news.' });
    }
  } else if (req.method === 'POST') {
    const { title, content, category, imageUrl } = req.body;
    if (!title || !content || !category) {
      res.status(400).json({ error: 'Missing required fields.' });
      return;
    }
    try {
      const created = await prisma.news.create({
        data: {
          title,
          content,
          category,
          imageUrl
        }
      });
      res.status(201).json(created);
    } catch (e) {
      res.status(500).json({ error: 'Failed to create news.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
