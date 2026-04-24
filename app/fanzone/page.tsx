import React from 'react';
import Link from 'next/link';

export default function FanZoneHomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-2">Welcome to the Fan Zone!</h2>
      <p className="mb-4">Join the community: discuss, vote, and predict the scores! Choose a section below:</p>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <li className="border rounded-lg p-6 shadow bg-white hover:shadow-md transition">
          <Link href="/fanzone/forums" className="text-xl font-medium text-blue-700 hover:underline">Community Forums</Link>
          <p className="text-sm text-gray-600 mt-2">Talk football, start topics, reply in threads.</p>
        </li>
        <li className="border rounded-lg p-6 shadow bg-white hover:shadow-md transition">
          <Link href="/fanzone/polls" className="text-xl font-medium text-blue-700 hover:underline">Polls</Link>
          <p className="text-sm text-gray-600 mt-2">Vote on club matters and see the results.</p>
        </li>
        <li className="border rounded-lg p-6 shadow bg-white hover:shadow-md transition">
          <Link href="/fanzone/predictions" className="text-xl font-medium text-blue-700 hover:underline">Match Predictions</Link>
          <p className="text-sm text-gray-600 mt-2">Compete by predicting match outcomes.</p>
        </li>
      </ul>
    </div>
  );
}
