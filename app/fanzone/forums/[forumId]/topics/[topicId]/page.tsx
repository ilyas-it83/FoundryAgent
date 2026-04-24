'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import type { ForumTopic, ForumPost } from '../../../../../types/fanzone';

export default function ForumTopicPage() {
  const params = useParams();
  const forumId = Number(params.forumId);
  const topicId = Number(params.topicId);

  const [topic, setTopic] = useState<ForumTopic | null>(null);
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const authorId = 1; // demo
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      const topic = await fetch(`/api/fanzone/forums/${forumId}/topics/${topicId}`).then(r => r.json());
      const posts = await fetch(`/api/fanzone/forums/${forumId}/topics/${topicId}/posts`).then(r => r.json());
      setTopic(topic);
      setPosts(posts);
      setLoading(false);
    })();
  }, [forumId, topicId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch(`/api/fanzone/forums/${forumId}/topics/${topicId}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, authorId }),
    });
    setContent('');
    // Refresh posts
    const updated = await fetch(`/api/fanzone/forums/${forumId}/topics/${topicId}/posts`).then(r => r.json());
    setPosts(updated);
    setSubmitting(false);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : topic && (
        <>
          <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
          <ul className="space-y-4 mt-4 mb-7">
            {posts.map(post => (
              <li key={post.id} className="border rounded p-3 bg-gray-50">
                <div className="text-gray-700">{post.content}</div>
                <div className="text-xs text-gray-500 mt-1">by User #{post.authorId} on {new Date(post.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <textarea value={content} required minLength={2}
              onChange={e => setContent(e.target.value)}
              placeholder="Write a reply..."
              className="flex-grow border px-3 py-2 rounded resize-none"
            />
            <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              {submitting ? 'Posting...' : 'Reply'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
