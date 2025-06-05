/* ------------------------------------------------------------------
   src/app/session/[id]/view/page.jsx  – spectator scoreboard
-------------------------------------------------------------------*/
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewSession() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    let timer;
    const load = async () => {
      try {
        // 1️⃣ lookup the session -> get its match id
        const ses = await fetch(`/api/sessions/${id}`).then((r) => r.json());
        if (!ses?.match) return;
        // 2️⃣ grab live match data
        const m = await fetch(`/api/matches/${ses.match}`).then((r) =>
          r.json()
        );
        setMatch(m);
      } catch (e) {
        console.error(e);
      }
    };
    load();
    // poll every 6 s so the board stays fresh
    timer = setInterval(load, 6000);
    return () => clearInterval(timer);
  }, [id]);

  if (!match) return <p className="p-10 text-center">Loading…</p>;

  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">🏏 Live Score</h1>
      <p className="mb-6">
        {match.innings === "first" ? "🅰️ Team A batting" : "🅱️ Team B batting"}
      </p>

      <div className="text-5xl font-extrabold mb-8">{match.score}</div>

      {/* simple ball-by-ball strip */}
      <div className="flex flex-wrap justify-center gap-2">
        {match.balls.slice(-12).map((b, i) => (
          <span
            key={i}
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white
              ${
                b.type === "run" && b.value === 4
                  ? "bg-orange-500"
                  : b.type === "run" && b.value === 6
                  ? "bg-indigo-600"
                  : b.type === "run"
                  ? "bg-blue-600"
                  : b.type === "dot"
                  ? "bg-gray-500"
                  : b.type === "out"
                  ? "bg-red-600"
                  : "bg-yellow-400 text-black"
              }`}
          >
            {b.type === "dot" ? "•" : b.type === "out" ? "W" : b.value || ""}
          </span>
        ))}
      </div>
    </main>
  );
}
