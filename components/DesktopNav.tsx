// DesktopNav.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 items-center justify-between px-8 py-4">
      <Link href="/">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">FootballFan</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/news" className="text-gray-900 dark:text-white hover:underline text-lg">News</Link>
        <Link href="/matches" className="text-gray-900 dark:text-white hover:underline text-lg">Matches</Link>
        <Link href="/standings" className="text-gray-900 dark:text-white hover:underline text-lg">Standings</Link>
        <Link href="/profile" className="text-gray-900 dark:text-white hover:underline text-lg">Profile</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
