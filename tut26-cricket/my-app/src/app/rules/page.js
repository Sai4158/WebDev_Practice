/*  src/app/rules/page.js  */
"use client";

import Link from "next/link";

export default function RulesPage() {
  return (
    <main
      className="min-h-screen px-3 py-10 flex flex-col items-center
      bg-[linear-gradient(135deg,theme(colors.red.800)_0%,theme(colors.black.900)_40%,theme(colors.black)_85%)]
      text-zinc-200"
    >
      {/* ---------- Back button ---------- */}
      <Link
        href="/"
        className="fixed left-4 top-6 sm:left-8 sm:top-8
          text-sm sm:text-base font-semibold
          bg-white/10 backdrop-blur-md px-4 py-2 rounded-full
          hover:bg-white/15 ring-1 ring-white/10 transition"
      >
        ←&nbsp;Home
      </Link>

      {/* ---------- Title ---------- */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-center my-10 mb-10
        bg-clip-text text-transparent
        bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300"
      >
        🏏GV Cricket🏏
      </h1>

      {/* ---------- Core Gameplay ---------- */}
      <Section title="🌟  Core Gameplay" headingColor="text-green-400">
        <RuleList>
          <li>
            🎯 Max <strong>3&nbsp;overs</strong> per batsman.
          </li>
          <li>
            🧢 Max <strong>2&nbsp;overs</strong> per bowler.
          </li>
          <li>🧤 Wicket-keeper &amp; umpire must be present at all times.</li>
          <li>
            👣 Ball must touch grass to take a run (no run for aerial flicks).
          </li>
          <li>
            ⚖️ Toss winner chooses bat/bowl; other captain picks first
            player—selection alternates.
          </li>
          <li>👥 If squads &gt; 7 players, shorten the match to 6-8 overs.</li>
        </RuleList>
      </Section>

      {/* ---------- Bowling & Penalties ---------- */}
      <Section title="🚨  Bowling & Penalty Rules" headingColor="text-red-400">
        <RuleList>
          <li>
            🆓 Full-toss above the waist ➜ <em>free hit</em> next delivery.
          </li>
          <li>
            🚫 No-balls &amp; wides must be called <strong>loudly</strong> by
            the umpire.
          </li>
          <li>✅ 2 wides in a row → bonus run on the 3rd wide and beyond.</li>
        </RuleList>
      </Section>

      {/* ---------- General ---------- */}
      <Section title="📏  General Rules" headingColor="text-sky-400">
        <RuleList>
          <li>✅ Maximum&nbsp;11 players per team.</li>
          <li>✅ Valid run values: 0, 1, 2, 3, 4, 6.</li>
          <li>
            ✅ <kbd>OUT</kbd> button only after umpire confirms.
          </li>
          <li>
            ↩️ <kbd>UNDO</kbd> — use immediately for mis-taps.
          </li>
          <li>
            🗑️ <kbd>RESET</kbd> clears all data. PIN = <strong>0000</strong>.
          </li>
        </RuleList>
      </Section>

      {/* ---------- New: How to Play ---------- */}
      <Section title="📚  How Cricket Works" headingColor="text-amber-400">
        <p className="leading-relaxed">
          Each team bats once. Two batters are “in” at a time while the bowling
          team delivers <em>overs</em> (sets of six legal balls). Batters score
          runs by running between wickets or by hitting boundaries —{" "}
          <b>4 runs</b> if the ball reaches the rope, <b>6 runs</b> if it clears
          it on the full. Wickets fall through bowled, caught, run-out, or LBW
          dismissals. When
          <b>10&nbsp;wickets</b> fall or <em>max overs</em> expire, innings
          ends. The second batting side then chases the target; more runs = win,
          equal = tie.
        </p>
      </Section>
    </main>
  );
}

/* ---------- Re-usable tiny helpers ---------- */

function Section({ title, headingColor, children }) {
  return (
    <section
      className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-3xl
      px-6 sm:px-8 py-8 mb-10 ring-1 ring-white/10 shadow-lg shadow-black/40"
    >
      <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>{title}</h2>
      {children}
    </section>
  );
}

function RuleList({ children }) {
  return (
    <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
      {children}
    </ul>
  );
}
