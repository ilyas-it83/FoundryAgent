// PlayerCard.tsx
import React from 'react';
type Player = {
  id: number;
  name: string;
  position: string;
  nationality: string;
  number: number;
  photo: string;
};

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <div className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
    <img src={player.photo} alt={player.name} className="w-16 h-16 object-cover rounded-full mb-2 border" />
    <div className="text-base font-semibold mb-1">{player.name}</div>
    <div className="text-sm text-gray-500 mb-1">{player.position}</div>
    <div className="text-sm">Nationality: {player.nationality}</div>
    <div className="text-sm">Number: <span className="font-medium">{player.number}</span></div>
  </div>
);

export default PlayerCard;