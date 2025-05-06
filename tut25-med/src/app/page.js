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
    // Update time every minute
    const timer = setInterval(fetchTime, 60000);
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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 px-2 py-6">
      {!viewAll ? (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
          <header className="flex flex-col items-center gap-4 mb-10">
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white text-center"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span role="img" aria-label="pill" className="align-middle mr-2">
                💊
              </span>
              Sarada Devi's Tablet Reminder
            </h1>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-3 bg-neutral-100 dark:bg-neutral-800 px-6 py-3 rounded-2xl shadow-lg text-2xl font-mono font-bold">
                <span className="font-medium text-neutral-700 dark:text-neutral-200 text-lg">
                  IST Time
                </span>
                <span className="text-blue-700 dark:text-blue-300">
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
                <button
                  onClick={fetchTime}
                  className="ml-2 px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                  aria-label="Refresh Time"
                >
                  ↻
                </button>
              </div>
              <span className="text-base text-neutral-500 dark:text-neutral-400 mt-2">
                All times are shown in Indian Standard Time (IST)
              </span>
            </div>
          </header>

          {/* Debug info on UI */}
          {/* {ist && (
            <div className="w-full max-w-xl mb-6 p-4 rounded bg-neutral-900 text-neutral-100 text-xs overflow-x-auto">
              <div>
                <b>DEBUG:</b> IST from API: {ist.toString()}
              </div>
              <div>
                <b>Current slot:</b> {currentSlot ? currentSlot.label : "None"}
              </div>
              <div>
                <b>Next slot:</b> {nextSlot ? nextSlot.label : "None"}
              </div>
            </div>
          )} */}

          {loading ? (
            <div className="flex justify-center items-center h-32 animate-pulse text-2xl font-semibold text-neutral-400">
              Loading IST…
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-4">
              <div className="text-red-500 text-center text-2xl font-semibold">
                {error}
              </div>
              <button
                onClick={fetchTime}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all text-lg"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center w-full">
                {currentSlot ? (
                  <section className="rounded-3xl shadow-2xl bg-white/80 dark:bg-neutral-800/80 p-10 mb-8 flex flex-col gap-6 items-center w-full max-w-xl backdrop-blur-md border border-neutral-200 dark:border-neutral-700">
                    <div className="flex flex-col items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-neutral-900 dark:text-white">
                        {currentSlot.label}
                      </span>
                      <span className="text-lg px-4 py-2 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold">
                        {currentSlot.timeRange}
                      </span>
                      <span className="text-base text-neutral-500 dark:text-neutral-300">
                        {formatIST(ist)}
                      </span>
                      <button
                        aria-label="Play Telugu Voice"
                        className="mt-2 text-3xl hover:scale-110 transition text-neutral-500 dark:text-neutral-300"
                        onClick={() =>
                          speakTelugu(getTeluguText(currentSlot.tablets))
                        }
                      >
                        🔊
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center">
                      {currentSlot.tablets.map((tab) => (
                        <div
                          key={tab.name}
                          className="px-6 py-4 rounded-full bg-neutral-100 dark:bg-neutral-700 shadow-lg text-xl font-bold flex flex-col items-center min-w-[150px] border border-neutral-200 dark:border-neutral-700 mb-2"
                        >
                          <span className="mb-1 text-center text-neutral-900 dark:text-white">
                            {tab.name}
                          </span>
                          <span className="text-base text-neutral-500 dark:text-neutral-300 text-center font-normal">
                            {tab.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : (
                  <section className="rounded-3xl shadow-2xl bg-white/80 dark:bg-neutral-800/80 p-10 mb-8 flex flex-col gap-6 items-center w-full max-w-xl backdrop-blur-md border border-neutral-200 dark:border-neutral-700">
                    <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-200 mb-2 text-center">
                      No medicines at this time
                    </div>
                    {nextSlot && (
                      <div className="flex flex-col items-center text-xl text-neutral-500 dark:text-neutral-400">
                        <span className="mb-1">Next Reminder:</span>
                        <span className="font-bold text-blue-700 dark:text-blue-300 text-xl">
                          {nextSlot.label}
                        </span>
                        <span className="text-lg">{nextSlot.timeRange}</span>
                      </div>
                    )}
                  </section>
                )}

                {/* Button to show all tablets */}
                <div className="flex justify-center mb-4">
                  <button
                    className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all text-2xl"
                    onClick={toggleViewAll}
                    aria-expanded={viewAll}
                  >
                    View All Medicines
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        // All medicines screen layout
        <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 px-2 py-6">
          <button
            className="absolute top-4 left-4 px-4 py-2 rounded bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            onClick={toggleViewAll}
          >
            Back
          </button>
          <h2 className="text-3xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
            All Medicines
          </h2>
          <div className="flex flex-col gap-8 w-full max-w-2xl">
            {medicineSlots.map((slot) => (
              <div
                key={slot.label}
                className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow p-6 flex flex-col items-center border border-neutral-200 dark:border-neutral-700 mb-4 w-full animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-bold text-neutral-900 dark:text-white text-xl">
                    {slot.label}
                  </span>
                  <span className="text-sm px-3 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold">
                    {slot.timeRange}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {slot.tablets.map((tab) => (
                    <div
                      key={tab.name}
                      className="px-5 py-3 rounded-full bg-white dark:bg-neutral-900 shadow text-lg font-semibold flex flex-col items-center min-w-[130px] border border-neutral-200 dark:border-neutral-700 mb-2"
                    >
                      <span className="mb-1 text-center text-neutral-900 dark:text-white">
                        {tab.name}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-300 text-center font-normal">
                        {tab.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-6 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            onClick={toggleViewAll}
          >
            Back
          </button>
        </div>
      )}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}

// Ensure only one definition of speakTelugu exists
const speakTelugu = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "te-IN";
  const voices = speechSynthesis.getVoices();
  msg.voice =
    voices.find(
      (voice) => voice.name.includes("Female") && voice.lang === "te-IN"
    ) || voices[0];
  speechSynthesis.speak(msg);
};
