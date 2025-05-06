// Returns Telugu-style medicine message for TTS
export function getTeluguText(tablets) {
  const names = tablets.map((t) => t.name).join(", ");
  return `ఇప్పుడు తీసుకోవాల్సిన మందులు: ${names}`;
}

// Speaks the Telugu message using speechSynthesis
export function speakTelugu(text) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utter = new window.SpeechSynthesisUtterance(text);
  utter.lang = "te-IN";
  utter.rate = 0.95;
  utter.pitch = 1.1;
  window.speechSynthesis.speak(utter);
}
