/* ------------------------------------------------------------------
   src/app/session/page.jsx – list every saved session (enhanced UI)
-------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/sessions");
        const json = await res.json();
        setSessions(json ?? []);
      } catch (e) {
        console.error(e);
        alert("Couldn’t load sessions – check the API / DB log");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <p className="min-h-screen flex items-center justify-center text-xl text-white">
        Loading…
      </p>
    );

  if (!sessions.length)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-zinc-100">
        <h1 className="text-3xl font-bold tracking-tight">No sessions yet</h1>
        <Link
          href="/session/new"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black font-semibold shadow-lg shadow-rose-800/40"
        >
          ➕ Create one
        </Link>
        <Link
          href="/"
          className="text-amber-300 text-sm underline hover:text-amber-200 mt-2"
        >
          ← Back&nbsp;Home
        </Link>
      </main>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-6 text-zinc-100 relative">
      {/* Top-left back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-amber-300 text-sm underline hover:text-amber-200"
      >
        ← Back&nbsp;Home
      </Link>

      <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300">
        All Sessions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sessions.map((s) => (
          <div
            key={s._id}
            className="bg-zinc-900/70 ring-1 ring-zinc-700 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_30px_#facc1533] transition hover:scale-[1.02]"
          >
            <div>
              <h2 className="text-xl font-bold mb-1 text-white">
                {s.name || "Untitled"}{" "}
                {!s.isLive && (
                  <span className="text-green-400 text-sm font-normal">
                    (done)
                  </span>
                )}
              </h2>
              <p className="text-xs text-zinc-400 mb-4">
                {new Date(s.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap mt-auto">
              {s.match && (
                <button
                  onClick={() => {
                    const pin = prompt("Enter PIN to access Umpire Mode:");
                    if (pin === "0000") {
                      router.push(
                        s.isLive ? `/match/${s.match}` : `/result/${s.match}`
                      );
                    } else if (pin !== null) {
                      alert("❌ Incorrect PIN");
                    }
                  }}
                  className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black font-semibold shadow shadow-rose-800/40 hover:brightness-105 transition"
                >
                  🔒 {s.isLive ? "Umpire Mode" : "Result"}
                </button>
              )}

              <Link
                href={`/session/${s._id}/view`}
                className="flex-1 px-4 py-2 rounded-xl bg-zinc-800 ring-1 ring-yellow-300/30 text-yellow-200 font-semibold hover:brightness-125 text-center transition"
              >
                View Score
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom center back button */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="text-amber-300 text-sm underline hover:text-amber-200"
        >
          ← Back&nbsp;Home
        </Link>
      </div>
    </main>
  );
}
