import React, { useEffect, useState } from "react";

type MatchScore = {
  id: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  status: string;
  time: string;
};

const LiveScoresTicker: React.FC = () => {
  const [scores, setScores] = useState<MatchScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchScores = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/scores");
        if (!res.ok) throw new Error("Unable to fetch live scores");
        if (!isMounted) return;
        const data = await res.json();
        setScores(data.scores);
        setErr("");
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchScores();
    const interval = setInterval(fetchScores, 30000); // Refresh every 30s
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading)
    return (
      <div className="w-full flex items-center justify-center h-16 bg-white rounded shadow">
        <span className="text-gray-500 animate-pulse">Loading live scores...</span>
      </div>
    );
  if (err)
    return (
      <div className="w-full flex items-center justify-center h-16 bg-red-50 rounded shadow">
        <span className="text-red-500">{err}</span>
      </div>
    );
  if (!scores.length)
    return (
      <div className="w-full flex items-center justify-center h-16 bg-yellow-50 rounded shadow">
        <span className="text-yellow-600">No live matches at the moment.</span>
      </div>
    );

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden border rounded shadow bg-white">
      <div
        className="flex items-center h-14 w-max animate-marquee whitespace-nowrap [animation-duration:30s]"
        style={{ minWidth: "100%" }}
      >
        {scores.map(match => (
          <span key={match.id} className="flex items-center mx-8 text-sm md:text-base font-semibold">
            <span className="text-green-700 mr-1">⚽</span>
            <span>{match.home}</span>
            <span className="mx-2 text-green-800">{match.homeScore} - {match.awayScore}</span>
            <span>{match.away}</span>
            <span className="ml-2 px-2 rounded text-xs bg-green-100 text-green-800">
              {match.status === "LIVE" ? `${match.status} ${match.time}` : match.status}
            </span>
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LiveScoresTicker;
