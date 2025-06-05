/* ---------------------------------------------------------------
   src/app/teams/[id]/page.jsx  – team selector (modern UI theme)
---------------------------------------------------------------- */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeamSelection() {
  /* ───────── state ───────── */
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [player, setPlayer] = useState("");
  const [side, setSide] = useState("A");
  const [overs, setOvers] = useState(6);
  const router = useRouter();

  /* ───────── helpers ───────── */
  const addPlayer = () => {
    const n = player.trim();
    if (!n) return;
    (side === "A" ? setTeamA : setTeamB)((prev) => [...prev, n]);
    setPlayer("");
  };
  const remove = (idx, who) =>
    (who === "A" ? setTeamA : setTeamB)((prev) =>
      prev.filter((_, i) => i !== idx)
    );

  const inc = () => overs < 20 && setOvers((o) => o + 1);
  const dec = () => overs > 1 && setOvers((o) => o - 1);

  /* ───────── start match ───────── */
  const start = async () => {
    if (!teamA.length || !teamB.length)
      return alert("Add at least one player to both teams.");

    try {
      const res = await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamA,
          teamB,
          overs,
          teamAScore: 0,
          teamBScore: 0,
          result: "",
          history: [],
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const m = await res.json();
      router.push(`/toss/${m._id}`);
    } catch (e) {
      alert("Failed to start match – " + e.message);
    }
  };

  /* ───────── ui ───────── */
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 px-6 py-10
                 text-zinc-200"
    >
      <div
        className="w-full max-w-md bg-zinc-900/60 backdrop-blur-md
                      rounded-3xl ring-1 ring-red-800/60 shadow-[0_0_35px_-10px_rgba(255,0,0,0.65)]
                      p-7 space-y-6"
      >
        {/* header */}
        <h1
          className="text-3xl font-extrabold text-center
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300"
        >
          🏏 Team Selection
        </h1>

        {/* player input */}
        <input
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          placeholder="Type player name & hit ➕"
          className="w-full p-3 rounded-xl bg-zinc-800 placeholder-zinc-500
                     focus:outline-none focus:ring-2 focus:ring-rose-500"
        />

        {/* side toggle */}
        <div className="flex gap-4 justify-center">
          {["A", "B"].map((t) => (
            <button
              key={t}
              onClick={() => setSide(t)}
              className={`px-5 py-2 rounded-xl font-semibold transition
                          ${
                            side === t
                              ? t === "A"
                                ? "bg-blue-600 shadow-[0_0_10px_2px_rgba(30,144,255,0.6)]"
                                : "bg-rose-600 shadow-[0_0_10px_2px_rgba(255,82,82,0.6)]"
                              : "bg-zinc-700"
                          }`}
            >
              Team {t} ({t === "A" ? teamA.length : teamB.length})
            </button>
          ))}
        </div>

        {/* add btn */}
        <button
          onClick={addPlayer}
          className="w-full py-3 rounded-xl font-semibold
                     bg-gradient-to-r from-yellow-300 via-rose-200 to-orange-300
                     text-black hover:brightness-110 transition
                     shadow-[0_4px_20px_rgba(255,100,100,0.55)]"
        >
          ➕ Add Player
        </button>

        {/* rosters */}
        <Roster
          title="Team A"
          colour="text-blue-400"
          list={teamA}
          remove={(i) => remove(i, "A")}
        />
        <Roster
          title="Team B"
          colour="text-rose-400"
          list={teamB}
          remove={(i) => remove(i, "B")}
        />

        {/* overs selector */}
        <div className="text-left space-y-2">
          <label className="font-semibold">Overs</label>
          <div className="flex items-center gap-6 justify-between">
            <Step symbol="−" click={dec} />
            <span className="text-lg font-bold">{overs}</span>
            <Step symbol="+" click={inc} />
          </div>
        </div>

        {/* start btn */}
        <button
          onClick={start}
          className="w-full py-3 rounded-xl font-bold uppercase tracking-wide
                     bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300
                     text-black hover:brightness-110 transition
                     shadow-[0_4px_20px_rgba(255,100,100,0.55)]"
        >
          Start Match
        </button>

        <a href="/" className="block text-center text-yellow-300 underline">
          ← Home
        </a>
      </div>
    </main>
  );
}

/* ----- tiny helpers ----- */
function Step({ symbol, click }) {
  return (
    <button
      onClick={click}
      className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600
                 text-xl font-extrabold"
    >
      {symbol}
    </button>
  );
}

function Roster({ title, colour, list, remove }) {
  return (
    <div className="space-y-1">
      <h2 className={`font-semibold ${colour}`}>
        {title} ({list.length})
      </h2>
      <ul className="space-y-1 text-sm">
        {list.map((p, i) => (
          <li key={i} className="flex justify-between items-center">
            <span>
              {i + 1}. {p}
            </span>
            <button
              onClick={() => remove(i)}
              className="w-6 h-6 rounded-full bg-rose-600 text-xs
                         flex items-center justify-center hover:bg-rose-500
                         shadow-[0_0_6px_rgba(255,60,60,0.8)]"
              title="remove"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
