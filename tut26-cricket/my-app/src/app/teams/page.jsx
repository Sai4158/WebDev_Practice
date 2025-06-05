"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeamSelection() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("A");
  const [overs, setOvers] = useState(6);
  const router = useRouter();

  const addPlayer = () => {
    if (!playerName.trim()) return;
    if (selectedTeam === "A") setTeamA([...teamA, playerName.trim()]);
    else setTeamB([...teamB, playerName.trim()]);
    setPlayerName("");
  };

  const removePlayer = (index, team) => {
    if (team === "A") setTeamA(teamA.filter((_, i) => i !== index));
    else setTeamB(teamB.filter((_, i) => i !== index));
  };

  const incrementOvers = () => {
    if (overs < 20) setOvers(overs + 1);
  };

  const decrementOvers = () => {
    if (overs > 1) setOvers(overs - 1);
  };

  const startMatch = async () => {
    try {
      await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamA, teamB, overs }),
      });

      localStorage.setItem("teamA", JSON.stringify(teamA));
      localStorage.setItem("teamB", JSON.stringify(teamB));
      localStorage.setItem("overs", overs.toString());
      router.push("/toss");
    } catch (err) {
      alert("Failed to save teams.");
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 text-center text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">
        🏏 Team Selection
      </h1>

      <div className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-center gap-4">
          <button
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              selectedTeam === "A"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedTeam("A")}
          >
            Team A ({teamA.length})
          </button>
          <button
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              selectedTeam === "B"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedTeam("B")}
          >
            Team B ({teamB.length})
          </button>
        </div>

        <button
          onClick={addPlayer}
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold"
        >
          ➕ Add Player
        </button>

        <div className="text-left">
          <h2 className="font-bold text-blue-700 mb-2">Team A Players</h2>
          <ul className="space-y-1 text-sm text-gray-800 mb-4">
            {teamA.map((p, i) => (
              <li key={i} className="flex justify-between items-center">
                {i + 1}. {p}
                <button
                  onClick={() => removePlayer(i, "A")}
                  className="text-red-500 text-xs hover:underline"
                >
                  ➖
                </button>
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-red-700 mb-2">Team B Players</h2>
          <ul className="space-y-1 text-sm text-gray-800">
            {teamB.map((p, i) => (
              <li key={i} className="flex justify-between items-center">
                {i + 1}. {p}
                <button
                  onClick={() => removePlayer(i, "B")}
                  className="text-red-500 text-xs hover:underline"
                >
                  ➖
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block text-left text-gray-700 font-medium mb-1">
            Select Overs
          </label>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={decrementOvers}
              className="w-10 h-10 text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-bold">{overs} Over(s)</span>
            <button
              onClick={incrementOvers}
              className="w-10 h-10 text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={startMatch}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
        >
          ✅ Proceed to Toss
        </button>

        <a
          href="/"
          className="inline-block text-blue-600 hover:underline mt-4 text-sm"
        >
          🔙 Back to Home
        </a>
      </div>
    </main>
  );
}
