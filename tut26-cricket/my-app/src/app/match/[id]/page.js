/* -------------------------------------------------------------------
   src/app/match/[id]/page.jsx – client-only, DB‑backed scoring
--------------------------------------------------------------------*/
"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// A simple icon component for better UI, you can replace with a library like react-icons if preferred
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

export default function MatchPage() {
  /* ───────── routing ───────── */
  const { id } = useParams(); // dynamic segment /match/[id]
  const router = useRouter();

  /* ───────── state ───────── */
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState([]);
  const [history, setHistory] = useState([]);
  const [outs, setOuts] = useState(0);
  const [innings, setInnings] = useState("first");
  const [teamAScore, setTeamAScore] = useState(0);
  const [maxOvers, setMaxOvers] = useState(6);

  const [widesInRow, setWidesInRow] = useState(0);
  const [showNewOverBanner, setShowNewOverBanner] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  const maxBalls = maxOvers * 6;
  const maxOuts = 10;

  /* ───────── DB helpers ───────── */
  const fetchMatch = async () => {
    if (!id) return;
    const res = await fetch(`/api/matches/${id}`);
    if (!res.ok) return;

    const m = await res.json();
    if (!m) {
      alert("Match not found");
      router.push("/session");
      return;
    }

    setScore(m.score ?? 0);
    setBalls(m.balls ?? []);
    setHistory(m.history ?? []);
    setOuts(m.outs ?? 0);
    setInnings(m.innings ?? "first");
    setTeamAScore(m.teamAScore ?? 0);
    setMaxOvers(m.overs ?? 6);
  };

  const patchMatch = async (payload) => {
    if (!id) return;
    await fetch(`/api/matches/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  /* one‑time load */
  useEffect(() => {
    fetchMatch();
  }, [id]);

  /* ───────── helpers ───────── */
  const buildHist = (type, value, counted, newBalls) => ({
    type,
    value,
    over: Math.floor((newBalls.length - (counted ? 1 : 0)) / 6),
    ball: counted ? ((newBalls.length - 1) % 6) + 1 : "-",
  });

  const sync = (newScore, newBalls, newHist, newOuts) => {
    setScore(newScore);
    setBalls(newBalls);
    setHistory(newHist);
    setOuts(newOuts);
    patchMatch({
      score: newScore,
      balls: newBalls,
      history: newHist,
      outs: newOuts,
      innings,
      teamAScore,
      overs: maxOvers,
      isOngoing: true,
    });
  };

  /* ───────── scoring ───────── */
  const addRun = (r) => {
    const sc = score + r;
    const bl = [...balls, { type: "run", value: r }];
    const hi = [...history, buildHist("run", r, true, bl)];
    sync(sc, bl, hi, outs);
    setWidesInRow(0);
  };
  const handleDot = () => {
    const bl = [...balls, { type: "dot", value: 0 }];
    const hi = [...history, buildHist("dot", 0, true, bl)];
    sync(score, bl, hi, outs);
    setWidesInRow(0);
  };
  const handleOut = () => {
    if (outs + 1 > maxOuts) return;
    const bl = [...balls, { type: "out", value: 0 }];
    const hi = [...history, buildHist("out", 0, true, bl)];
    sync(score, bl, hi, outs + 1);
    setWidesInRow(0);
  };
  const handleWide = () => {
    const next = widesInRow + 1;
    const bonus = next > 1 ? 1 : 0;
    const sc = score + 1 + bonus; // A wide is always at least 1 run
    const bl = [...balls];
    const hi = [...history, buildHist("wide", 1 + bonus, false, bl)];
    sync(sc, bl, hi, outs);
    setWidesInRow(next);
  };

  const undo = () => {
    if (!history.length) return;
    const last = history.at(-1);
    const hi = history.slice(0, -1);
    let sc = score,
      bl = balls,
      ou = outs;
    if (["run", "wide"].includes(last.type)) sc -= last.value;
    if (last.type === "out") ou -= 1;
    if (["run", "dot", "out"].includes(last.type)) bl = balls.slice(0, -1);
    if (last.type === "wide") setWidesInRow((w) => Math.max(w - 1, 0));
    sync(sc, bl, hi, ou);
  };

  /* innings / completion */
  useEffect(() => {
    if (!balls.length && !outs && innings === "first") return;
    const over = balls.length >= maxBalls || outs >= maxOuts;
    if (innings === "first" && over) {
      const teamAFinal = score;
      setTeamAScore(teamAFinal);
      setScore(0);
      setBalls([]);
      setHistory([]);
      setOuts(0);
      setWidesInRow(0);
      setInnings("second");
      patchMatch({
        score: 0,
        balls: [],
        history: [],
        outs: 0,
        innings: "second",
        teamAScore: teamAFinal,
        overs: maxOvers,
        isOngoing: true,
      });
      alert("End of First Innings! Team B to bat now.");
      return;
    }
    if (innings === "second" && (over || score > teamAScore)) {
      const result =
        score > teamAScore
          ? "Team B Wins!"
          : score < teamAScore
          ? "Team A Wins!"
          : "Match Drawn!";
      patchMatch({
        score,
        balls,
        history,
        outs,
        innings,
        teamAScore,
        overs: maxOvers,
        result,
        isOngoing: false,
      });
      router.push(`/result/${id}`);
    }
  }, [score, balls, outs]);

  /* new‑over banner */
  useEffect(() => {
    if (balls.length > 0 && balls.length % 6 === 0) {
      setShowNewOverBanner(true);
      const t = setTimeout(() => setShowNewOverBanner(false), 5000);
      return () => clearTimeout(t);
    }
  }, [balls]);

  /* reset */
  const resetMatch = async () => {
    const pin = prompt("Enter PIN '0000' to reset match:");
    if (pin !== "0000" || !id) {
      if (pin !== null) alert("❌ Incorrect PIN");
      return;
    }
    await fetch(`/api/matches/${id}`, { method: "DELETE" });
    router.push("/");
  };

  /* UI helpers */
  const renderBall = (ball, i) => {
    const colors = {
      1: "bg-teal-500",
      2: "bg-green-500",
      3: "bg-purple-500",
      4: "bg-orange-500",
      6: "bg-sky-500",
    };
    const style = {
      run: `${colors[ball.value] ?? "bg-blue-500"} text-white`,
      dot: "bg-gray-600 text-gray-200",
      out: "bg-red-600 text-white",
      wide: "bg-yellow-400 text-black",
    }[ball.type];
    const label =
      ball.type === "dot"
        ? "•"
        : ball.type === "out"
        ? "W"
        : ball.type === "wide"
        ? `Wd${ball.value > 1 ? "+" + (ball.value - 1) : ""}`
        : ball.value;
    return (
      <div
        key={i}
        className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${style}`}
      >
        {label}
      </div>
    );
  };
  const renderOvers = () => {
    const grouped = {};
    history.forEach((h) => {
      (grouped[`Over ${h.over + 1}`] ||= []).push(h);
    });
    return Object.entries(grouped)
      .reverse()
      .map(([o, it]) => (
        <div key={o} className="mb-4 text-left">
          <div className="font-bold text-gray-300 mb-2">{o}</div>
          <div className="flex gap-2 flex-wrap">{it.map(renderBall)}</div>
        </div>
      ));
  };
  const oversArray = Array.from(
    { length: Math.ceil(balls.length / 6) },
    (_, i) => balls.slice(i * 6, i * 6 + 6)
  );
  const currentBalls = oversArray.at(-1) ?? [];
  const currentOverProgress = balls.length / 6;
  const currentOverDisplay = Math.floor(currentOverProgress);
  const currentBallInOver = balls.length % 6;

  /* ───────────────────────── render ───────────────────────── */
  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Top Overlay */}
      <header className="w-full bg-gray-900/50 backdrop-blur-sm p-4 sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Icon path="M10 19l-7-7m0 0l7-7m-7 7h18" />
            <span className="font-semibold">Home</span>
          </button>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              {innings === "first" ? "First Innings" : "Second Innings"}
            </h1>
            <p className="text-sm text-cyan-400 font-medium">
              {innings === "second"
                ? `Target: ${teamAScore + 1}`
                : `${maxOvers} Over Match`}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-lg text-gray-300">
              Overs: {currentOverDisplay}.{currentBallInOver}/{maxOvers}
            </p>
            <p className="text-sm font-semibold">
              {innings === "first" ? "Team A" : "Team B"} Batting
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-700 h-1 mt-3">
          <div
            className="bg-cyan-400 h-1"
            style={{ width: `${(balls.length / maxBalls) * 100}%` }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        {/* Score Display */}
        <div className="my-6">
          <p className="text-2xl text-gray-400 font-medium">
            {innings === "first" ? "Team A" : "Team B"} Score
          </p>
          <div className="font-bold text-8xl md:text-9xl tracking-tighter">
            <span>{score}</span>
            <span className="text-gray-500">/</span>
            <span className="text-red-500">{outs}</span>
          </div>
        </div>

        {/* Current Over Display */}
        <div className="flex justify-center items-center gap-3 mb-8 p-3 bg-gray-900/60 rounded-xl">
          {Array.from({ length: 6 }).map((_, i) =>
            currentBalls[i] ? (
              renderBall(currentBalls[i], i)
            ) : (
              <div
                key={i}
                className="w-9 h-9 md:w-10 md:h-10 border-2 border-dashed border-gray-600 rounded-full"
              />
            )
          )}
        </div>

        {showNewOverBanner && (
          <div className="my-4 text-lg font-bold text-cyan-400 animate-pulse">
            ✨ New Over ✨
          </div>
        )}
      </div>

      {/* Control Panel / Bottom Overlay */}
      <footer className="w-full bg-gray-900/50 backdrop-blur-sm p-4 sticky bottom-0 z-10 border-t border-gray-800">
        <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-sm mx-auto mb-4">
          {[1, 2, 3, 4, 6].map((n) => (
            <button
              key={n}
              onClick={() => addRun(n)}
              className={`btn-run run-${n}`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={handleDot}
            className="btn-action bg-gray-700 text-gray-200"
          >
            DOT
          </button>
          <button
            onClick={handleWide}
            className="btn-action bg-yellow-500 text-black"
          >
            WIDE
          </button>
          <button
            onClick={handleOut}
            className="btn-action bg-red-600 text-white col-span-2"
          >
            OUT
          </button>
        </div>
        <div className="flex justify-center gap-3 mb-4">
          <button onClick={undo} className="btn-utility">
            <Icon path="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            <span>Undo</span>
          </button>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="btn-utility"
          >
            <Icon path="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18" />
            <span>{showHistory ? "Hide" : "Show"} History</span>
          </button>
          <button onClick={resetMatch} className="btn-utility">
            <Icon path="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0 8.25 8.25 0 000-11.667l-3.182-3.182m0 0h-4.992m4.992 0v4.992" />
            <span>Reset</span>
          </button>
        </div>
      </footer>

      {/* History Panel (Modal-like) */}
      {showHistory && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-20 flex justify-center items-center"
          onClick={() => setShowHistory(false)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-center">📜 Over History</h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-400 hover:text-white"
              >
                <Icon path="M6 18L18 6M6 6l12 12" />
              </button>
            </div>
            {history.length > 0 ? (
              renderOvers()
            ) : (
              <p className="text-gray-400 text-center py-8">
                No events recorded yet.
              </p>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .btn-run {
          @apply text-white font-bold text-xl h-16 rounded-xl transition-transform duration-150 active:scale-95;
        }
        .run-1 {
          background-color: #14b8a6;
        } /* Teal */
        .run-2 {
          background-color: #22c55e;
        } /* Green */
        .run-3 {
          background-color: #a855f7;
        } /* Purple */
        .run-4 {
          background-color: #f97316;
        } /* Orange */
        .run-6 {
          background-color: #0ea5e9;
        } /* Sky */
        .btn-action {
          @apply font-bold text-lg h-16 rounded-xl transition-transform duration-150 active:scale-95;
        }
        .btn-utility {
          @apply flex items-center justify-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200;
        }
      `}</style>
    </main>
  );
}
