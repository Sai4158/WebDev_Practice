/* ------------------------------------------------------------------
   src/app/session/[id]/view/page.jsx  – spectator scoreboard
-------------------------------------------------------------------*/
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ViewSession() {
  const { id } = useParams(); // /session/[id]/view
  const [match, setMatch] = useState(null);
  const [noMatchYet, setNoMatchYet] = useState(false);

  /* poll every 5 s so the UI stays live -------------------------------- */
  useEffect(() => {
    if (!id) return;
    let t;

    const load = async () => {
      try {
        /* 1️⃣  look up the session             */
        const ses = await fetch(`/api/sessions/${id}`).then((r) => r.json());
        if (!ses?.match) {
          // match not created yet
          setNoMatchYet(true);
          return;
        }
        setNoMatchYet(false);

        /* 2️⃣  fetch the linked match document */
        const m = await fetch(`/api/matches/${ses.match}`).then((r) =>
          r.json()
        );
        setMatch(m ?? null);
      } catch (e) {
        console.error(e);
      }
    };

    load();
    t = setInterval(load, 5_000);
    return () => clearInterval(t);
  }, [id]);

  /* --------------------------------------------- early returns -------- */
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

  /* ------------- helpers ------------------ */
  const overs = (match.balls.length / 6).toFixed(1); // e.g. “3.2”
  const runRate = match.balls.length
    ? (match.score / (match.balls.length / 6)).toFixed(2)
    : "--";

  const remaining =
    match.teamA?.length + match.teamB?.length ? 10 - match.outs : "--";

  const lastOver = match.balls.slice(-6);

  /* --------------------------------------------- UI ------------------- */
  return (
    <main
      className="min-h-screen flex flex-col items-center pt-10 px-4
                     bg-black text-amber-200 font-[Inter] tracking-wide"
    >
      {/* headline */}
      <h1 className="text-4xl font-extrabold mb-8 drop-shadow-[0_0_8px_rgba(255,30,70,0.9)]">
        Live&nbsp;Score
      </h1>

      {/* scoreboard panel */}
      <section
        className="w-full max-w-md bg-[#111]/70 border border-[#444] rounded-3xl
                   backdrop-blur-md shadow-[0_0_30px_#ff1e46aa] p-8 space-y-6"
      >
        {/* current innings & score */}
        <header className="text-center space-y-1">
          <p className="uppercase text-xs tracking-wider text-amber-400">
            {match.innings === "first" ? "Team A Batting" : "Team B Batting"}
          </p>
          <p className="text-6xl font-black">{match.score}</p>
          <p className="text-sm text-zinc-400">
            {overs} ov&nbsp;&nbsp;|&nbsp;&nbsp;RR&nbsp;{runRate}
          </p>
        </header>

        {/* quick stats */}
        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <Stat label="Wickets" value={match.outs} />
          <Stat label="Remaining" value={remaining} />
          <Stat label="Max Overs" value={match.overs} />
          <Stat label="Wide in row" value={match.widesInRow ?? 0} />
        </div>

        {/* last-over strip */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {lastOver.map((b, i) => (
            <Ball key={i} {...b} />
          ))}
        </div>
      </section>

      {/* back */}
      <p className="mt-8 text-sm">
        <NavBack />
      </p>
    </main>
  );
}

/* ---------------- tiny components ---------------- */
function SplashMsg({ children }) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                     bg-black text-amber-200 text-center px-4"
    >
      {children}
    </main>
  );
}

const NavBack = () => (
  <Link href="/session" className="underline underline-offset-4 text-amber-300">
    ← Back&nbsp;to&nbsp;sessions
  </Link>
);

const Stat = ({ label, value }) => (
  <div>
    <div className="text-2xl font-bold drop-shadow-[0_0_6px_rgba(255,30,70,0.9)]">
      {value}
    </div>
    <div className="uppercase text-xs tracking-widest text-zinc-400">
      {label}
    </div>
  </div>
);

const Ball = ({ type, value }) => {
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

  const text = type === "dot" ? "•" : type === "out" ? "W" : value ?? "";

  return (
    <span
      className={`w-9 h-9 rounded-full flex items-center justify-center
                  font-bold text-white ${bg}`}
    >
      {text}
    </span>
  );
};
