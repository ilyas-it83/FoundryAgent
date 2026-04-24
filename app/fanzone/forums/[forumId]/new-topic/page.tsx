'use client';
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function NewTopicPage() {
  const params = useParams();
  const forumId = Number(params.forumId);
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // For now, demo user is userId 1
  const authorId = 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const topicRes = await fetch(`/api/fanzone/forums/${forumId}/topics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, authorId }),
    });
    const topic = await topicRes.json();
    await fetch(`/api/fanzone/forums/${forumId}/topics/${topic.id}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, authorId }),
    });
    setLoading(false);
    router.push(`/fanzone/forums/${forumId}/topics/${topic.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Start a New Topic</h2>
      <div className="mb-3">
        <label className="font-medium block mb-1">Topic Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full border rounded px-3 py-2"/>
      </div>
      <div className="mb-3">
        <label className="font-medium block mb-1">Message</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} required className="w-full border rounded px-3 py-2 min-h-[120px]"/>
      </div>
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-70">
        {loading ? 'Posting...' : 'Post Topic'}
      </button>
    </form>
  );
}
