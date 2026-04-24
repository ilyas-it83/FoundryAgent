'use client';
import React, { useEffect, useState } from 'react';

import type { MatchPrediction } from '../../../types/fanzone';

const demoMatches = [
  'Arsenal vs Chelsea',
  'Man United vs Liverpool',
  'Barcelona vs Real Madrid',
];

export default function PredictionsPage() {
  const [predictions, setPredictions] = useState<MatchPrediction[]>([]);
  const [selectedMatch, setSelectedMatch] = useState(demoMatches[0]);
  const [winner, setWinner] = useState('');
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const userId = 1;

  useEffect(() => {
    fetch('/api/fanzone/predictions')
      .then(r => r.json())
      .then(data => setPredictions(data));
  }, [refresh]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/fanzone/predictions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ match: selectedMatch, predictedWinner: winner, userId })
    });
    setWinner('');
    setLoading(false);
    setRefresh(x => x+1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Predict Match Winners</h2>
      <form onSubmit={handleSubmit} className="bg-white border rounded p-4 max-w-xl mb-7">
        <div className="mb-2">
          <label className="block font-medium mb-1">Pick a Match</label>
          <select value={selectedMatch} onChange={e => setSelectedMatch(e.target.value)} className="w-full border rounded px-3 py-2">
            {demoMatches.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="mb-2">
          <label className="block font-medium mb-1">Your Predicted Winner</label>
          <input type="text" required value={winner} onChange={e => setWinner(e.target.value)} className="w-full border rounded px-3 py-2"/>
        </div>
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {loading ? 'Submitting...' : 'Submit Prediction'}
        </button>
      </form>
      <h3 className="text-lg font-semibold mb-3">Community Predictions</h3>
      <ul className="space-y-3">
        {predictions.map(pred => (
          <li key={pred.id} className="bg-gray-100 rounded px-4 py-2 flex justify-between items-center">
            <span>{pred.match}: <span className="font-semibold text-blue-700">{pred.predictedWinner}</span></span>
            <span className="text-xs text-gray-500">by User #{pred.userId}</span>
          </li>
        ))}
        {predictions.length === 0 && <li>No predictions yet.</li>}
      </ul>
    </div>
  );
}
