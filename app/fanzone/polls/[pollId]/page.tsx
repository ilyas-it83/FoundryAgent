'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import type { Poll, PollOption } from '../../../../types/fanzone';

export default function PollDetailPage() {
  const params = useParams();
  const pollId = Number(params.pollId);
  const [poll, setPoll] = useState<Poll | null>(null);
  const [votedOptionId, setVotedOptionId] = useState<number | null>(null);
  const [voteLoading, setVoteLoading] = useState(false);
  const [resultView, setResultView] = useState(false);

  const authorId = 1; // Demo

  useEffect(() => {
    fetch(`/api/fanzone/polls/${pollId}`).then(r => r.json()).then(setPoll);
  }, [pollId]);

  const handleVote = async (optionId: number) => {
    setVoteLoading(true);
    await fetch(`/api/fanzone/polls/${pollId}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ optionId, userId: authorId })
    });
    setVotedOptionId(optionId);
    // Refresh poll for updated votes
    fetch(`/api/fanzone/polls/${pollId}`).then(r => r.json()).then(setPoll);
    setVoteLoading(false);
    setResultView(true);
  };

  const totalVotes = poll?.options.reduce((acc, opt) => acc + (opt.votes ? opt.votes.length : 0), 0) || 0;

  return (
    <div>
      {poll ? (
        <>
          <h2 className="text-xl font-bold mb-2">{poll.question}</h2>
          {!resultView ? (
            <ul className="space-y-2 mt-3">
              {poll.options.map(opt => (
                <li key={opt.id}>
                  <button
                    disabled={voteLoading}
                    className="border rounded px-4 py-2 bg-gray-50 w-full text-left hover:bg-blue-50"
                    onClick={() => handleVote(opt.id)}
                  >{opt.text}</button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5">
              <h3 className="font-semibold mb-3">Results</h3>
              <ul>
                {poll.options.map(opt => {
                  const votes = opt.votes ? opt.votes.length : 0;
                  return (
                    <li key={opt.id} className="mb-2">
                      <div className="flex items-center justify-between">
                        <span>{opt.text}</span>
                        <span className="text-sm text-gray-500">{votes} vote{votes !== 1 ? 's' : ''}</span>
                      </div>
                      {totalVotes > 0 && (
                        <div className="bg-blue-100 rounded h-3 mt-1">
                          <div className="bg-blue-600 h-3 rounded" style={{ width: `${votes / totalVotes * 100}%` }} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="text-xs text-gray-500 mt-2">Total votes: {totalVotes}</div>
            </div>
          )}
          {!resultView && <button className="mt-4 text-blue-600 hover:underline" onClick={() => setResultView(true)}>View Results</button>}
        </>
      ) : <p>Loading...</p>}
    </div>
  );
}
