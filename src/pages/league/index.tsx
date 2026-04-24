import React, { useState } from "react";
import useSWR from "swr";
import { LeagueStanding, PlayerStats } from "../../types/league";
import { LeagueStandingsTable } from "../../components/LeagueStandingsTable";
import { PlayerStatsTable } from "../../components/PlayerStatsTable";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function LeaguePage() {
  const { data: standingsList = [], error: standingsError } = useSWR<LeagueStanding[]>("/api/standings", fetcher);
  const { data: playerStatsList = [], error: statsError } = useSWR<PlayerStats[]>("/api/player-stats", fetcher);

  // Sorting logic for standings
  const [standingsSortKey, setStandingsSortKey] = useState<keyof LeagueStanding>("position");
  const [standingsOrder, setStandingsOrder] = useState<"asc" | "desc">("asc");

  const [playerSortKey, setPlayerSortKey] = useState<keyof PlayerStats>("goals");
  const [playerOrder, setPlayerOrder] = useState<"desc" | "asc">("desc");

  function sortBy<T>(arr: T[], key: keyof T, order: "asc" | "desc") {
    return [...arr].sort((a, b) => {
      const v1 = a[key] as any;
      const v2 = b[key] as any;
      if (v1 < v2) return order === "asc" ? -1 : 1;
      else if (v1 > v2) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  const sortedStandings = sortBy(standingsList, standingsSortKey, standingsOrder);
  const sortedPlayerStats = sortBy(playerStatsList, playerSortKey, playerOrder);

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-12">
      <h1 className="text-3xl font-bold mb-4">League Standings</h1>
      {standingsError ? (
        <div className="text-red-600">Failed to load standings.</div>
      ) : (
        <LeagueStandingsTable
          standings={sortedStandings}
          sortKey={standingsSortKey}
          sortOrder={standingsOrder}
          onSort={key => {
            if (standingsSortKey === key) {
              setStandingsOrder(standingsOrder === "asc" ? "desc" : "asc");
            } else {
              setStandingsSortKey(key);
              setStandingsOrder("desc");
            }
          }}
        />
      )}

      <h2 className="text-2xl font-semibold mt-12 mb-4">Player Statistics</h2>
      {statsError ? (
        <div className="text-red-600">Failed to load player stats.</div>
      ) : (
        <PlayerStatsTable
          stats={sortedPlayerStats}
          sortKey={playerSortKey}
          sortOrder={playerOrder}
          onSort={key => {
            if (playerSortKey === key) {
              setPlayerOrder(playerOrder === "asc" ? "desc" : "asc");
            } else {
              setPlayerSortKey(key);
              setPlayerOrder("desc");
            }
          }}
        />
      )}
    </div>
  );
}
