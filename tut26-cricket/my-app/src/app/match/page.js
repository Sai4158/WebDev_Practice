"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MatchPage() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [widesInRow, setWidesInRow] = useState(0);
  const [balls, setBalls] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);
  const [showNewOverBanner, setShowNewOverBanner] = useState(false);
  const [innings, setInnings] = useState("first");
  const [teamAScore, setTeamAScore] = useState(0);
  const [outs, setOuts] = useState(0);
  const [maxOvers, setMaxOvers] = useState(6);

  useEffect(() => {
    const storedOvers = parseInt(localStorage.getItem("overs"));
    if (!isNaN(storedOvers)) setMaxOvers(storedOvers);
  }, []);

  const maxBalls = maxOvers * 6;
  const maxOuts = 10;

  const oversArray = [];
  for (let i = 0; i < Math.ceil(balls.length / 6); i++) {
    oversArray.push(balls.slice(i * 6, i * 6 + 6));
  }
  const currentBalls = oversArray[oversArray.length - 1] || [];

  useEffect(() => {
    if (balls.length > 0 && balls.length % 6 === 0) {
      setShowNewOverBanner(true);
      const timer = setTimeout(() => setShowNewOverBanner(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [balls]);

  useEffect(() => {
    const isInningsOver = balls.length === maxBalls || outs >= maxOuts;

    if (innings === "first" && isInningsOver) {
      setTeamAScore(score);
      setScore(0);
      setBalls([]);
      setHistory([]);
      setWidesInRow(0);
      setOuts(0);
      setInnings("second");
      alert("End of First Innings! Team B to bat now.");
    }

    if (innings === "second" && (isInningsOver || score > teamAScore)) {
      const result =
        score > teamAScore
          ? "Team B Wins!"
          : score < teamAScore
          ? "Team A Wins!"
          : "Match Drawn!";

      const payload = {
        teamAScore,
        teamBScore: score,
        winner: result,
        overs: maxOvers,
        history,
        date: new Date().toISOString(),
      };

      fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      localStorage.setItem("result", JSON.stringify(payload));
      router.push("/result");
    }
  }, [balls, outs]);

  const updateScore = (runs) => setScore((prev) => prev + runs);

  const addBall = (type, value = 0, countedInOver = true) => {
    const newBalls = countedInOver ? [...balls, { type, value }] : [...balls];
    setBalls(newBalls);
    const overIndex = Math.floor(
      (newBalls.length - (countedInOver ? 1 : 0)) / 6
    );
    setHistory((prev) => [
      ...prev,
      {
        type,
        value,
        over: overIndex,
        ball: countedInOver ? ((newBalls.length - 1) % 6) + 1 : "-",
      },
    ]);
  };

  const addRun = (runs) => {
    updateScore(runs);
    addBall("run", runs);
    setWidesInRow(0);
  };

  const handleDot = () => {
    addBall("dot");
    setWidesInRow(0);
  };

  const handleOut = () => {
    addBall("out");
    setOuts((prev) => prev + 1);
    setWidesInRow(0);
  };

  const handleWide = () => {
    const nextWides = widesInRow + 1;
    const bonus = nextWides > 1 ? 1 : 0;
    if (bonus > 0) updateScore(bonus);
    addBall("wide", bonus, false);
    setWidesInRow(nextWides);
  };

  const undo = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(history.slice(0, -1));
    if (["run", "wide"].includes(last.type)) setScore(score - last.value);
    if (["run", "dot", "out"].includes(last.type)) setBalls(balls.slice(0, -1));
    if (last.type === "wide") setWidesInRow((prev) => Math.max(prev - 1, 0));
    if (last.type === "out") setOuts((prev) => Math.max(prev - 1, 0));
  };

  const resetMatch = () => {
    const pin = prompt("Enter PIN to reset:");
    if (pin === "0000") {
      setScore(0);
      setWidesInRow(0);
      setBalls([]);
      setHistory([]);
      setShowHistory(true);
      setOuts(0);
      setInnings("first");
      setTeamAScore(0);
    } else {
      alert("❌ Incorrect PIN");
    }
  };

  const renderBall = (ball, i) => {
    const colorMap = {
      1: "bg-blue-600",
      2: "bg-green-600",
      3: "bg-purple-600",
      4: "bg-orange-500",
      6: "bg-indigo-600",
    };

    const classMap = {
      run: `${colorMap[ball.value] || "bg-blue-600"} text-white`,
      dot: "bg-gray-500 text-white",
      out: "bg-red-600 text-white",
      wide: "bg-yellow-400 text-black",
    };

    const label =
      ball.type === "dot"
        ? "•"
        : ball.type === "out"
        ? "W"
        : ball.type === "wide"
        ? `Wd${ball.value > 0 ? "+" + ball.value : ""}`
        : ball.value;

    return (
      <div
        key={i}
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          classMap[ball.type]
        }`}
      >
        {label}
      </div>
    );
  };

  const renderOvers = () => {
    const grouped = {};
    history.forEach((item) => {
      const key = `Over ${item.over + 1}`;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    return Object.entries(grouped)
      .reverse()
      .map(([over, items], idx) => (
        <div key={idx} className="mb-3 text-left">
          <div className="font-bold mb-1">{over}</div>
          <div className="flex gap-2 flex-wrap">
            {items.map((item, i) => {
              const colorMap = {
                1: "bg-blue-600",
                2: "bg-green-600",
                3: "bg-purple-600",
                4: "bg-orange-500",
                6: "bg-indigo-600",
              };
              const bg =
                item.type === "dot"
                  ? "bg-gray-500 text-white"
                  : item.type === "out"
                  ? "bg-red-600 text-white"
                  : item.type === "wide"
                  ? "bg-yellow-400 text-black"
                  : `${colorMap[item.value] || "bg-blue-600"} text-white`;
              const label =
                item.type === "dot"
                  ? "•"
                  : item.type === "out"
                  ? "W"
                  : item.type === "wide"
                  ? `Wd${item.value > 0 ? "+" + item.value : ""}`
                  : item.value;

              return (
                <div
                  key={i}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${bg}`}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      ));
  };

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
        {[1, 2, 3, 4, 6].map((num) => (
          <button
            key={num}
            onClick={() => addRun(num)}
            className={`text-white font-semibold py-2 rounded-lg ${
              num === 1
                ? "bg-blue-600"
                : num === 2
                ? "bg-green-600"
                : num === 3
                ? "bg-purple-600"
                : num === 4
                ? "bg-orange-500"
                : "bg-indigo-600"
            }`}
          >
            {num} Run{num > 1 && "s"}
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
          background-color: #f3f4f6;
          color: #111827;
          padding: 12px;
          border-radius: 12px;
          font-weight: 500;
        }
        .btn-out {
          background: linear-gradient(to right, #dc2626, #b91c1c);
          color: white;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-wide {
          background: linear-gradient(to right, #fde68a, #facc15);
          color: black;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-ghost {
          background-color: #e5e7eb;
          color: #111827;
          padding: 10px 20px;
          border-radius: 10px;
        }
        .btn-dark {
          background-color: #374151;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
        }
        .btn-toggle {
          background: linear-gradient(to right, #06b6d4, #0891b2);
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}
