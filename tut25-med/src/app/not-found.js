export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900 text-white px-4 py-12 text-center">
      <div className="backdrop-blur-lg bg-white/10 px-6 py-10 rounded-3xl shadow-2xl max-w-xl w-full animate-fade-in">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-200 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold shadow hover:shadow-purple-400 transition duration-300"
        >
          ⬅️ Go Back Home
        </a>
      </div>
    </main>
  );
}
