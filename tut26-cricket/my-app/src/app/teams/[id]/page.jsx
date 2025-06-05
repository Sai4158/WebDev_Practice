/* ------------------------------------------------------------------
   src/app/teams/[id]/page.jsx   – pick players & overs, then create match
-------------------------------------------------------------------*/
"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TeamSelection() {
  const { id: sessionId } = useParams(); // <- ✨ session _id in the URL
  const router = useRouter();

  /* ───────── local UI state ───────── */
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [name, setName] = useState("");
  const [side, setSide] = useState("A"); // A | B
  const [overs, setOvers] = useState(6);
  const [busy, setBusy] = useState(false);

  /* ───────── helpers ───────── */
  const add = () => {
    const n = name.trim();
    if (!n) return;
    (side === "A" ? setTeamA : setTeamB)((prev) => [...prev, n]);
    setName("");
  };
  const remove = (idx, who) =>
    (who === "A" ? setTeamA : setTeamB)((p) => p.filter((_, i) => i !== idx));

  /* ───────── create match + wire to session ───────── */
  const start = async () => {
    if (!teamA.length || !teamB.length) {
      alert("Add at least one player to *both* teams.");
      return;
    }
    setBusy(true);
    try {
      /* 1️⃣  create the match */
      const mRes = await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamA, teamB, overs }),
      });
      if (!mRes.ok) throw new Error(await mRes.text());
      const match = await mRes.json();

      /* 2️⃣  patch the parent session with that match id & rosters */
      await fetch(`/api/sessions/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          match: match._id,
          teamA,
          teamB,
          overs,
          isLive: true,
        }),
      });

      /* 3️⃣  go to the toss using the *session* id */
      router.push(`/toss/${sessionId}`);
    } catch (e) {
      console.error(e);
      alert("Failed: " + e.message);
      setBusy(false);
    }
  };

  /* ────────────  UI  ──────────── */
  return (
    <main className="min-h-screen flex flex-col items-center bg-black text-zinc-100 py-10 px-5">
      <h1
        className="text-3xl font-extrabold mb-6
                     bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300
                     bg-clip-text text-transparent"
      >
        🏏 Team Selection
      </h1>

      <section
        className="w-full max-w-md bg-zinc-900/70 ring-1 ring-zinc-700
                          rounded-3xl p-8 space-y-6 shadow-[0_0_30px_#ff1133dd]"
      >
        {/* player input */}
        <div className="flex gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Player name"
            className="flex-1 px-4 py-2 rounded-xl bg-zinc-800
                            focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <button
            onClick={add}
            className="px-4 rounded-xl bg-green-600 font-bold"
          >
            ＋
          </button>
        </div>

        {/* team toggle */}
        <div className="flex gap-4 justify-center">
          {["A", "B"].map((t) => (
            <button
              key={t}
              onClick={() => setSide(t)}
              className={`px-5 py-2 rounded-xl font-semibold
                      ${
                        side === t
                          ? (t === "A" ? "bg-blue-600" : "bg-red-600") +
                            " text-white"
                          : "bg-zinc-700"
                      }`}
            >
              Team {t} ({t === "A" ? teamA.length : teamB.length})
            </button>
          ))}
        </div>

        {/* rosters */}
        <Roster
          title="Team A"
          list={teamA}
          colour="text-blue-400"
          onRemove={(i) => remove(i, "A")}
        />
        <Roster
          title="Team B"
          list={teamB}
          colour="text-red-400"
          onRemove={(i) => remove(i, "B")}
        />

        {/* overs picker */}
        <div>
          <label className="block mb-1 text-sm">Overs</label>
          <div className="flex items-center justify-between gap-4">
            <Step sym="−" onClick={() => overs > 1 && setOvers((o) => o - 1)} />
            <span className="text-xl font-bold">{overs}</span>
            <Step
              sym="＋"
              onClick={() => overs < 20 && setOvers((o) => o + 1)}
            />
          </div>
        </div>

        <button
          onClick={start}
          disabled={busy}
          className="w-full py-3 rounded-xl font-semibold
                           bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300
                           text-black shadow-lg shadow-rose-800/40
                           disabled:opacity-60"
        >
          {busy ? "Saving…" : "Proceed → Toss"}
        </button>

        <a href="/" className="block mt-4 underline text-amber-300 text-sm">
          ⬅ Back home
        </a>
      </section>
    </main>
  );
}

/* ---------- tiny bits ---------- */
function Step({ sym, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-zinc-800 font-bold text-xl"
    >
      {sym}
    </button>
  );
}

function Roster({ title, colour, list, onRemove }) {
  return (
    <div>
      <h2 className={`font-bold mb-1 ${colour}`}>{title}</h2>
      <ul className="space-y-1 text-sm">
        {list.map((p, i) => (
          <li key={i} className="flex justify-between">
            <span>
              {i + 1}. {p}
            </span>
            <button onClick={() => onRemove(i)} className="hover:text-red-400">
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
