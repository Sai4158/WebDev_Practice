"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TossPage() {
  const [count, setCount] = useState(5);
  const [winner, setWinner] = useState(null);
  const [flip, setFlip] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFlip(true);
          setTimeout(() => {
            const tossWinner = Math.random() < 0.5 ? "Team A" : "Team B";
            setWinner(tossWinner);
          }, 1000); // wait for coin flip animation
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleContinue = () => {
    localStorage.setItem("tossWinner", winner);
    router.push("/match");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">🪙 Toss Time</h1>

      {!winner ? (
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl font-extrabold">{count}</div>
          <div className={`w-24 h-24 ${flip ? "flip" : ""}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlw4D_k7gcWUzoooKUovOv3BwlV2HP4lvXKaPVHmU_QkX3zlsaGnPaHyQF6ArMe0cTQo&usqp=CAU"
              alt="coin"
              className="w-24 h-24 animate-spin-slow"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="text-3xl font-semibold mb-4">
            ☕ {winner} won the toss!
          </div>
          <button
            onClick={handleContinue}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Start Match
          </button>
        </>
      )}

      <style jsx>{`
        .flip img {
          animation: flip 1s ease-in-out;
        }

        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </main>
  );
}
