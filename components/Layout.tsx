// Layout.tsx
import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <DesktopNav />
      <MobileNav />
      <main className="p-4 md:p-8 pt-6">
        {children}
      </main>
    </div>
  );
}
