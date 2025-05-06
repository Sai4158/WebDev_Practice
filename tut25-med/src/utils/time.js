// Fetches current IST from timeapi.io, fallback to worldtimeapi.org
export async function fetchIST() {
  // Try timeapi.io first
  try {
    const res = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata"
    );
    if (res.ok) {
      const data = await res.json();
      // data.year, data.month, data.day, data.hour, data.minute, data.seconds are all in IST
      // Construct a Date in IST (Asia/Kolkata offset is +5:30)
      return new Date(
        Date.UTC(
          data.year,
          data.month - 1,
          data.day,
          data.hour - 5, // Subtract 5 hours for UTC
          data.minute - 30, // Subtract 30 minutes for UTC
          data.seconds
        )
      );
    }
  } catch (e) {
    // ignore and try fallback
  }
  // Fallback to worldtimeapi.org
  const res2 = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  if (!res2.ok) throw new Error("Failed to fetch IST");
  const data2 = await res2.json();
  // data2.datetime is ISO string, data2.utc_offset is "+05:30"
  // Use the ISO string directly (it includes the offset)
  return new Date(data2.datetime);
}
