'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Poll } from '../../../types/fanzone';

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/fanzone/polls').then(r => r.json()).then(data => {
      setPolls(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Polls</h2>
      <Link href="/fanzone/polls/new" className="mb-6 inline-block bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700">Create Poll</Link>
      {loading ? <p>Loading...</p> : (
        <ul className="space-y-5 mt-4">
          {polls.map((poll) => (
            <li key={poll.id} className="border rounded p-4 bg-white shadow">
              <Link href={`/fanzone/polls/${poll.id}`} className="text-blue-700 font-medium hover:underline text-lg">
                {poll.question}
              </Link>
              <div className="text-xs text-gray-500 mt-1">Created: {new Date(poll.createdAt).toLocaleDateString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
