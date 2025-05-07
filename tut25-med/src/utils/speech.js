export function getTeluguText(tablets) {
  return `ఇప్పుడు తీసుకోవాల్సిన మందులు: ${tablets
    .map((t) => t.name)
    .join(", ")}`;
}

export function speakTelugu(text) {
  if (typeof window === "undefined") return;
  const utter = new window.SpeechSynthesisUtterance(text);
  utter.lang = "te-IN";
  utter.rate = 0.95;
  utter.pitch = 1.1;
  window.speechSynthesis.speak(utter);
}
