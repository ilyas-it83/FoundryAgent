'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPollPage() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '']);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const authorId = 1;

  const handleOptionChange = (idx: number, value: string) => {
    const updated = options.slice();
    updated[idx] = value;
    setOptions(updated);
  };

  const handleAdd = () => {
    setOptions([...options, '']);
  };
  const handleRemove = (idx: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== idx));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/fanzone/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, options, authorId }),
    }).then(res => res.json()).then(poll => {
      router.push(`/fanzone/polls/${poll.id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Poll</h2>
      <div className="mb-3">
        <label className="block font-medium mb-1">Question</label>
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} required className="w-full border rounded px-3 py-2"/>
      </div>
      <div className="mb-3">
        <label className="block font-medium mb-1">Options</label>
        <ul className="space-y-2">
          {options.map((opt, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <input type="text" required value={opt} onChange={e => handleOptionChange(idx, e.target.value)} className="flex-1 border rounded px-2 py-1" />
              {options.length > 2 && <button type="button" onClick={() => handleRemove(idx)} className="text-red-600 hover:underline">Remove</button>}
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAdd} className="mt-2 text-blue-600 hover:underline">+ Add Option</button>
      </div>
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {loading ? 'Creating...' : 'Create Poll'}
      </button>
    </form>
  );
}
