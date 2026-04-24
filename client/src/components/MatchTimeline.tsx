import React from 'react';
import { Team } from '../pages/Matches';

export interface MatchEvent {
  id: number;
  minute: number;
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'start' | 'end' | 'penalty';
  team: 'home' | 'away';
  player: string;
  assist?: string;
  detail?: string;
}

const eventIcon = {
  goal: '⚽️',
  yellow_card: '🟨',
  red_card: '🟥',
  substitution: '🔄',
  start: '🕛',
  end: '🏁',
  penalty: '⚡️'
};

const eventLabel = {
  goal: 'Goal',
  yellow_card: 'Yellow Card',
  red_card: 'Red Card',
  substitution: 'Substitution',
  start: 'Kick Off',
  end: 'Full Time',
  penalty: 'Penalty Goal'
};

interface Props {
  events: MatchEvent[];
  homeTeam: Team;
  awayTeam: Team;
}

const MatchTimeline: React.FC<Props> = ({ events, homeTeam, awayTeam }) => {
  const timeline = [...events].sort((a, b) => a.minute - b.minute);
  return (
    <div className="max-w-full">
      <ul className="relative border-l border-gray-300 ml-6">
        {timeline.map(event => (
          <li key={event.id} className="mb-6 ml-4">
            <div className={`absolute w-3 h-3 ${event.team === 'home' ? 'bg-blue-400' : 'bg-red-400'} rounded-full -left-1.5 border border-white`}></div>
            <div className={`flex items-center gap-4 text-sm ${event.team === 'home' ? 'flex-row-reverse text-right' : ''}`}>
              <div className="font-bold min-w-[34px]"><span className="text-xs">{event.minute}'</span></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">{eventIcon[event.type]}</span>
                <span className="font-medium">{eventLabel[event.type]}</span>
                <span className="text-gray-600">{event.player}</span>
                {event.assist && <span className="text-gray-400 text-xs">(Assist: {event.assist})</span>}
                {event.detail && <span className="ml-1 text-xs text-gray-500">{event.detail}</span>}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${event.team === 'home' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>{event.team === 'home' ? homeTeam.name : awayTeam.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchTimeline;
