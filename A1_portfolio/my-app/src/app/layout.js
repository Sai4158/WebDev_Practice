import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sai's portfolio",
  description: "sai rangineeni portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-50 pb-9 ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
