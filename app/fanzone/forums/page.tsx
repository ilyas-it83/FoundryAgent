'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ForumCategory, Forum } from '../../../types/fanzone';

export default function ForumsPage() {
  const [categories, setCategories] = useState<ForumCategory[]>([]);
  const [forums, setForums] = useState<Forum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/fanzone/forums/categories').then(r => r.json()),
      fetch('/api/fanzone/forums').then(r => r.json()),
    ]).then(([cats, forums]) => {
      setCategories(cats);
      setForums(forums);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Community Forums</h2>
      {loading ? <p>Loading...</p> : (
        <div className="space-y-8">
          {categories.map(cat => (
            <div key={cat.id}>
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <ul className="space-y-2">
                {forums.filter(f => f.categoryId === cat.id).map(forum => (
                  <li key={forum.id} className="border rounded p-4 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <Link href={`/fanzone/forums/${forum.id}`} className="font-medium text-blue-700 hover:underline">
                        {forum.title}
                      </Link>
                      <p className="text-sm text-gray-600">{forum.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
