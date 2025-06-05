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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 text-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
        🏁 Match Summary
      </h1>

      <div className="bg-white max-w-xl mx-auto rounded-xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <div className="text-lg text-gray-600 font-medium">Toss Winner:</div>
          <div className="text-2xl font-bold text-indigo-600">
            {tossWinner || "N/A"}
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg text-gray-600 font-medium">Final Score:</div>
          <div className="text-3xl font-extrabold text-green-700">{score}</div>
        </div>

        <div className="flex justify-around flex-wrap gap-6 text-left">
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-700 font-bold mb-2">
              Team A ({teamA.length} players)
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {teamA.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-red-700 font-bold mb-2">
              Team B ({teamB.length} players)
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {teamB.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          🔙 Back to Home
        </a>
      </div>
    </main>
  );
}
