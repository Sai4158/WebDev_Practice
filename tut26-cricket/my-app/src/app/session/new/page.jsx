/* ---------------------------------------------------------------
   src/app/session/new/page.jsx – step 0: name the session
---------------------------------------------------------------- */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSessionPage() {
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const createSession = async () => {
    if (!name.trim()) {
      alert("Type a session name first!");
      return;
    }
    setSaving(true);
    try {
      const r = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!r.ok) throw new Error(await r.text());
      const s = await r.json();
      router.push(`/teams/${s._id}`); // 👉 jump to team-selection step
    } catch (e) {
      alert("Could not create session – " + e.message);
      setSaving(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                 bg-[linear-gradient(135deg,theme(colors.red.800)_0%,theme(colors.black.900)_40%,theme(colors.black)_85%)]
                 text-zinc-200 px-6"
    >
      <div
        className="w-full max-w-sm bg-black/30 backdrop-blur-md ring-1 ring-white/10
                      rounded-2xl shadow-2xl shadow-black/60 p-8 space-y-6"
      >
        <h1
          className="text-3xl font-extrabold text-center
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300"
        >
          🆕 New Session
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Session name (e.g. 2025 Summer League G3)"
          className="w-full p-3 rounded-xl bg-black/20 ring-1 ring-yellow-300/30
                     focus:ring-rose-300 outline-none text-white placeholder:text-zinc-400"
        />

        <button
          onClick={createSession}
          disabled={saving}
          className={`w-full py-3 rounded-xl font-semibold transition
                      bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black
                      shadow-lg shadow-rose-800/40
                      hover:shadow-red-600/70 active:scale-[.98]
                      disabled:opacity-60 disabled:shadow-none`}
        >
          {saving ? "Creating…" : "Next → Select Teams"}
        </button>

        <a
          href="/"
          className="block text-center mt-2 text-sm text-amber-300 hover:underline"
        >
          ← Back&nbsp;Home
        </a>
      </div>
    </main>
  );
}
