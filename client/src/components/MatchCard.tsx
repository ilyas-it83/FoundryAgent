import React from 'react';
import { Match } from '../pages/Matches';

const statusLabel = {
  fixture: 'Upcoming',
  live: 'Live',
  result: 'Finished'
};

const statusStyles = {
  fixture: 'bg-gray-200 text-gray-700',
  live: 'bg-red-500 text-white animate-pulse',
  result: 'bg-green-500 text-white'
};

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div
      className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition drop-shadow cursor-pointer flex flex-col h-full"
      tabIndex={0}
    >
      <div className="flex items-center justify-between px-4 pt-4">
        <span className={`text-xs px-2 py-1 rounded-full font-semibold tracking-wide ${statusStyles[match.status]}`}> 
          {statusLabel[match.status]}
        </span>
        <span className="text-xs text-gray-400">{new Date(match.date).toLocaleDateString([], { month: 'short', day: '2-digit' })}</span>
      </div>
      <div className="flex items-center justify-between px-4 py-5 gap-2">
        <div className="flex flex-col items-center">
          <img src={match.homeTeam.logoUrl} alt={match.homeTeam.name} className="w-8 h-8 object-contain mb-1" />
          <span className="text-xs text-gray-700 font-semibold">{match.homeTeam.name}</span>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <div className="text-xl font-bold">
            {match.scoreHome !== null && match.scoreAway !== null ? (
              <span>{match.scoreHome} : {match.scoreAway}</span>
            ) : (
              <span className="text-gray-400 text-base">VS</span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={match.awayTeam.logoUrl} alt={match.awayTeam.name} className="w-8 h-8 object-contain mb-1" />
          <span className="text-xs text-gray-700 font-semibold">{match.awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
