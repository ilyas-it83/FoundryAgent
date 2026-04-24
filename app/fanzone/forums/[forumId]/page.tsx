'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Forum, ForumTopic } from '../../../../types/fanzone';

export default function ForumDetailPage() {
  const params = useParams();
  const forumId = Number(params.forumId);
  const [forum, setForum] = useState<Forum | null>(null);
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const forum = await fetch(`/api/fanzone/forums/${forumId}`).then(r => r.json());
      const topics = await fetch(`/api/fanzone/forums/${forumId}/topics`).then(r => r.json());
      setForum(forum);
      setTopics(topics);
      setLoading(false);
    })();
  }, [forumId]);

  return (
    <div>
      {loading ? <p>Loading...</p> : forum && (
        <>
          <h2 className="text-2xl font-bold mb-2">{forum.title}</h2>
          <p className="mb-6 text-gray-700">{forum.description}</p>
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Topics</h3>
            <Link href={`/fanzone/forums/${forumId}/new-topic`} className="bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700">New Topic</Link>
          </div>
          {topics.length === 0 ? <p>No topics yet. Be first to post!</p> : (
            <ul className="space-y-2">
              {topics.map(topic => (
                <li key={topic.id} className="border rounded p-3 bg-gray-50">
                  <Link href={`/fanzone/forums/${forumId}/topics/${topic.id}`} className="text-blue-700 font-medium hover:underline">
                    {topic.title}
                  </Link>{' '}
                  <span className="text-xs text-gray-500">by User #{topic.authorId} on {new Date(topic.createdAt).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
