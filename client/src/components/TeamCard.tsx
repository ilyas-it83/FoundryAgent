// TeamCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
type Team = {
  id: number;
  name: string;
  logo: string;
  stadium: string;
  country: string;
  founded: number;
};

const TeamCard: React.FC<{ team: Team }> = ({ team }) => (
  <Link to={`/teams/${team.id}`} className="block bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
    <div className="flex flex-col items-center p-6">
      <img src={team.logo} alt={team.name} className="w-20 h-20 object-cover rounded-full border mb-4" />
      <h2 className="text-lg font-bold mb-2 text-center line-clamp-1">{team.name}</h2>
      <div className="text-sm text-gray-500 mb-1">{team.country}</div>
      <div className="text-sm mb-1">Stadium: <span className="font-medium">{team.stadium}</span></div>
      <div className="text-sm">Founded: <span className="font-medium">{team.founded}</span></div>
    </div>
  </Link>
);

export default TeamCard;