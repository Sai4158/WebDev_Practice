"use client";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [score, setScore] = useState(0);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [tossWinner, setTossWinner] = useState("");

  useEffect(() => {
    setScore(parseInt(localStorage.getItem("finalScore")) || 0);
    setTeamA(JSON.parse(localStorage.getItem("teamA")) || []);
    setTeamB(JSON.parse(localStorage.getItem("teamB")) || []);
    setTossWinner(localStorage.getItem("tossWinner") || "");
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">🏁 Match Summary</h1>

      <div className="mb-4">
        <div className="text-lg font-semibold">Toss Winner: {tossWinner}</div>
        <div className="text-xl mt-2">
          Final Score: <span className="font-bold">{score}</span>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-6 text-left">
        <div>
          <h2 className="font-bold text-lg mb-2">Team A</h2>
          <ul className="list-disc list-inside">
            {teamA.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Team B</h2>
          <ul className="list-disc list-inside">
            {teamB.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
