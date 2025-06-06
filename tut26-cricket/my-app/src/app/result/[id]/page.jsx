/* ------------------------------------------------------------------
   src/app/results/[id]/page.jsx – (Final, Redesigned Dark Version)
-------------------------------------------------------------------*/
"use client";

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { motion } from "framer-motion";
import { FaTrophy, FaChartBar, FaUsers, FaArrowLeft } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

// --- Helper function to analyze an innings history ---
const calculateInningsStats = (innings) => {
  // Return default stats if innings data is missing
  if (!innings || !innings.history) {
    return {
      fours: 0,
      sixes: 0,
      dots: 0,
      extras: 0,
      wides: 0,
      runRate: "0.00",
    };
  }

  const allBalls = innings.history.flatMap((o) => o.balls);
  const legalBalls = allBalls.filter(
    (b) => b.extraType !== "wide" && b.extraType !== "noball"
  ).length;

  // ✅ FIX: Correct and safe run rate calculation
  const oversFaced = legalBalls / 6;
  const runRate =
    oversFaced > 0 ? (innings.score / oversFaced).toFixed(2) : "0.00";

  const stats = {
    fours: allBalls.filter((b) => b.runs === 4).length,
    sixes: allBalls.filter((b) => b.runs === 6).length,
    dots: allBalls.filter((b) => b.runs === 0 && !b.extraType).length,
    wides: allBalls.filter((b) => b.extraType === "wide").length,
    extras: allBalls
      .filter((b) => b.isExtra)
      .reduce((acc, ball) => acc + ball.runs, 0),
    runRate: runRate,
  };
  return stats;
};

// --- UI Sub-components for the Results Page ---

const StatItem = ({ label, value }) => (
  <div className="flex justify-between items-baseline text-zinc-300">
    <span>{label}</span>
    <span className="font-bold text-lg text-white">{value}</span>
  </div>
);

const CongratulationsCard = ({ result }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-2xl shadow-2xl shadow-amber-500/10 text-center"
  >
    <FaTrophy className="mx-auto text-6xl mb-4 text-yellow-300" />
    <h1 className="text-4xl font-extrabold tracking-tight">Congratulations!</h1>
    <p className="text-2xl mt-2 font-medium">{result}</p>
  </motion.div>
);

const Scorecard = ({ innings1, innings2, tossWinner }) => (
  <div className="bg-zinc-900/50 rounded-2xl shadow-lg p-6 space-y-4 ring-1 ring-white/10">
    <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
      <GiCricketBat /> Scorecard
    </h2>
    <div className="space-y-3">
      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded-lg">
        <span className="font-bold text-lg text-zinc-200">
          {innings1.team}'s Team
        </span>
        <span className="font-mono text-xl font-extrabold text-white">
          {innings1.score}/
          {
            innings1.history.flatMap((o) => o.balls).filter((b) => b.isOut)
              .length
          }
        </span>
      </div>
      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded-lg">
        <span className="font-bold text-lg text-zinc-200">
          {innings2.team}'s Team
        </span>
        <span className="font-mono text-xl font-extrabold text-white">
          {innings2.score}/
          {
            innings2.history.flatMap((o) => o.balls).filter((b) => b.isOut)
              .length
          }
        </span>
      </div>
    </div>
    <p className="text-center text-sm text-zinc-400 pt-3 border-t border-white/10">
      Toss won by{" "}
      <span className="font-semibold text-zinc-200">{tossWinner}</span>.
    </p>
  </div>
);

const MatchStats = ({ stats1, stats2, team1Name, team2Name }) => (
  <div className="bg-zinc-900/50 rounded-2xl shadow-lg p-6 ring-1 ring-white/10">
    <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2 mb-6">
      <FaChartBar /> Match Statistics
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-center text-blue-400 mb-3">
          {team1Name}'s Team
        </h3>
        <StatItem label="Run Rate" value={stats1.runRate} />
        <StatItem label="Fours" value={stats1.fours} />
        <StatItem label="Sixes" value={stats1.sixes} />
        <StatItem label="Wides" value={stats1.wides} />
        <StatItem label="Dot Balls" value={stats1.dots} />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-center text-red-400 mb-3">
          {team2Name}'s Team
        </h3>
        <StatItem label="Run Rate" value={stats2.runRate} />
        <StatItem label="Fours" value={stats2.fours} />
        <StatItem label="Sixes" value={stats2.sixes} />
        <StatItem label="Wides" value={stats2.wides} />
        <StatItem label="Dot Balls" value={stats2.dots} />
      </div>
    </div>
  </div>
);

const PlayerLists = ({ teamA, teamB, team1Name, team2Name }) => (
  <div className="bg-zinc-900/50 rounded-2xl shadow-lg p-6 ring-1 ring-white/10">
    <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2 mb-6">
      <FaUsers /> Players
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold text-blue-400 mb-2">{team1Name}'s Team</h3>
        <ul className="list-disc list-inside text-zinc-300">
          {teamA.map((player, i) => (
            <li key={i}>{player}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-red-400 mb-2">{team2Name}'s Team</h3>
        <ul className="list-disc list-inside text-zinc-300">
          {teamB.map((player, i) => (
            <li key={i}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function ResultPage() {
  const { id: matchId } = useParams();
  const router = useRouter();
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {
    data: match,
    error,
    isLoading,
  } = useSWR(matchId ? `/api/matches/${matchId}` : null, fetcher);

  const loadingScreen = (
    <main className="min-h-screen bg-zinc-950 p-4 sm:p-8 text-zinc-300 font-sans flex items-center justify-center">
      <div className="text-center space-y-2">
        <p>Loading Results...</p>
      </div>
    </main>
  );

  if (error)
    return (
      <main className="min-h-screen bg-zinc-950 p-4 sm:p-8 text-zinc-300 font-sans flex items-center justify-center">
        <div className="text-center text-red-400">
          Failed to load match results.
        </div>
      </main>
    );

  if (!match || isLoading) return loadingScreen;

  // Calculate stats once data is available
  const innings1Stats = calculateInningsStats(match.innings1);
  const innings2Stats = calculateInningsStats(match.innings2);

  return (
    <main className="min-h-screen bg-zinc-950 p-4 sm:p-8 text-zinc-300 font-sans mt-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {match.result && <CongratulationsCard result={match.result} />}

        <Scorecard
          innings1={match.innings1}
          innings2={match.innings2}
          tossWinner={match.tossWinner}
        />

        <MatchStats
          stats1={innings1Stats}
          stats2={innings2Stats}
          team1Name={match.innings1.team}
          team2Name={match.innings2.team}
        />

        <PlayerLists
          teamA={match.teamA}
          teamB={match.teamB}
          team1Name={match.innings1.team}
          team2Name={match.innings2.team}
        />

        <div className="text-center pt-4">
          <button
            onClick={() => router.push("/session")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-500 transition-colors"
          >
            View match history
          </button>
          <br />
          <br />
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 mb-5 rounded-xl shadow-lg hover:bg-blue-500 transition-colors"
          >
            <FaArrowLeft />
            Back to Home
          </button>
          <br />
          <br />
        </div>
      </div>
    </main>
  );
}
