import React from "react";
import { PlayerStats } from "../types/league";

interface PlayerStatsTableProps {
  stats: PlayerStats[];
  sortKey: keyof PlayerStats;
  sortOrder: "asc" | "desc";
  onSort: (key: keyof PlayerStats) => void;
}

const playerHeaders = [
  { label: "Player", key: "name" },
  { label: "Team", key: "teamName" },
  { label: "Appearances", key: "appearances" },
  { label: "Goals", key: "goals" },
  { label: "Assists", key: "assists" },
  { label: "Yellow Cards", key: "yellowCards" },
  { label: "Red Cards", key: "redCards" }
];

function arrow(order: "asc" | "desc", show: boolean) {
  if (!show) return null;
  return order === "asc" ? " \u2191" : " \u2193";
}

export const PlayerStatsTable: React.FC<PlayerStatsTableProps> = ({ stats, sortKey, sortOrder, onSort }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-gray-50">
        <tr>
          {playerHeaders.map(({ label, key }) => (
            <th
              key={key}
              className="px-3 py-2 cursor-pointer select-none font-semibold hover:text-blue-600"
              onClick={() => onSort(key as keyof PlayerStats)}
            >
              {label}{arrow(sortOrder, sortKey === key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stats.map(s => (
          <tr key={s.id} className="border-t">
            <td className="px-3 py-2 font-medium">{s.name}</td>
            <td className="px-3 py-2">{s.teamName}</td>
            <td className="px-3 py-2">{s.appearances}</td>
            <td className="px-3 py-2 font-bold">{s.goals}</td>
            <td className="px-3 py-2">{s.assists}</td>
            <td className="px-3 py-2">{s.yellowCards}</td>
            <td className="px-3 py-2">{s.redCards}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
