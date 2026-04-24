import React from 'react';

export default function FanZoneLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Fan Zone</h1>
      <nav className="mb-8 flex gap-6 border-b pb-2">
        <a href="/fanzone/forums" className="hover:text-blue-600">Forums</a>
        <a href="/fanzone/polls" className="hover:text-blue-600">Polls</a>
        <a href="/fanzone/predictions" className="hover:text-blue-600">Match Predictions</a>
      </nav>
      {children}
    </section>
  );
}
