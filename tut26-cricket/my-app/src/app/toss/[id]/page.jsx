/* ------------------------------------------------------------------
   src/app/toss/[id]/page.jsx – same logic, black-&-gold look
------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function TossPage() {
  const { id: sessionId } = useParams();
  const router = useRouter();

  const [sec, setSec] = useState(10);
  const [side, setSide] = useState(null); // "heads" | "tails"
  const [win, setWin] = useState(null); // "Team A" | "Team B"
  const [spin, setSpin] = useState(false);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [matchId, setMatchId] = useState(null);

  /* 🔄 load session once */
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
    const t = setInterval(() => {
      setSec((s) => {
        if (s <= 1) {
          clearInterval(t);
          setSpin(true);
          setTimeout(() => {
            const heads = Math.random() < 0.5;
            setSide(heads ? "heads" : "tails");
            setWin(heads ? "Team A" : "Team B");
            setSpin(false);
          }, 1_000);
        }
        return s - 1;
      });
    }, 1_000);
    return () => clearInterval(t);
  }, []);

  const startMatch = async () => {
    await fetch(`/api/sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tossWinner: win }),
    });
    router.push(`/match/${matchId}`);
  };

  /* tiny helper */
  const Roster = ({ title, list, colour }) => (
    <div className="w-full sm:w-1/2">
      <h3 className={`font-semibold mb-2 ${colour}`}>{title}</h3>
      <ul className="list-decimal list-inside space-y-0.5 text-sm leading-6">
        {list.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );

  /* ───────── UI ───────── */
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white">
      <section className="w-full max-w-md bg-[#111]/80 backdrop-blur-lg ring-1 ring-yellow-300/30 rounded-3xl px-8 py-10 shadow-[0_0_30px_#ff1e46aa] space-y-8">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,170,0,.8)]">
          🪙 Toss 🪙
        </h1>

        {/* coin / countdown */}
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
              <p className="text-4xl font-bold text-white">{win}</p>

              <button
                onClick={startMatch}
                className="mt-6 px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black shadow-lg hover:brightness-110 transition"
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

        {/* rosters */}
        <div className="flex flex-wrap gap-8 justify-center pt-6 text-2xl">
          <Roster
            title={`🅰️ Team A (${teamA.length})`}
            list={teamA}
            colour="text-sky-300"
            className="text-xl"
          />
          <Roster
            title={`🅱️ Team B (${teamB.length})`}
            list={teamB}
            colour="text-pink-300"
            className="text-xl"
          />
        </div>
      </section>

      {/* simple keyframes */}
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
