import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This is where we add all the screens */}
      <Stack.Screen name="index" options={{ headerTitle: "Index" }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen name="(not-found)" options={{ headerTitle: "Not Found" }} />
    </Stack>
  );
}
