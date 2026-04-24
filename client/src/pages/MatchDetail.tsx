import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Match, Team, MatchStatus } from './Matches';
import MatchTimeline, { MatchEvent } from '../components/MatchTimeline';

interface MatchDetailResponse {
  match: Match & {
    events: MatchEvent[];
    venue: string;
    referee?: string;
  };
}

const MatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [match, setMatch] = useState<MatchDetailResponse["match"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchMatch() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/matches/${id}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data: MatchDetailResponse = await response.json();
        if (isMounted) {
          setMatch(data.match);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Network error');
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchMatch();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-700">{error}</div>;
  if (!match) return null;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
        <div className="flex items-center space-x-2">
          <img src={match.homeTeam.logoUrl} alt={match.homeTeam.name} className="w-9 h-9 object-contain" />
          <span className="font-semibold text-lg">{match.homeTeam.name}</span>
        </div>
        <div className="text-lg font-bold text-center min-w-20">
          <span>
            {match.scoreHome !== null && match.scoreAway !== null ?
              `${match.scoreHome} : ${match.scoreAway}` :
              match.status === 'fixture' ? <span className="text-sm text-gray-400">VS</span> :
              <span className="text-sm text-gray-300">-</span>
            }
          </span>
          <div className="text-xs text-gray-500">
            {new Date(match.date).toLocaleString()}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">{match.awayTeam.name}</span>
          <img src={match.awayTeam.logoUrl} alt={match.awayTeam.name} className="w-9 h-9 object-contain" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-500 text-sm">Venue: {match.venue}</div>
        {match.referee && (
          <div className="text-gray-500 text-sm">Referee: {match.referee}</div>
        )}
      </div>
      <div className="border-t mt-4 pt-6">
        <h2 className="text-xl font-semibold mb-4">Events Timeline</h2>
        <MatchTimeline events={match.events} homeTeam={match.homeTeam} awayTeam={match.awayTeam} />
      </div>
    </div>
  );
};

export default MatchDetail;
