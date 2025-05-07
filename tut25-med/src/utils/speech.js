export function getTeluguText(tablets) {
  return `Medicines to take now: ${tablets.map((t) => t.name).join(", ")}`;
}

export function speakTelugu(text, onStart = () => {}, onEnd = () => {}) {
  if (typeof window === "undefined") return;

  const synth = window.speechSynthesis;

  const loadVoices = () =>
    new Promise((resolve) => {
      const voices = synth.getVoices();
      if (voices.length) resolve(voices);
      else synth.onvoiceschanged = () => resolve(synth.getVoices());
    });

  loadVoices().then((voices) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.95;
    utter.pitch = 1.15;

    utter.voice =
      voices.find(
        (v) =>
          v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
      ) ||
      voices.find(
        (v) =>
          v.lang.startsWith("en") && v.name.toLowerCase().includes("google")
      ) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];

    utter.onstart = onStart;
    utter.onend = onEnd;

    synth.cancel();
    synth.speak(utter);
  });
}
