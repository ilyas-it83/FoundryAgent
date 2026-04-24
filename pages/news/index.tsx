import React from 'react';
import NewsFeed from '../../components/news/NewsFeed';
import Head from 'next/head';

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Football Fan | News & Updates</title>
        <meta name="description" content="Latest football news, transfers, interviews and more." />
      </Head>
      <main className="min-h-screen bg-gray-50 pt-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">News & Updates</h1>
          <NewsFeed />
        </div>
      </main>
    </>
  );
}
