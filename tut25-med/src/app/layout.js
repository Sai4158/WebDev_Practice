import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sarada Devi's Tablet Reminder",
  description:
    "Get timely reminders for all scheduled medicines throughout the day.",
  openGraph: {
    title: "Sarada Devi's Tablet Reminder",
    description:
      "Timely reminders to keep medicine schedules safe and organized.",
    url: "https://yourdomain.com",
    siteName: "Tablet Reminder",
    images: [
      {
        url: "https://yourdomain.com/reminder-preview.png",
        width: 1200,
        height: 630,
        alt: "Tablet Reminder Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarada Devi's Tablet Reminder",
    description: "Timely medicine reminders with safe scheduling.",
    images: ["https://yourdomain.com/reminder-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Sarada Devi's Tablet Reminder" />
        <meta
          property="og:description"
          content="Timely reminders to keep medicine schedules safe and organized."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/reminder-preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sarada Devi's Tablet Reminder" />
        <meta
          name="twitter:description"
          content="Timely medicine reminders with safe scheduling."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/reminder-preview.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
