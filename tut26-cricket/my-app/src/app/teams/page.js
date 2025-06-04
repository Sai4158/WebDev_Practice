"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeamSelection() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("A");
  const router = useRouter();

  const addPlayer = () => {
    if (!playerName.trim()) return;
    if (selectedTeam === "A") setTeamA([...teamA, playerName]);
    else setTeamB([...teamB, playerName]);
    setPlayerName("");
  };

  const startMatch = () => {
    localStorage.setItem("teamA", JSON.stringify(teamA));
    localStorage.setItem("teamB", JSON.stringify(teamB));
    router.push("/toss");
  };

  return (
    <main className="min-h-screen bg-white p-6 text-center text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Team Selection</h1>

      <div className="space-y-4 max-w-sm mx-auto">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selectedTeam === "A"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedTeam("A")}
          >
            Team A
          </button>
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selectedTeam === "B"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedTeam("B")}
          >
            Team B
          </button>
        </div>

        <button
          onClick={addPlayer}
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
        >
          Add Player
        </button>

        <div className="text-left mt-6">
          <h2 className="font-bold mb-2 text-blue-700">Team A</h2>
          <ul className="list-disc list-inside text-sm text-gray-800">
            {teamA.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h2 className="font-bold mt-4 mb-2 text-red-700">Team B</h2>
          <ul className="list-disc list-inside text-sm text-gray-800">
            {teamB.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={startMatch}
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Proceed to Toss
        </button>
      </div>
    </main>
  );
}
