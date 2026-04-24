// pages/_middleware.ts
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (!navigator.onLine) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/_offline',
      }
    });
  }
}
