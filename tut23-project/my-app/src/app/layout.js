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
  title: "DealScape",
  description: "Discover Amazon deals!",
  icons: {
    icon: "/Dealscape.png",
  },
  openGraph: {
    title: "DealScape",
    description: "Discover Amazon deals!.",
    url: "https://dealscape.vercel.app",
    siteName: "DealScape",
    images: [
      {
        url: "/Dealscape.png",
        width: 1200,
        height: 630,
        alt: "DealScape Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DealScape",
    description: "Discover Amazon deals!",
    images: ["/Dealscape.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
