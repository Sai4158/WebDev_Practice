export async function fetchIST() {
  try {
    const res = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata"
    );
    if (res.ok) {
      const data = await res.json();
      return new Date(
        Date.UTC(
          data.year,
          data.month - 1,
          data.day,
          data.hour - 5,
          data.minute - 30,
          data.seconds
        )
      );
    }
  } catch (_) {}

  const fallback = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  if (!fallback.ok) throw new Error("Failed to fetch IST");
  const data = await fallback.json();
  return new Date(data.datetime);
}
