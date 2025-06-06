/* ------------------------------------------------------------------
   src/app/teams/[id]/page.jsx - (Updated & Modernized)
-------------------------------------------------------------------*/
"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// (Optional) Place the useSessionStorageState hook here if not in a separate file
function useSessionStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = window.sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default function TeamSelectionPage() {
  const { id: sessionId } = useParams();
  const router = useRouter();

  /* ───────── Persistent UI state ───────── */
  // Replaced useState with our new hook to save state on refresh
  const [teamA, setTeamA] = useSessionStorageState(
    `session_${sessionId}_teamA`,
    [""]
  );
  const [teamB, setTeamB] = useSessionStorageState(
    `session_${sessionId}_teamB`,
    [""]
  );
  const [overs, setOvers] = useSessionStorageState(
    `session_${sessionId}_overs`,
    6
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  /* ───────── State Handlers ───────── */
  const handlePlayerChange = (setter, index, value) => {
    setter((prev) => {
      const newTeam = [...prev];
      newTeam[index] = value;
      return newTeam;
    });
  };

  const addPlayer = (setter) => setter((prev) => [...prev, ""]);
  const removePlayer = (setter, index) =>
    setter((prev) => prev.filter((_, i) => i !== index));

  /* ───────── API Logic ───────── */
  const handleSubmit = async () => {
    const finalTeamA = teamA.filter((p) => p.trim());
    const finalTeamB = teamB.filter((p) => p.trim());

    if (finalTeamA.length < 1 || finalTeamB.length < 1) {
      setError("Add at least one player to both teams.");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      /* 1️⃣ Create the match */
      const matchRes = await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamA: finalTeamA,
          teamB: finalTeamB,
          overs: overs,
          sessionId: sessionId,
        }),
      });
      if (!matchRes.ok)
        throw new Error("Failed to create match on the server.");
      const match = await matchRes.json();

      /* 2️⃣ Link match to the session */
      const sessionRes = await fetch(`/api/sessions/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          match: match._id,
          teamA: finalTeamA,
          teamB: finalTeamB,
          overs,
          isLive: true,
        }),
      });
      if (!sessionRes.ok) throw new Error("Failed to update the session.");

      /* 3️⃣ CRITICAL FIX: Navigate to the toss page with the MATCH ID */
      router.push(`/toss/${match._id}`);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-black text-zinc-100 py-10 px-5">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-rose-200 to-orange-400 bg-clip-text text-transparent">
            🏏 Team Selection
          </h1>
          <p className="text-zinc-400 mt-2">
            Build your rosters and set the match overs.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Team A Roster */}
          <Roster
            title="Team A"
            team={teamA}
            onPlayerChange={(index, value) =>
              handlePlayerChange(setTeamA, index, value)
            }
            onAddPlayer={() => addPlayer(setTeamA)}
            onRemovePlayer={(index) => removePlayer(setTeamA, index)}
            color="blue"
          />
          {/* Team B Roster */}
          <Roster
            title="Team B"
            team={teamB}
            onPlayerChange={(index, value) =>
              handlePlayerChange(setTeamB, index, value)
            }
            onAddPlayer={() => addPlayer(setTeamB)}
            onRemovePlayer={(index) => removePlayer(setTeamB, index)}
            color="red"
          />
        </section>

        {/* Overs & Submit Section */}
        <section className="w-full max-w-md mx-auto space-y-8">
          {/* Overs Picker */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-bold">Overs</h2>
            <div className="flex items-center gap-6">
              <StepButton
                icon={<FaMinus />}
                onClick={() => overs > 1 && setOvers((o) => o - 1)}
              />
              <span className="text-3xl font-bold w-12 text-center">
                {overs}
              </span>
              <StepButton
                icon={<FaPlus />}
                onClick={() => overs < 50 && setOvers((o) => o + 1)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full text-xl font-bold py-5 rounded-2xl transition-all
                         bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
                         text-white shadow-lg shadow-orange-800/30
                         hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Proceed to Toss"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </section>
      </div>
    </main>
  );
}

/* --- UI Sub-components --- */
const Roster = ({
  title,
  team,
  onPlayerChange,
  onAddPlayer,
  onRemovePlayer,
  color,
}) => (
  <div className="bg-white/5 p-6 rounded-2xl ring-1 ring-white/10 space-y-4">
    <h2
      className={`text-2xl font-bold ${
        color === "blue" ? "text-blue-400" : "text-red-400"
      }`}
    >
      {title}
    </h2>
    <div className="space-y-3">
      {team.map((player, i) => (
        <div key={i} className="flex items-center gap-3">
          <input
            type="text"
            value={player}
            onChange={(e) => onPlayerChange(i, e.target.value)}
            placeholder={`Player ${i + 1}`}
            className="flex-1 px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-amber-400 outline-none transition"
          />
          <button
            onClick={() => onRemovePlayer(i)}
            className="p-3 text-zinc-400 hover:text-red-500 transition"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
    <button
      onClick={onAddPlayer}
      className="w-full py-3 mt-2 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition"
    >
      <FaPlus className="inline mr-2" /> Add Player
    </button>
  </div>
);

const StepButton = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 font-bold text-xl flex items-center justify-center transition"
  >
    {icon}
  </button>
);
