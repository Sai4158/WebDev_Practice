/* -------------------------------------------------------------------
   src/app/match/[id]/page.jsx – client-only, DB‑backed scoring
--------------------------------------------------------------------*/
"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

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
    const bl = [...balls, { type: "out", value: 0 }];
    const hi = [...history, buildHist("out", 0, true, bl)];
    sync(score, bl, hi, outs + 1);
    setWidesInRow(0);
  };
  const handleWide = () => {
    const next = widesInRow + 1;
    const bonus = next > 1 ? 1 : 0;
    const sc = score + bonus;
    const bl = [...balls];
    const hi = [...history, buildHist("wide", bonus, false, bl)];
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
    if (!balls.length && !outs) return;
    const over = balls.length === maxBalls || outs >= maxOuts;
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
    if (balls.length && balls.length % 6 === 0) {
      setShowNewOverBanner(true);
      const t = setTimeout(() => setShowNewOverBanner(false), 7000);
      return () => clearTimeout(t);
    }
  }, [balls]);

  /* reset */
  const resetMatch = async () => {
    const pin = prompt("Enter PIN to reset:");
    if (pin !== "0000" || !id) return alert("❌ Incorrect PIN");
    await fetch(`/api/matches/${id}`, { method: "DELETE" });
    router.push("/");
  };

  /* UI helpers */
  const renderBall = (ball, i) => {
    const colors = {
      1: "bg-blue-600",
      2: "bg-green-600",
      3: "bg-purple-600",
      4: "bg-orange-500",
      6: "bg-indigo-600",
    };
    const style = {
      run: `${colors[ball.value] ?? "bg-blue-600"} text-white`,
      dot: "bg-gray-500 text-white",
      out: "bg-red-600 text-white",
      wide: "bg-yellow-400 text-black",
    }[ball.type];
    const label =
      ball.type === "dot"
        ? "•"
        : ball.type === "out"
        ? "W"
        : ball.type === "wide"
        ? `Wd${ball.value ? "+" + ball.value : ""}`
        : ball.value;
    return (
      <div
        key={i}
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${style}`}
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
        <div key={o} className="mb-3 text-left">
          <div className="font-bold mb-1">{o}</div>
          <div className="flex gap-2 flex-wrap">{it.map(renderBall)}</div>
        </div>
      ));
  };
  const oversArray = Array.from(
    { length: Math.ceil(balls.length / 6) },
    (_, i) => balls.slice(i * 6, i * 6 + 6)
  );
  const currentBalls = oversArray.at(-1) ?? [];

  /* ───────────────────────── render ───────────────────────── */
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 text-center text-gray-900">
      <h1 className="text-3xl font-bold mb-2">🏏 Live Match</h1>
      <p className="text-lg font-medium mb-1">
        {innings === "first" ? "🅰️ Team A Batting" : "🅱️ Team B Batting"}
      </p>
      <div className="text-xl font-semibold mb-4">Score: {score}</div>

      {showNewOverBanner && (
        <div className="mb-4 text-lg font-bold text-green-700 animate-bounce">
          🔄 New Over Started!
        </div>
      )}

      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {Array.from({ length: 6 }).map((_, i) =>
          currentBalls[i] ? (
            renderBall(currentBalls[i], i)
          ) : (
            <div
              key={i}
              className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center text-sm text-gray-500"
            >
              {i + 1}
            </div>
          )
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
        {[1, 2, 3, 4, 6].map((n) => (
          <button
            key={n}
            onClick={() => addRun(n)}
            className={`text-white font-semibold py-2 rounded-lg ${
              n === 1
                ? "bg-blue-600"
                : n === 2
                ? "bg-green-600"
                : n === 3
                ? "bg-purple-600"
                : n === 4
                ? "bg-orange-500"
                : "bg-indigo-600"
            }`}
          >
            {n} Run{n > 1 && "s"}
          </button>
        ))}
        <button onClick={handleDot} className="btn-secondary">
          Dot Ball
        </button>
        <button onClick={handleOut} className="btn-out">
          OUT
        </button>
        <button onClick={handleWide} className="btn-wide">
          WIDE
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={undo} className="btn-ghost">
          Undo
        </button>
        <button onClick={resetMatch} className="btn-dark">
          Reset
        </button>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="btn-toggle"
        >
          {showHistory ? "Hide" : "Show"} History
        </button>
      </div>

      {showHistory && (
        <div className="mt-6 max-w-md mx-auto bg-white p-4 rounded-lg border border-gray-200 shadow">
          <h2 className="text-xl font-bold mb-3 text-center">
            📜 Over History
          </h2>
          {renderOvers()}
        </div>
      )}

      <style jsx>{`
        .btn-secondary {
          background: #f3f4f6;
          color: #111;
          padding: 12px;
          border-radius: 12px;
          font-weight: 500;
        }
        .btn-out {
          background: linear-gradient(to right, #dc2626, #b91c1c);
          color: #fff;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-wide {
          background: linear-gradient(to right, #fde68a, #facc15);
          color: #000;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-ghost {
          background: #e5e7eb;
          color: #111;
          padding: 10px 20px;
          border-radius: 10px;
        }
        .btn-dark {
          background: #374151;
          color: #fff;
          padding: 10px 20px;
          border-radius: 10px;
        }
        .btn-toggle {
          background: linear-gradient(to right, #06b6d4, #0891b2);
          color: #fff;
          padding: 10px 20px;
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}
