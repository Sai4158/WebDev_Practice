/* ------------------------------------------------------------------
   src/app/session/page.jsx – list every saved session
-------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ───────── fetch once ───────── */
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

  /* ───────── states ───────── */
  if (loading)
    return (
      <p className="min-h-screen flex items-center justify-center text-xl">
        Loading…
      </p>
    );

  if (!sessions.length)
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center gap-6
                       bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-zinc-100"
      >
        <h1 className="text-3xl font-bold tracking-tight">No sessions yet</h1>
        <Link
          href="/session/new"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r
                         from-yellow-200 via-rose-100 to-orange-300
                         text-black font-semibold shadow-lg shadow-rose-800/40"
        >
          ➕ Create one
        </Link>
      </main>
    );

  /* ───────── render ───────── */
  return (
    <main
      className="min-h-screen bg-gradient-to-br
                    from-black via-zinc-900 to-zinc-800 p-6 text-zinc-100"
    >
      <h1
        className="text-4xl font-extrabold text-center mb-10
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300"
      >
        All Sessions
      </h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {sessions.map((s) => (
          <div
            key={s._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between
                          bg-white/5 ring-1 ring-white/10 backdrop-blur-lg
                          rounded-2xl p-5 gap-4 shadow-lg shadow-black/40"
          >
            {/* meta */}
            <div>
              <h2 className="font-bold text-lg tracking-tight">
                {s.name || "Untitled"}{" "}
                {!s.isLive && (
                  <span className="text-green-400 text-sm font-normal">
                    (done)
                  </span>
                )}
              </h2>
              <p className="text-xs text-zinc-400">
                {new Date(s.createdAt).toLocaleString()}
              </p>
            </div>

            {/* actions */}
            <div className="flex gap-3">
              {s.match && (
                <Link
                  href={s.isLive ? `/match/${s.match}` : `/result/${s.match}`}
                  className="px-4 py-2 rounded-xl
                             bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300
                             text-black font-semibold shadow shadow-rose-800/40
                             hover:shadow-lg hover:shadow-rose-800/60 transition"
                >
                  {s.isLive ? "Umpire Mode" : "Result"}
                </Link>
              )}

              <Link
                href={`/session/${s._id}/view`}
                className="px-4 py-2 rounded-xl bg-zinc-800 ring-1 ring-yellow-300/30
                           text-yellow-200 font-semibold hover:brightness-125 transition"
              >
                View Score
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
