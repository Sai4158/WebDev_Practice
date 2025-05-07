export function getTeluguText(tablets) {
  return `ఇప్పుడు తీసుకోవాల్సిన మందులు: ${tablets
    .map((t) => t.name)
    .join(", ")}`;
}

export function speakTelugu(text, onStart = () => {}, onEnd = () => {}) {
  if (typeof window === "undefined") return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "te-IN";
  utter.rate = 0.85;
  utter.pitch = 1.1;

  const voices = window.speechSynthesis.getVoices();
  utter.voice =
    voices.find(
      (v) => v.lang === "te-IN" && v.name.toLowerCase().includes("female")
    ) ||
    voices.find((v) => v.lang === "te-IN") ||
    voices[0];

  utter.onstart = onStart;
  utter.onend = onEnd;

  window.speechSynthesis.speak(utter);
}
