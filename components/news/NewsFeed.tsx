import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsCategoryTabs from './NewsCategoryTabs';
import { News } from '../../types/news';

interface FeedResponse {
  news: News[];
  count: number;
}

const PAGE_SIZE = 10;

export default function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<FeedResponse>({ news: [], count: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const params = new URLSearchParams({
      take: PAGE_SIZE.toString(),
      skip: (page * PAGE_SIZE).toString(),
      sort: 'createdAt',
      order: 'desc',
    });
    if (selectedCategory !== 'ALL') params.append('category', selectedCategory);
    if (search) params.append('search', search);
    const res = await fetch(`/api/news?${params.toString()}`);
    setLoading(false);
    if (res.ok) {
      setResults(await res.json());
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [selectedCategory, search, page]);

  return (
    <section className="max-w-2xl mx-auto pt-4 pb-4">
      <NewsCategoryTabs
        selected={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setPage(0);
        }}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(0);
          fetchNews();
        }}
        className="mb-4 flex items-center gap-2"
      >
        <input
          className="border border-gray-300 rounded px-3 py-2 flex-1"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="space-y-4">
          {results.news.length === 0 ? (
            <div className="text-center text-gray-500">No news found.</div>
          ) : (
            results.news.map((n) => <NewsCard key={n.id} news={n} />)
          )}
        </div>
      )}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-3 py-1 rounded border bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {page + 1} / {Math.ceil(results.count / PAGE_SIZE) || 1}
        </span>
        <button
          disabled={(page + 1) * PAGE_SIZE >= results.count}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 rounded border bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
