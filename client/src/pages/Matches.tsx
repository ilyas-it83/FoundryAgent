import React, { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import { useNavigate } from 'react-router-dom';

export type MatchStatus = 'fixture' | 'live' | 'result';

export interface Team {
  id: number;
  name: string;
  logoUrl: string;
}

export interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  status: MatchStatus;
  scoreHome: number | null;
  scoreAway: number | null;
}

const tabOptions = [
  { key: 'fixture', label: 'Fixtures' },
  { key: 'live', label: 'Live' },
  { key: 'result', label: 'Results' }
];

const apiEndpointByTab = {
  fixture: '/api/fixtures',
  live: '/api/matches?status=live',
  result: '/api/matches?status=result'
};

const Matches: React.FC = () => {
  const [tab, setTab] = useState<MatchStatus>('fixture');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    async function fetchMatches() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiEndpointByTab[tab]);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) {
          setMatches(data.matches || []);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Network error');
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchMatches();
    return () => {
      isMounted = false;
    };
  }, [tab]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Match Center</h1>
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
          {tabOptions.map(option => (
            <button
              key={option.key}
              className={`px-4 py-2 rounded transition font-semibold ${
                tab === option.key ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTab(option.key as MatchStatus)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {loading && <div className="text-center text-gray-500 py-10">Loading...</div>}
      {error && (
        <div className="text-center text-red-600 font-semibold mb-4">{error}</div>
      )}
      {!loading && !error && matches.length === 0 && (
        <div className="text-center text-gray-500 py-10">No matches found.</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map(match => (
          <div key={match.id} onClick={() => navigate(`/matches/${match.id}`)} className="cursor-pointer">
            <MatchCard match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
