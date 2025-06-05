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
    if (!name.trim()) return alert("Type a session name first!");
    setSaving(true);
    try {
      const r = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!r.ok) throw new Error(await r.text());
      const s = await r.json();
      router.push(`/teams/${s._id}`); // ← your existing team selector
    } catch (e) {
      alert("Could not create session – " + e.message);
      setSaving(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                     bg-gradient-to-b from-white to-blue-100 p-6"
    >
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">🆕 New Session</h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Session name (e.g. 2025 Summer League Game 3)"
          className="w-full p-3 border rounded-xl"
        />

        <button
          onClick={createSession}
          disabled={saving}
          className="w-full mt-6 py-3 rounded-xl font-semibold
                     bg-indigo-600 disabled:bg-indigo-400 text-white"
        >
          {saving ? "Creating…" : "Next → Select Teams"}
        </button>

        <a href="/" className="block mt-4 text-blue-600 underline text-sm">
          🔙 Home
        </a>
      </div>
    </main>
  );
}
