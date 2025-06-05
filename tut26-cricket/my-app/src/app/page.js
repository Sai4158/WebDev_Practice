/*  src/app/page.js  */
"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center gap-16 py-12 px-5
      bg-[linear-gradient(135deg,theme(colors.red.800)_0%,theme(colors.black.900)_40%,theme(colors.black)_85%)]
      text-zinc-200"
    >
      {/* -------------------- Hero -------------------- */}
      <header className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/gvLogo.png"
          alt="GV Cricket logo"
          width={120}
          height={120}
          priority
          className="h-48 w-48 object-contain drop-shadow-[0_4px_25px_rgba(255,50,90,0.95)] rounded-full"
        />

        <h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight
          bg-clip-text text-transparent
          bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300"
        >
          GV&nbsp;Cricket
        </h1>
      </header>

      {/* -------------------- CTA Buttons -------------------- */}
      <section className="w-full max-w-lg flex flex-col sm:flex-row gap-6">
        <a
          href="/session/new"
          className="flex-1 text-center py-3 rounded-2xl
           bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black
            font-semibold shadow-lg shadow-rose-800/40 transition"
        >
          Start&nbsp;Match
        </a>
        <a
          href="/session"
          className="flex-1 text-center py-3 rounded-2xl
           bg-gradient-to-r from-yellow-200 via-rose-100 to-orange-300 text-black
            font-semibold shadow-lg shadow-rose-800/40 transition"
        >
          View&nbsp;Sessions
        </a>

        <a
          href="/rules"
          className="flex-1 text-center py-3 rounded-2xl
            bg-white/10 backdrop-blur-md ring-1 ring-white/10
            hover:bg-white/15 font-semibold transition"
        >
          View&nbsp;Rules
        </a>
      </section>

      {/* -------------------- About -------------------- */}
      <section className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-3xl p-8 space-y-4 ring-1 ring-white/10 shadow-lg shadow-black/40">
        <h2 className="text-2xl font-bold text-amber-300">About&nbsp;Us</h2>
        <p className="leading-relaxed">
          <strong>GV Cricket</strong> sprang to life in&nbsp;<b>2022</b>—an
          open-arm league powered by Garnet Valley’s love of summer cricket.
          Weekend matches, coaching clinics, and friendly derbies keep the
          valley buzzing all season. Catch a glimpse below!
        </p>
      </section>

      {/* -------------------- Video Gallery -------------------- */}
      <section className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["Cricket1", "Cricket2", "Cricket3"].map((clip, i) => (
          <figure
            key={clip}
            className="overflow-hidden rounded-3xl ring-1 ring-white/10
              bg-white/5 backdrop-blur-md shadow-lg shadow-black/40 flex flex-col"
          >
            <video
              className="w-full h-auto aspect-video"
              controls
              preload="metadata"
              poster={`/Thumb${i + 1}.png`}
            >
              <source src={`/videos/${clip}.mp4`} type="video/mp4" />
              Sorry, your browser doesn’t support embedded videos.
            </video>
            <figcaption className="p-3 text-center text-sm text-zinc-300">
              Highlight&nbsp;{i + 1}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
