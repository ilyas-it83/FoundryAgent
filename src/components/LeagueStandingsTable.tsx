import React from "react";
import { LeagueStanding } from "../types/league";

interface LeagueStandingsTableProps {
  standings: LeagueStanding[];
  sortKey: keyof LeagueStanding;
  sortOrder: "asc" | "desc";
  onSort: (key: keyof LeagueStanding) => void;
}

const tableHeaders = [
  { label: "Position", key: "position" },
  { label: "Team", key: "teamName" },
  { label: "Played", key: "played" },
  { label: "Wins", key: "wins" },
  { label: "Draws", key: "draws" },
  { label: "Losses", key: "losses" },
  { label: "GF", key: "goalsFor" },
  { label: "GA", key: "goalsAgainst" },
  { label: "GD", key: "goalDifference" },
  { label: "Points", key: "points" }
];

function arrow(order: "asc" | "desc", show: boolean) {
  if (!show) return null;
  return order === "asc" ? " \u2191" : " \u2193";
}

export const LeagueStandingsTable: React.FC<LeagueStandingsTableProps> = ({
  standings,
  sortKey,
  sortOrder,
  onSort
}) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-gray-50">
        <tr>
          {tableHeaders.map(({ label, key }) => (
            <th
              key={key}
              className="px-3 py-2 cursor-pointer select-none font-semibold hover:text-blue-600"
              onClick={() => onSort(key as keyof LeagueStanding)}
            >
              {label}{arrow(sortOrder, sortKey === key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {standings.map(s => (
          <tr key={s.teamId} className="border-t">
            <td className="px-3 py-2">{s.position}</td>
            <td className="px-3 py-2 font-medium">{s.teamName}</td>
            <td className="px-3 py-2">{s.played}</td>
            <td className="px-3 py-2">{s.wins}</td>
            <td className="px-3 py-2">{s.draws}</td>
            <td className="px-3 py-2">{s.losses}</td>
            <td className="px-3 py-2">{s.goalsFor}</td>
            <td className="px-3 py-2">{s.goalsAgainst}</td>
            <td className="px-3 py-2">{s.goalDifference}</td>
            <td className="px-3 py-2 font-bold">{s.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
