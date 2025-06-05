/* ------------------------------------------------------------------
   src/app/session/page.jsx  – list all sessions
-------------------------------------------------------------------*/
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/sessions");
        const data = await res.json();
        setSessions(data || []);
      } catch (e) {
        console.error(e);
        alert("Couldn’t load sessions");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="p-10 text-center">Loading…</p>;
  if (!sessions.length)
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">No sessions yet</h1>
        <Link href="/session/new" className="underline text-blue-500">
          ➕ Create one
        </Link>
      </main>
    );

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">📜 Sessions</h1>

      {sessions.map((s) => (
        <div
          key={s._id}
          className="flex flex-col sm:flex-row sm:items-center justify-between
                     bg-white shadow rounded-xl p-4 gap-4"
        >
          <div>
            <h2 className="font-bold">
              {s.name || "Untitled session"}{" "}
              {!s.isLive && (
                <span className="text-sm font-normal text-green-600">
                  (done)
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-500">
              {new Date(s.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-3">
            {/* umpire / scorer view (live edit) */}
            {s.match && (
              <Link
                href={s.isLive ? `/match/${s.match}` : `/result/${s.match}`}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold"
              >
                {s.isLive ? "Umpire Mode" : "Result"}
              </Link>
            )}

            {/* read-only score board */}
            <Link
              href={`/session/${s._id}/view`}
              className="px-4 py-2 rounded-lg bg-gray-200 text-sm font-semibold"
            >
              View Score
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
