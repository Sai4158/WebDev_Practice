/* ------------------------------------------------------------------
   src/app/session/[id]/view/page.jsx – (Corrected)
-------------------------------------------------------------------*/
"use client";

import { useState } from "react"; // ✅ FIX: Added the missing import for useState
import { useParams } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";
import { FaCopy } from "react-icons/fa";

const fetcher = (url) => fetch(url).then((res) => res.json());

// --- Shared Colorful Ball Component ---
const Ball = ({ runs, isOut, isExtra }) => {
  const getBallStyle = () => {
    if (isOut) return "bg-rose-600 ring-rose-500";
    if (runs === 6) return "bg-purple-600 ring-purple-500";
    if (runs >= 4) return "bg-sky-500 ring-sky-400";
    if (isExtra) return "bg-yellow-500 text-black";
    if (runs > 0) return "bg-green-600";
    return "bg-zinc-600";
  };
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ring-1 ring-inset ring-black/20 ${getBallStyle()}`}
    >
      {isOut ? "W" : runs}
    </div>
  );
};

export default function ViewSessionPage() {
  const { id: sessionId } = useParams();

  // Step 1: Fetch the session to get the match ID
  const { data: session } = useSWR(
    sessionId ? `/api/sessions/${sessionId}` : null,
    fetcher
  );

  // Step 2: Conditionally fetch the match data, and poll for live updates
  const { data: match, error } = useSWR(
    () => (session?.match ? `/api/matches/${session.match}` : null),
    fetcher,
    { refreshInterval: 5000 }
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  // ✅ FIX: Handle the case where the ID in the URL is missing or "undefined"
  if (!sessionId) return <SplashMsg>No Session ID provided.</SplashMsg>;
  if (!session) return <SplashMsg>Loading Session...</SplashMsg>;
  if (!session.match)
    return <SplashMsg>The match hasn't started yet.</SplashMsg>;
  if (error) return <SplashMsg>Could not load match data.</SplashMsg>;
  if (!match) return <SplashMsg>Loading Live Score...</SplashMsg>;

  const isFirstInnings = match.innings === "first";
  const teamABatting =
    match.tossWinner === match.teamA[0] ? isFirstInnings : !isFirstInnings;
  const battingTeamName = teamABatting ? "Team A" : "Team B";
  const runRate =
    match.innings1?.history.length > 0
      ? (match.innings1.score / match.innings1.history.length).toFixed(2)
      : "0.00";

  return (
    <main className="min-h-screen bg-black text-white font-sans p-4 pb-10 flex flex-col items-center">
      <header className="w-full max-w-xl text-center my-8 relative">
        <Link
          href="/session"
          className="absolute top-2 left-2 text-amber-300 underline text-sm"
        >
          ← All Sessions
        </Link>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 text-zinc-400 hover:text-white"
        >
          <FaCopy />
        </button>
        <h1 className="text-4xl font-extrabold text-amber-300">
          Live Scoreboard
        </h1>
        <p className="text-zinc-300">{session.name}</p>
      </header>

      {/* Live Score */}
      <section className="w-full max-w-xl bg-black/50 backdrop-blur-sm ring-1 ring-zinc-700 rounded-3xl p-6 text-center space-y-2 shadow-2xl shadow-amber-700/20">
        <p className="text-xl font-bold text-white">
          🏏 {battingTeamName} Batting
        </p>
        <p className="text-7xl font-extrabold">
          {match.score}/{match.outs}
        </p>
        <div className="text-lg text-zinc-400">
          <span>
            Overs:{" "}
            {match[isFirstInnings ? "innings1" : "innings2"]?.history.length ??
              0}
          </span>
          <span className="mx-2">|</span>
          <span>Run Rate: {runRate}</span>
        </div>
      </section>

      {/* Team Cards with History */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <TeamCard
          title="Team A"
          players={match.teamA}
          inningsData={match.innings1}
        />
        <TeamCard
          title="Team B"
          players={match.teamB}
          inningsData={match.innings2}
        />
      </div>
    </main>
  );
}

const TeamCard = ({ title, players, inningsData }) => {
  const [showHistory, setShowHistory] = useState(true);
  const teamColor = title === "Team A" ? "text-sky-400" : "text-rose-400";
  return (
    <div className="bg-zinc-900/50 p-6 rounded-2xl ring-1 ring-zinc-800">
      <h2
        className={`text-2xl font-bold mb-4 flex justify-between items-center ${teamColor}`}
      >
        <span>{title}</span>
        <span className="text-white text-3xl font-mono">
          {inningsData?.score ?? 0}
        </span>
      </h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-zinc-300">Players</h3>
        <ul className="text-zinc-400 grid grid-cols-2 gap-1">
          {players.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setShowHistory((s) => !s)}
        className="text-amber-300 underline text-sm mb-4"
      >
        {showHistory ? "Hide" : "Show"} Over History
      </button>

      {showHistory && (
        <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
          {inningsData?.history.length > 0 ? (
            inningsData.history.map((over) => (
              <div key={over.overNumber}>
                <p className="font-semibold text-zinc-200">
                  Over {over.overNumber}
                </p>
                <div className="flex gap-2 flex-wrap mt-1">
                  {over.balls.map((ball, i) => (
                    <Ball key={i} {...ball} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-zinc-500">No overs bowled yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

const SplashMsg = ({ children }) => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-black text-amber-200 text-center px-4">
    <p className="text-xl">{children}</p>
    <Link href="/session" className="mt-6 underline text-lg">
      ← Back to sessions
    </Link>
  </main>
);
