export default function RulesPage() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">🏏 Match Rules</h1>

      <ul className="space-y-4 max-w-xl mx-auto text-left text-lg leading-relaxed">
        <li>✅ Each team can have up to 11 players.</li>
        <li>✅ Toss is random and decides who bats first.</li>
        <li>✅ Scoring includes 0, 1, 2, 3, 4, 6 runs.</li>
        <li>✅ OUT button should be used only by the umpire.</li>
        <li>
          ✅ <strong>WIDE Rule:</strong> If there are 2 wides in a row, the
          batting team gets 1 bonus run.
        </li>
        <li>✅ Umpire can use UNDO if any input is wrong.</li>
        <li>✅ RESET will clear teams, scores, and match data.</li>
      </ul>

      <div className="text-center mt-8">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
