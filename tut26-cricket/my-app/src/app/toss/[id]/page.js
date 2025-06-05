/* -------------------------------------------------------------------
   src/app/toss/[id]/page.jsx  – no localStorage, DB‑only state
--------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TossPage({ params }) {
  const { id } = params; // match _id from the URL
  const router = useRouter();

  /* -----------------------------  ui state  ----------------------------- */
  const [seconds, setSeconds] = useState(5); // countdown before flip
  const [side, setSide] = useState(null); // "heads" | "tails"
  const [winner, setWinner] = useState(null); // "Team A" | "Team B"
  const [flipping, setFlipping] = useState(false);

  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  /* ---------------------------  load teams  ----------------------------- */
  useEffect(() => {
    /* grab the match so we can show rosters */
    (async () => {
      const res = await fetch(`/api/matches/${id}`);
      const match = await res.json();
      setTeamA(match.teamA || []);
      setTeamB(match.teamB || []);
    })();
  }, [id]);

  /* -----------------------  countdown & coin flip  ---------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFlipping(true);
          /* do the flip animation, then decide */
          setTimeout(() => {
            const landedHeads = Math.random() < 0.5;
            const landedSide = landedHeads ? "heads" : "tails";
            setSide(landedSide);
            setWinner(landedHeads ? "Team A" : "Team B");
            setFlipping(false);
          }, 1000);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ----------------------  persist toss + continue  ---------------------- */
  const handleContinue = async () => {
    try {
      await fetch(`/api/matches/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tossWinner: winner }),
      });
      router.push(`/match/${id}`);
    } catch (err) {
      alert("Failed to save toss result – please retry");
      console.error(err);
    }
  };

  /* helper to render roster column */
  const Roster = ({ title, players, color }) => (
    <div className="w-full sm:w-1/2">
      <h3 className={`font-bold mb-2 ${color}`}>{title}</h3>
      <ul className="list-decimal list-inside text-sm leading-6">
        {players.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );

  /* -------------------------------  ui  --------------------------------- */
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-200 to-cyan-100 p-6 text-gray-900">
      <section className="w-full max-w-3xl bg-white/70 backdrop-blur-lg shadow-xl border border-white/40 rounded-3xl px-10 py-12">
        {/* header */}
        <h1 className="text-5xl font-extrabold text-center mb-10">🪙Toss🪙</h1>

        {/* coin block */}
        <div className="flex flex-col items-center gap-4 mb-10">
          {winner ? (
            <>
              <img
                src={
                  side === "heads"
                    ? "https://www.clker.com/cliparts/7/d/e/0/139362185558690588heads-hi.png"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoZLuNlaCnMK2BUyCux5c511ccayIXEIsUg&s"
                }
                alt={side}
                className="w-32 h-32"
              />
              <div className="text-4xl font-semibold text-green-700">
                {winner}
              </div>
              <button
                onClick={handleContinue}
                className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition"
              >
                Start Match
              </button>
            </>
          ) : (
            <>
              <div className="text-7xl font-extrabold">{seconds}</div>
              <img
                src="https://t4.ftcdn.net/jpg/05/89/72/45/360_F_589724537_LlpMPcqLO6NYUhE9yXrUzeVjWShAS1dO.png"
                alt="coin"
                className={`w-32 h-32 ${
                  flipping ? "animate-flip" : "animate-spin-slow"
                }`}
              />
            </>
          )}
        </div>

        {/* rosters */}
        <div className="flex flex-wrap gap-8 justify-center">
          <Roster
            title={`🅰️ Team A (${teamA.length})`}
            players={teamA}
            color="text-indigo-600"
          />
          <Roster
            title={`🅱️ Team B (${teamB.length})`}
            players={teamB}
            color="text-pink-600"
          />
        </div>
      </section>

      {/* animations */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotateY(360deg);
          }
        }
        @keyframes flip {
          to {
            transform: rotateY(1080deg);
          }
        }
        .animate-spin-slow {
          animation: spin 1.2s linear infinite;
        }
        .animate-flip {
          animation: flip 1s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
