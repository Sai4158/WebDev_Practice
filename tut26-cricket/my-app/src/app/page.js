export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
        🏏 GV Cricket 🏏
      </h1>

      <div className="space-y-5 w-full max-w-xs">
        <a
          href="/teams"
          className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Start Match
        </a>

        <a
          href="/rules"
          className="block w-full border border-gray-300 text-gray-800 py-3 px-6 rounded-xl hover:bg-gray-100 transition"
        >
          View Rules
        </a>
      </div>
    </main>
  );
}
