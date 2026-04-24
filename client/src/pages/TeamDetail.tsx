// TeamDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
type Player = {
  id: number;
  name: string;
  position: string;
  nationality: string;
  number: number;
  photo: string;
};
type Team = {
  id: number;
  name: string;
  logo: string;
  stadium: string;
  country: string;
  founded: number;
  squad: Player[];
};

const TeamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`/api/teams/${id}`);
        if (!res.ok) throw new Error('Failed to fetch team');
        const data = await res.json();
        setTeam(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading team...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  if (!team) return <div className="text-center mt-10">Team not found</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/teams" className="mb-4 text-blue-600 hover:underline">&larr; Back to Teams</Link>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow p-6 mb-6">
        <img src={team.logo} alt={team.name} className="w-32 h-32 object-cover rounded-full border" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{team.name}</h2>
          <div className="mb-2">Stadium: <span className="font-medium">{team.stadium}</span></div>
          <div className="mb-2">Country: <span className="font-medium">{team.country}</span></div>
          <div className="mb-2">Founded: <span className="font-medium">{team.founded}</span></div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Squad</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.squad.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default TeamDetail;