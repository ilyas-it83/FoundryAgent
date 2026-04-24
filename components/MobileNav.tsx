// MobileNav.tsx
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">FootballFan</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-2 px-4 pb-4">
          <Link href="/news" className="py-2 text-gray-900 dark:text-white hover:underline">News</Link>
          <Link href="/matches" className="py-2 text-gray-900 dark:text-white hover:underline">Matches</Link>
          <Link href="/standings" className="py-2 text-gray-900 dark:text-white hover:underline">Standings</Link>
          <Link href="/profile" className="py-2 text-gray-900 dark:text-white hover:underline">Profile</Link>
        </div>
      )}
    </nav>
  );
}
