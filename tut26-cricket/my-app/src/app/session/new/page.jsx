"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSessionPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const create = async () => {
    if (!name.trim()) return;
    const res = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim() }),
    });
    const sess = await res.json();
    router.push(`/teams/${sess._id}`); // next step: team selection
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Create New Session</h1>
      <input
        className="border p-2 rounded"
        placeholder="Session name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={create}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Continue
      </button>
    </main>
  );
}
