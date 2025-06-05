/* ------------------------------------------------------------------
   src/app/toss/[id]/page.jsx – DB-only toss page (pastel UI, fixed)
-------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function TossPage() {
  const { id: sessionId } = useParams();
  const router = useRouter();

  const [sec, setSec] = useState(5);
  const [side, setSide] = useState(null); // "heads" | "tails"
  const [win, setWin] = useState(null); // "Team A" | "Team B"
  const [spin, setSpin] = useState(false);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [matchId, setMatchId] = useState(null);

  /* 🔄 fetch session once */
  useEffect(() => {
    if (!sessionId) return;
    (async () => {
      const res = await fetch(`/api/sessions/${sessionId}`);
      if (!res.ok) {
        alert("Session not found");
        router.push("/");
        return;
      }
      const ses = await res.json();
      setTeamA(ses.teamA ?? []);
      setTeamB(ses.teamB ?? []);
      setMatchId(ses.match);
    })();
  }, [sessionId, router]);

  /* ⏱️ countdown then flip */
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((n) => {
        if (n <= 1) {
          clearInterval(timer);
          setSpin(true);
          setTimeout(() => {
            const heads = Math.random() < 0.5;
            setSide(heads ? "heads" : "tails");
            setWin(heads ? "Team A" : "Team B");
            setSpin(false);
          }, 1000);
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startMatch = async () => {
    await fetch(`/api/sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tossWinner: win }),
    });
    router.push(`/match/${matchId}`);
  };

  const Roster = ({ title, list, color }) => (
    <div className="w-full sm:w-1/2">
      <h3 className={`font-semibold mb-2 ${color}`}>{title}</h3>
      <ul className="list-decimal list-inside text-sm leading-6 space-y-0.5">
        {list.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-200 to-cyan-100 p-6 text-gray-900">
      <section className="w-full max-w-md bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-3xl px-8 py-10 space-y-8">
        <h1 className="text-3xl font-extrabold text-center">🪙Toss🪙</h1>

        <div className="flex flex-col items-center gap-6">
          {win ? (
            <>
              <img
                src={
                  side === "heads"
                    ? "https://www.clker.com/cliparts/7/d/e/0/139362185558690588heads-hi.png"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoZLuNlaCnMK2BUyCux5c511ccayIXEIsUg&s"
                }
                alt={side ?? "coin"}
                className="w-32 h-32"
              />
              <p className="text-4xl font-bold text-green-700">{win}</p>
              <button
                onClick={startMatch}
                className={`mt-6 px-10 py-4 rounded-xl font-semibold
                            bg-gradient-to-r from-blue-500 to-indigo-600 text-white
                            shadow-lg hover:brightness-110 transition`}
              >
                Start Match
              </button>
            </>
          ) : (
            <>
              <p className="text-7xl font-extrabold tracking-wide">{sec}</p>
              <img
                src="https://t4.ftcdn.net/jpg/05/89/72/45/360_F_589724537_LlpMPcqLO6NYUhE9yXrUzeVjWShAS1dO.png"
                alt="coin"
                className={`w-32 h-32 ${
                  spin ? "animate-flip" : "animate-spin"
                }`}
              />
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-8 justify-center pt-6">
          <Roster
            title={`🅰️ Team A (${teamA.length})`}
            list={teamA}
            color="text-indigo-600"
          />
          <Roster
            title={`🅱️ Team B (${teamB.length})`}
            list={teamB}
            color="text-pink-600"
          />
        </div>
      </section>

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
        .animate-spin {
          animation: spin 1.2s linear infinite;
        }
        .animate-flip {
          animation: flip 1s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
