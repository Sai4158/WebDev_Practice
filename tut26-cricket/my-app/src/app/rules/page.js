export default function RulesPage() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        🏏 Official GV Cricket Rules
      </h1>

      {/* Unique Gameplay Rules */}
      <section className="bg-white shadow-md p-6 rounded-xl border border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          🌟 Core Gameplay
        </h2>
        <ul className="space-y-4 text-lg leading-relaxed list-disc pl-5">
          <li>🎯 Max 3 overs per batsman.</li>
          <li>🧢 Max 2 overs per bowler.</li>
          <li>🧤 Wicketkeeper and umpire must be present at all times.</li>
          <li>
            👣 Ball must touch grass to take a run (no run for flicks/aerial
            shots).
          </li>
          <li>
            ⚖️ Toss winner picks batting/bowling. Other captain picks first
            player. Selection alternates fairly.
          </li>
          <li>
            👥 If teams have 7+ players, use a short-format match (e.g., 6–8
            overs).
          </li>
        </ul>
      </section>

      {/* Special Rules */}
      <section className="bg-white shadow-md p-6 rounded-xl border border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          🚨 Bowling & Penalty Rules
        </h2>
        <ul className="space-y-4 text-lg leading-relaxed list-disc pl-5">
          <li>🆓 Full toss above the waist = Free Hit (next delivery).</li>
          <li>🚫 No-balls and wides must be called loudly by the umpire.</li>
          <li>✅ 2 wides in a row = bonus run on 3rd wide and beyond.</li>
        </ul>
      </section>

      {/* Common Gameplay */}
      <section className="bg-white shadow-md p-6 rounded-xl border border-gray-200 mb-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          📏 General Rules
        </h2>
        <ul className="space-y-4 text-lg leading-relaxed list-disc pl-5">
          <li>✅ 11 players max per team.</li>
          <li>✅ Runs allowed: 0, 1, 2, 3, 4, 6.</li>
          <li>✅ OUT button only used with umpire confirmation.</li>
          <li>↩️ UNDO: Fix accidental taps immediately.</li>
          <li>
            🗑️ RESET: Clears all match data (teams, overs, score) — requires PIN
            "0000".
          </li>
        </ul>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          ⬅️ Back to Home
        </a>
      </div>
    </main>
  );
}
