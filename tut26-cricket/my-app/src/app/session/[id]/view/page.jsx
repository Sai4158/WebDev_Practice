/* ------------------------------------------------------------------
   src/app/session/[id]/view/page.jsx  – spectator scoreboard (modern, split overs)
-------------------------------------------------------------------*/
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ViewSession() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [noMatchYet, setNoMatchYet] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  /* ───────── poll match every 5 s ───────── */
  useEffect(() => {
    if (!id) return;
    let timer;
    const load = async () => {
      try {
        const ses = await fetch(`/api/sessions/${id}`).then((r) => r.json());
        if (!ses?.match) return setNoMatchYet(true);
        setNoMatchYet(false);
        const m = await fetch(`/api/matches/${ses.match}`).then((r) =>
          r.json()
        );
        setMatch(m ?? null);
      } catch (e) {
        console.error(e);
      }
    };
    load();
    timer = setInterval(load, 5_000);
    return () => clearInterval(timer);
  }, [id]);

  /* ───────── early states ───────── */
  if (noMatchYet)
    return (
      <SplashMsg>
        The match hasn’t started yet.
        <p className="mt-6">
          <NavBack />
        </p>
      </SplashMsg>
    );

  if (!match)
    return (
      <SplashMsg>
        Loading…
        <p className="mt-6">
          <NavBack />
        </p>
      </SplashMsg>
    );

  /* ───────── helpers ───────── */
  const oversPlayed = (match.balls.length / 6).toFixed(1);
  const runRate = match.balls.length
    ? (match.score / (match.balls.length / 6)).toFixed(2)
    : "--";
  const remaining =
    match.teamA.length + match.teamB.length ? 10 - match.outs : "--";

  // history already stores `innings` when recorded by the scorer page
  const oversA = groupByOver(
    match.history.filter((h) => h.innings === "first")
  );
  const oversB = groupByOver(
    match.history.filter((h) => h.innings === "second")
  );

  /* ───────── UI ───────── */
  return (
    <main className="min-h-screen bg-black text-white font-inter px-4 pb-10 flex flex-col items-center">
      {/* back (top‑left) */}
      <Link
        href="/session"
        className="absolute top-5 left-4 text-amber-300 underline hover:text-amber-200"
      >
        ← Back
      </Link>

      {/* headline & live score at top */}
      <section className="w-full max-w-xl bg-[#111]/80 ring-1 ring-zinc-700 rounded-3xl mt-16 p-8 shadow-2xl shadow-rose-700/40 text-center space-y-4">
        <h1 className="text-4xl font-extrabold drop-shadow-[0_0_10px_rgba(255,80,100,.9)]">
          Scoreboard
        </h1>
        <p className="text-lg font-medium text-amber-300">
          🏏 {match.innings === "first" ? "Team A Batting" : "Team B Batting"}
        </p>
        <p className="text-6xl font-extrabold">{match.score}</p>
        <p className="text-lg text-zinc-400">
          {oversPlayed} overs  |  RR {runRate}
        </p>
        <div className="grid grid-cols-2 gap-4 text-center text-lg pt-6">
          <Stat label="Wickets" value={match.outs} />
          <Stat label="Remaining" value={remaining} />
          <Stat label="Max Overs" value={match.overs} />
          <Stat label="Wide Row" value={match.widesInRow ?? 0} />
        </div>
      </section>

      {/* team cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <TeamCard
          team="A"
          players={match.teamA}
          overs={oversA}
          show={showA}
          setShow={setShowA}
        />
        <TeamCard
          team="B"
          players={match.teamB}
          overs={oversB}
          show={showB}
          setShow={setShowB}
        />
      </div>

      {/* back bottom */}
      <p className="mt-10 text-lg">
        <NavBack />
      </p>
    </main>
  );
}

/* ───────── helpers & small comps ───────── */
function groupByOver(arr) {
  return arr.reduce((acc, b) => {
    (acc[b.over] ||= []).push(b);
    return acc;
  }, {});
}

function TeamCard({ team, players, overs, show, setShow }) {
  const colour = team === "A" ? "text-sky-300" : "text-pink-300";
  return (
    <div className="bg-[#111]/80 p-6 rounded-2xl ring-1 ring-zinc-700 shadow-xl">
      <h2 className={`text-xl font-bold mb-4 ${colour}`}>🅰️ Team {team}</h2>
      <ul className="list-disc ml-5 text-base space-y-0.5">
        {players.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <button
        onClick={() => setShow((s) => !s)}
        className="mt-4 underline text-sm text-amber-300 hover:text-amber-200"
      >
        {show ? "Hide" : "Show"} Over History
      </button>

      {show && (
        <div className="mt-5 space-y-4 max-h-72 overflow-y-auto pr-2">
          {Object.entries(overs).length ? (
            Object.entries(overs).map(([o, balls]) => (
              <div key={o}>
                <div className="font-semibold mb-1">Over {+o + 1}</div>
                <div className="flex gap-2 flex-wrap">
                  {balls.map((b, i) => (
                    <Ball key={i} {...b} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-zinc-400">No balls recorded yet.</p>
          )}
        </div>
      )}
    </div>
  );
}

function SplashMsg({ children }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-amber-200 text-center px-4">
      {children}
    </main>
  );
}

const NavBack = () => (
  <Link
    href="/session"
    className="underline underline-offset-4 text-amber-300 hover:text-amber-100"
  >
    ← Back&nbsp;to&nbsp;sessions
  </Link>
);

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-3xl font-bold drop-shadow-[0_0_6px_rgba(255,30,70,0.9)]">
        {value}
      </div>
      <div className="uppercase text-sm tracking-wider text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function Ball({ type, value }) {
  const bg =
    type === "run" && value === 4
      ? "bg-orange-500"
      : type === "run" && value === 6
      ? "bg-violet-600"
      : type === "run"
      ? "bg-blue-600"
      : type === "dot"
      ? "bg-zinc-500"
      : type === "out"
      ? "bg-red-600"
      : "bg-yellow-400 text-black";
  const txt = type === "dot" ? "•" : type === "out" ? "W" : value ?? "";
  return (
    <span
      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white ${bg}`}
    >
      {txt}
    </span>
  );
}
