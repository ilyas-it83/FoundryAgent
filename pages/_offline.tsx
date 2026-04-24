// pages/_offline.tsx
export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold mb-4">You're offline</h1>
      <p className="text-lg">Please try reconnecting to the internet.</p>
    </div>
  );
}
