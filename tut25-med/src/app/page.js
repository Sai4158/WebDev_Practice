"use client";
import React, { useEffect, useState, useRef } from "react";
import medicineSlots from "../data/medicines";
import { fetchIST } from "../utils/time";
import { getTeluguText, speakTelugu } from "../utils/speech";

function parseTimeRangeIST(range, istDate) {
  const [startStr, endStr] = range.split("–").map((s) => s.trim());
  const toISTDate = (t) => {
    const [time, meridian] = t.split(" ");
    let [h, m] = time.split(":").map(Number);
    if (meridian.toUpperCase() === "PM" && h !== 12) h += 12;
    if (meridian.toUpperCase() === "AM" && h === 12) h = 0;
    return new Date(
      istDate.getFullYear(),
      istDate.getMonth(),
      istDate.getDate(),
      h,
      m,
      0
    );
  };
  return [toISTDate(startStr), toISTDate(endStr)];
}

const getCurrentAndNextSlotIST = (istDate, slots) => {
  let current = null;
  let next = null;
  for (let i = 0; i < slots.length; i++) {
    const [start, end] = parseTimeRangeIST(slots[i].timeRange, istDate);
    if (istDate >= start && istDate <= end) {
      current = slots[i];
      next = slots[(i + 1) % slots.length];
      return { current, next };
    }
  }
  let closestNextSlot = null;
  let minTimeDiff = Infinity;
  for (let i = 0; i < slots.length; i++) {
    const [start] = parseTimeRangeIST(slots[i].timeRange, istDate);
    let compareStart = start;
    if (istDate > start) {
      const tomorrow = new Date(istDate);
      tomorrow.setDate(tomorrow.getDate() + 1);
      compareStart = new Date(
        tomorrow.getFullYear(),
        tomorrow.getMonth(),
        tomorrow.getDate(),
        start.getHours(),
        start.getMinutes()
      );
    }
    const timeDiff = compareStart.getTime() - istDate.getTime();
    if (timeDiff < minTimeDiff) {
      minTimeDiff = timeDiff;
      closestNextSlot = slots[i];
    }
  }
  return { current, next: closestNextSlot };
};

