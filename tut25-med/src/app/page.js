"use client";
import React, { useEffect, useState } from "react";
import medicineSlots from "../data/medicines";
import { fetchIST } from "../utils/time";

// Ensure IST is used consistently throughout the code
// Remove any local time usage and ensure all time calculations and displays are based on IST

// Update the parseTimeRangeIST function to ensure IST is used
function parseTimeRangeIST(range, istDate) {
  const [startStr, endStr] = range.split("–").map((s) => s.trim());
  const toISTDate = (t) => {
    const [time, meridian] = t.split(" ");
    let [h, m] = time.split(":").map(Number);
    if (meridian.toUpperCase() === "PM" && h !== 12) h += 12;
    if (meridian.toUpperCase() === "AM" && h === 12) h = 0;
    // Always use IST date's year/month/day for slot times
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

// Fix the logic for determining the current and next slots based on IST
const getCurrentAndNextSlotIST = (istDate, slots) => {
  let current = null;
  let next = null;

  // First, check if current time falls within any slot's time range
  for (let i = 0; i < slots.length; i++) {
    const [start, end] = parseTimeRangeIST(slots[i].timeRange, istDate);
    if (istDate >= start && istDate <= end) {
      current = slots[i];
      next = slots[(i + 1) % slots.length]; // Use modulo to wrap around to the first slot
      return { current, next };
    }
  }

  // If no current slot is found, find the next upcoming slot
  let closestNextSlot = null;
  let minTimeDiff = Infinity;

  for (let i = 0; i < slots.length; i++) {
    const [start, end] = parseTimeRangeIST(slots[i].timeRange, istDate);

    if (istDate < start) {
      // This slot is in the future today
      const timeDiff = start.getTime() - istDate.getTime();
      if (timeDiff < minTimeDiff) {
        minTimeDiff = timeDiff;
        closestNextSlot = slots[i];
      }
    } else {
      // Check if this slot is the earliest slot for tomorrow
      // Clone istDate and set to tomorrow with the same slot time
      const tomorrowDate = new Date(istDate);
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      const tomorrowStart = new Date(
        tomorrowDate.getFullYear(),
        tomorrowDate.getMonth(),
        tomorrowDate.getDate(),
        start.getHours(),
        start.getMinutes(),
        0
      );
      const timeDiff = tomorrowStart.getTime() - istDate.getTime();
      if (timeDiff < minTimeDiff) {
        minTimeDiff = timeDiff;
        closestNextSlot = slots[i];
      }
    }
  }

  next = closestNextSlot || slots[0]; // Default to first slot if nothing else found

  return { current, next };
};

export default function Home() {
  const [ist, setIst] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fetchTime = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use a direct method to get the current time in India
      const now = new Date();
      const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30 (5.5 hours in milliseconds)
      const istTime = new Date(utcNow.getTime() + istOffset);

      setIst({
        time: istTime,
        rawUtc: utcNow.getTime(),
        offset: istOffset,
        display: istTime.toISOString(),
      });
    } catch (e) {
      console.error("Error calculating IST:", e);
      setError(
        "Could not calculate IST. Please check your internet connection and try again."
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTime();
    // Update time every 30 seconds
    const timer = setInterval(fetchTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const { current: currentSlot, next: nextSlot } = ist
    ? getCurrentAndNextSlotIST(new Date(ist.rawUtc + ist.offset), medicineSlots)
    : { current: null, next: null };

  // Ensure IST is displayed correctly in the UI
  const formatIST = (date) =>
    date?.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }) || "--:--";

  // Debug output to console
  if (ist) {
    console.log("IST from API:", ist.toString());
    console.log("Current slot:", currentSlot ? currentSlot.label : null);
    console.log("Next slot:", nextSlot ? nextSlot.label : null);
  }

  // Function to toggle screen view
  const toggleViewAll = () => setViewAll(!viewAll);

  // Use a ref to manage speech synthesis state
  const isSpeakingRef = React.useRef(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8 w-full">
      {!viewAll ? (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
          <header className="flex flex-col items-center gap-3 mb-8 text-center">
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
              style={{
                letterSpacing: "-0.02em",
                fontFamily: "'Roboto', sans-serif",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              Sarada Devi's Tablet Reminder
              <span role="img" aria-label="clock" className="ml-2">
                ⏰
              </span>
              <span role="img" aria-label="calendar" className="ml-2">
                📅
              </span>
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 bg-gray-800 bg-opacity-50 px-5 py-3 rounded-xl shadow-md text-xl font-mono font-bold">
                <span
                  className="font-medium text-white text-lg"
                  style={{ textShadow: "1px 1px 2px #000000" }}
                >
                  Time
                </span>
                <span
                  className="text-yellow-300"
                  style={{ textShadow: "1px 1px 2px #000000" }}
                >
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
              <span
                className="text-sm text-white mt-1"
                style={{ textShadow: "1px 1px 2px #000000" }}
              >
                Indian Standard Time
              </span>
            </div>
          </header>

          {/* Main content - Current or Next Medicine */}
          <div className="w-full flex flex-col items-center">
            {loading ? (
              <div className="flex justify-center items-center h-24 text-gray-400">
                <svg
                  className="animate-spin h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-red-500 text-xl font-semibold">
                  {error}
                </div>
                <button
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:blur-md transition-all duration-300 ease-in-out"
                  onClick={fetchTime}
                >
                  Retry
                </button>
              </div>
            ) : (
              <>
                {currentSlot ? (
                  <section className="rounded-2xl shadow-lg bg-green-800 bg-opacity-50 p-8 mb-6 flex flex-col gap-5 items-center w-full max-w-xl border border-green-700">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className="text-2xl font-bold text-white"
                        style={{ textShadow: "1px 1px 2px #000000" }}
                      >
                        Current: {currentSlot.label}
                      </span>
                      <span className="text-base px-3 py-1 rounded bg-green-700 text-white font-medium">
                        {currentSlot.timeRange}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                      {currentSlot.tablets.map((tab) => (
                        <div
                          key={tab.name}
                          className="px-5 py-3 rounded-xl bg-blue-50 shadow-sm text-lg font-medium flex flex-col items-center min-w-[140px] border border-blue-100"
                        >
                          <span className="mb-1 text-center text-gray-800">
                            {tab.name}
                          </span>
                          <span className="text-sm text-gray-500 text-center">
                            {tab.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        aria-label="Speak Reminder"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center gap-2"
                        onClick={() => speakReminder(currentSlot, true)}
                      >
                        {isSpeaking ? "⏸️" : "▶️"}
                        <span>Speak</span>
                      </button>
                    </div>
                  </section>
                ) : (
                  <section className="rounded-2xl shadow-lg bg-orange-800 bg-opacity-50 p-10 mb-8 flex flex-col gap-6 items-center w-full max-w-3xl border border-orange-700">
                    <div className="text-2xl font-bold text-white mb-2 text-center">
                      No medicines at this time
                    </div>
                    {nextSlot && (
                      <div className="flex flex-col items-center text-lg text-white">
                        <span className="mb-1 bg-black px-2 py-1 rounded">
                          Upcoming:
                        </span>
                        <span
                          className="font-bold text-orange-400 text-xl"
                          style={{ textShadow: "1px 1px 2px #000000" }}
                        >
                          {nextSlot.label}
                        </span>
                        <span className="text-base text-white">
                          {nextSlot.timeRange}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-center mt-4">
                      <button
                        aria-label="Speak Reminder"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center gap-2"
                        onClick={() => speakReminder(currentSlot, true)}
                      >
                        {isSpeaking ? "⏸️" : "▶️"}
                        <span>Speak</span>
                      </button>
                    </div>
                  </section>
                )}
                {/* Button to view all medicines */}
                <div className="flex justify-center mb-4">
                  <button
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 hover:blur-md transition-all duration-300 ease-in-out text-xl"
                    onClick={toggleViewAll}
                    aria-expanded={viewAll}
                  >
                    View All Medicines
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        // All medicines screen layout - modernized
        <div className="w-full h-full flex flex-col items-center justify-center bg-white px-2 py-6">
          <button
            className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 hover:blur-md transition-all duration-300 ease-in-out flex items-center gap-2"
            onClick={toggleViewAll}
          >
            <span>←</span> Back
          </button>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            All Medicines
          </h2>
          <div className="flex flex-col gap-6 w-full max-w-2xl pb-8">
            {medicineSlots.map((slot) => (
              <div
                key={slot.label}
                className="rounded-xl bg-white shadow-md p-6 flex flex-col items-center border border-gray-100 mb-2 w-full animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bold text-gray-800 text-xl">
                    {slot.label}
                  </span>
                  <span className="text-sm px-3 py-1 rounded bg-gray-100 text-gray-600 font-medium">
                    {slot.timeRange}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {slot.tablets.map((tab) => (
                    <div
                      key={tab.name}
                      className="px-4 py-3 rounded-xl bg-blue-50 shadow-sm text-base font-medium flex flex-col items-center min-w-[130px] border border-blue-100 mb-2"
                    >
                      <span className="mb-1 text-center text-gray-800">
                        {tab.name}
                      </span>
                      <span className="text-xs text-gray-500 text-center">
                        {tab.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 hover:blur-md transition-all duration-300 ease-in-out flex items-center gap-2"
            onClick={toggleViewAll}
          >
            <span>←</span> Back to Current
          </button>
        </div>
      )}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
      `}</style>
    </main>
  );
}

const speakReminder = (slot, isCurrent) => {
  if (!slot) return;
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    return;
  }
  const label = isCurrent ? "ప్రస్తుతం" : "తర్వాతి";
  const teluguText = `${label} ${slot.timeRange}. ${getTeluguText(
    slot.tablets
  )}`;
  const utterance = new SpeechSynthesisUtterance(teluguText);
  utterance.lang = "te-IN";
  utterance.rate = 0.85;
  const voices = speechSynthesis.getVoices();
  utterance.voice =
    voices.find(
      (v) => v.lang === "te-IN" && v.name.toLowerCase().includes("female")
    ) ||
    voices.find((v) => v.lang === "te-IN") ||
    voices[0];
  utterance.onend = () => setIsSpeaking(false);
  speechSynthesis.speak(utterance);
  setIsSpeaking(true);
};

// Update speakTelugu for slow, female Telugu accent
const speakTelugu = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "te-IN";
  const voices = speechSynthesis.getVoices();
  msg.voice =
    voices.find(
      (voice) =>
        voice.lang === "te-IN" && voice.name.toLowerCase().includes("female")
    ) ||
    voices.find((voice) => voice.lang === "te-IN") ||
    voices[0];
  speechSynthesis.speak(msg);
};

// Define the getTeluguText function
const getTeluguText = (tablets) => {
  return tablets.map((tab) => `${tab.name} for ${tab.desc}`).join(", ");
};
