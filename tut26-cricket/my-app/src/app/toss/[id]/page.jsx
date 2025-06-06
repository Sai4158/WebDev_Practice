/* ------------------------------------------------------------------
   src/app/toss/[id]/page.jsx – (Updated with Redo & 20s Timer)
-------------------------------------------------------------------*/
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaRedo } from "react-icons/fa";

// --- Updated & Bigger SVG Coin Components ---
const CoinHeads = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="#ffc700"
      stroke="#b38b00"
      strokeWidth="4"
    />
    <text
      x="50"
      y="58"
      fontFamily="Arial, sans-serif"
      fontSize="22"
      fill="#664d00"
      textAnchor="middle"
      fontWeight="bold"
    >
      HEADS
    </text>
  </svg>
);
const CoinTails = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="#cccccc"
      stroke="#8e8e8e"
      strokeWidth="4"
    />
    <text
      x="50"
      y="58"
      fontFamily="Arial, sans-serif"
      fontSize="22"
      fill="#4f4f4f"
      textAnchor="middle"
      fontWeight="bold"
    >
      TAILS
    </text>
  </svg>
);
const SpinningCoin = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="url(#grad)"
      stroke="#b38b00"
      strokeWidth="4"
    />
    <defs>
      <radialGradient id="grad">
        <stop offset="0%" stopColor="#ffc700" />
        <stop offset="100%" stopColor="#b38b00" />
      </radialGradient>
    </defs>
  </svg>
);

export default function TossPage() {
  const { id: matchId } = useParams();
  const router = useRouter();

  // State Management
  const [status, setStatus] = useState("counting");
  const [countdown, setCountdown] = useState(15);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [tossResult, setTossResult] = useState({
    side: null,
    winner: null,
    call: null,
  });
  const [matchDetails, setMatchDetails] = useState(null);
  const [error, setError] = useState("");

  // --- Core Logic ---
  useEffect(() => {
    if (!matchId) return;
    fetch(`/api/matches/${matchId}`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error("Match not found."))
      )
      .then((data) => setMatchDetails(data))
      .catch((e) => setError(e.message));
  }, [matchId]);

  useEffect(() => {
    if (status !== "counting" || countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [status, countdown]);

  useEffect(() => {
    if (countdown === 0 && status === "counting") {
      setStatus("flipping");
      setTimeout(() => {
        const call = playerChoice || "heads";
        const actualSide = Math.random() < 0.5 ? "heads" : "tails";
        const winner = call === actualSide ? "Team A" : "Team B";

        setTossResult({ side: actualSide, winner, call });
        setStatus("finished");
      }, 2000);
    }
  }, [countdown, status, playerChoice]);

  // --- Action Handlers ---
  const startMatch = async () => {
    if (!tossResult.winner) return;
    try {
      const res = await fetch(`/api/matches/${matchId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tossWinner: tossResult.winner }),
      });
      if (!res.ok) throw new Error("Failed to update toss winner.");
      router.push(`/match/${matchId}`);
    } catch (e) {
      setError(e.message);
    }
  };

  // NEW: Function to reset the toss process
  const redoToss = () => {
    setStatus("counting");
    setCountdown(7);
    setPlayerChoice(null);
    setTossResult({ side: null, winner: null, call: null });
  };

  // --- Render Logic ---
  if (error)
    return (
      <main className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-red-500">{error}</p>
      </main>
    );
  if (!matchDetails)
    return (
      <main className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white">Loading Match...</p>
      </main>
    );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white overflow-hidden">
      {/* ADDED: `relative` class to position the redo button */}
      <div className="relative w-full max-w-lg bg-black/50 backdrop-blur-xl ring-1 ring-yellow-400/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-yellow-500/10">
        {/* NEW: Redo Toss Button */}
        <button
          onClick={redoToss}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Redo toss"
        >
          <FaRedo />
        </button>

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-8">
          The Toss
        </h1>

        <div className="h-72 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {status === "counting" && (
              <motion.div
                key="counting"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="w-full"
              >
                <p className="text-white text-2xl mb-4">Team A, pick a side:</p>
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => setPlayerChoice("heads")}
                    className={`w-32 py-3 font-bold rounded-lg text-lg transition ${
                      playerChoice === "heads"
                        ? "bg-yellow-400 text-black ring-2 ring-white"
                        : "bg-zinc-700"
                    }`}
                  >
                    Heads
                  </button>
                  <button
                    onClick={() => setPlayerChoice("tails")}
                    className={`w-32 py-3 font-bold rounded-lg text-lg transition ${
                      playerChoice === "tails"
                        ? "bg-slate-300 text-black ring-2 ring-white"
                        : "bg-zinc-700"
                    }`}
                  >
                    Tails
                  </button>
                </div>
                <p className="text-8xl font-mono font-bold">{countdown}</p>
              </motion.div>
            )}
            {status === "flipping" && (
              <motion.div
                key="flipping"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1, rotateY: 1080 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <SpinningCoin />
              </motion.div>
            )}
            {status === "finished" && (
              <motion.div
                key="finished"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4"
              >
                {tossResult.side === "heads" ? <CoinHeads /> : <CoinTails />}
                <p className="text-xl font-semibold text-center leading-relaxed">
                  Team A called{" "}
                  <strong className="text-amber-300 capitalize">
                    {tossResult.call}
                  </strong>
                  . It's{" "}
                  <strong className="text-amber-300 capitalize">
                    {tossResult.side}
                  </strong>
                  .
                  <br />
                  <span className="text-2xl font-bold text-white">
                    {tossResult.winner} wins the toss!
                  </span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {status === "finished" ? (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={startMatch}
            className="w-full mt-8 py-4 text-xl font-bold rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:scale-105 transition-transform"
          >
            Start Match
          </motion.button>
        ) : (
          <div className="mt-8 h-16" /> // Placeholder to prevent layout shift
        )}
      </div>
    </main>
  );
}