export default function Home() {
  const [ist, setIst] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const speechRef = useRef(null);

  const fetchTime = async () => {
    setLoading(true);
    try {
      const now = new Date();
      const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(utcNow.getTime() + istOffset);
      setIst({ time: istTime, rawUtc: utcNow.getTime(), offset: istOffset });
    } catch (e) {
      setError("Failed to fetch IST.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const { current: currentSlot, next: nextSlot } = ist
    ? getCurrentAndNextSlotIST(new Date(ist.rawUtc + ist.offset), medicineSlots)
    : { current: null, next: null };

  const toggleSpeak = (slot, index, isCurrent) => {
    if (!slot) return;

    const speakNow = (voices) => {
      if (speechSynthesis.speaking && speakingIndex === index) {
        speechSynthesis.cancel();
        setSpeakingIndex(null);
        return;
      }

      const label = slot.label || (isCurrent ? "Now" : "Upcoming");
      const text = `${label}, time: ${slot.timeRange}. Medicines: ${slot.tablets
        .map((t) => t.name)
        .join(", ")}.`;

      const englishVoice =
        voices.find(
          (v) => v.lang === "en-IN" && v.name.toLowerCase().includes("female")
        ) ||
        voices.find((v) => v.lang === "en-IN") ||
        voices.find(
          (v) =>
            v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
        ) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-IN";
      utter.rate = 0.86;
      utter.pitch = 1.1;
      utter.voice = englishVoice;

      utter.onend = () => setSpeakingIndex(null);
      setSpeakingIndex(index);
      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    };

    const voices = speechSynthesis.getVoices();
    if (voices.length) {
      speakNow(voices);
    } else {
      speechSynthesis.onvoiceschanged = () => {
        speakNow(speechSynthesis.getVoices());
      };
    }
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-purple-750 to-indigo-900 text-white px-4 sm:px-6 py-10 sm:py-12 w-full text-base sm:text-lg">
      {!viewAll ? (
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center scale-100 sm:scale-105">
          <header className="flex flex-col items-center gap-4 mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Sarada Devi's <br />
              Tablet Reminder <span>⏰📅</span>
            </h1>
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center gap-2 bg-white/10 px-5 py-2 sm:px-6 sm:py-3 rounded-xl shadow-md text-xl sm:text-2xl font-bold backdrop-blur-md text-purple-100">
                <span className="text-pruple-200">Time</span>
                <span className="text-purple-100">
                  {ist
                    ? new Date(ist.rawUtc + ist.offset).toLocaleTimeString(
                        "en-IN",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }
                      )
                    : "--:--"}
                </span>
              </div>
              <span className="text-sm sm:text-base text-gray-300 mt-2">
                Indian Standard Time
              </span>
            </div>
          </header>

          {loading ? (
            <div className="animate-spin h-10 w-10 border-4 border-purple-400 border-t-transparent rounded-full"></div>
          ) : error ? (
            <div className="text-red-400 font-semibold">{error}</div>
          ) : currentSlot ? (
            <section className="w-full max-w-3xl p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/10 animate-fade-in">
              <div className="text-center mb-4 text-2xl sm:text-3xl font-bold text-white">
                Current: {currentSlot.label}
              </div>
              <div className="text-center mb-4 text-lg sm:text-xl font-semibold text-purple-200">
                {currentSlot.timeRange}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-4 justify-center mt-5 mb-6">
                {currentSlot.tablets.map((tab) => (
                  <div
                    key={tab.name}
                    className="bg-purple-500/30 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-inner min-w-[120px] sm:min-w-[140px] text-center hover:scale-[1.02] transition duration-300 backdrop-blur-md"
                  >
                    <div className="font-semibold text-white text-base sm:text-lg">
                      {tab.name}
                    </div>
                    <div className="text-sm text-purple-100 mt-1">
                      {tab.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className={`px-5 py-2 sm:px-7 sm:py-3 rounded-full font-bold text-white shadow-xl flex items-center gap-2 transition-all duration-300 text-sm sm:text-lg ${
                    speakingIndex === -1
                      ? "bg-red-600 hover:shadow-red-400/50"
                      : "bg-purple-600 hover:shadow-purple-400/50"
                  }`}
                  onClick={() => toggleSpeak(currentSlot, -1, true)}
                >
                  {speakingIndex === -1 ? "⏸️" : "▶️"} Speak
                </button>
              </div>
            </section>
          ) : (
            <section className="w-full max-w-3xl  p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/10 text-center text-white animate-fade-in">
              <div className="text-2xl  mb-2">
                ✅✅✅All Medicines Taken✅✅✅ <br />
                <br />
                <br />
                <a className=" text-blue-100 font-sans underline">
                  {" "}
                  {nextSlot ? (
                    <>
                      Please check again at "{nextSlot.label}"
                      <br /> ({nextSlot.timeRange}).
                    </>
                  ) : (
                    "No more medicines for today. 🎉"
                  )}
                </a>
              </div>
            </section>
          )}

          <button
            className="mt-10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-purple-700 text-white  shadow-xl hover:shadow-purple-500/50 transition duration-300 text-xl sm:text-2xl"
            onClick={() => setViewAll(true)}
          >
            See All Medicines
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-4 sm:px-6 py-10">
          <button
            className="absolute top-12 left-6 px-5 py-2 rounded-lg bg-purple-800 text-white font-bold shadow hover:shadow-purple-500/50 transition duration-300"
            onClick={() => setViewAll(false)}
          >
            ← Back
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white drop-shadow-md">
            All Medicines
          </h2>
          <div className="flex flex-col gap-8 w-full max-w-4xl">
            {medicineSlots.map((slot, i) => (
              <div
                key={slot.label}
                className="rounded-3xl bg-white/10 backdrop-blur-md shadow-xl p-6 sm:p-8 flex flex-col items-center border border-purple-700 w-full animate-fade-in hover:scale-[1.01] transition duration-300"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {slot.label}
                  </span>
                  <span className="text-sm sm:text-base px-4 py-1 rounded bg-purple-700 text-purple-100 font-semibold shadow">
                    {slot.timeRange}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-5 justify-center">
                  {slot.tablets.map((tab) => (
                    <div
                      key={tab.name}
                      className="px-5 py-3 sm:px-6 sm:py-4 rounded-xl bg-purple-500/30 text-white shadow-md flex flex-col items-center min-w-[120px] sm:min-w-[140px] border border-purple-400 hover:shadow-lg transition"
                    >
                      <span className="mb-1 text-center font-semibold text-base sm:text-lg">
                        {tab.name}
                      </span>
                      <span className="text-sm text-purple-100 text-center">
                        {tab.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  aria-label="Speak Reminder"
                  className={`mt-6 px-5 py-2 sm:px-6 sm:py-2 rounded-full font-bold shadow transition-all duration-300 flex items-center gap-2 ${
                    speakingIndex === i
                      ? "bg-red-600 hover:shadow-red-400/50"
                      : "bg-purple-600 hover:shadow-purple-400/50"
                  } text-white ${speakingIndex === i ? "animate-pulse" : ""}`}
                  onClick={() => toggleSpeak(slot, i, false)}
                >
                  {speakingIndex === i ? "⏸️" : "▶️"}{" "}
                  <span>{speakingIndex === i ? "Pause" : "Speak"}</span>
                </button>
              </div>
            ))}
          </div>
          <button
            className="mt-12 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-purple-800 text-white font-bold shadow hover:shadow-purple-500/50 transition duration-300 text-lg sm:text-xl"
            onClick={() => setViewAll(false)}
          >
            ← Back
          </button>
        </div>
      )}
    </main>
  );
}
