import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karla Caves | Lonavala Places To Visit | Lonavala Maharashtra India",
  description: "The Karla caves are ancient Buddhist rock cut cave shrines and top the list of lonavala places to visit. They were once the worship place of the Buddhists.",
    icons: {
    icon: [
      { url: '/karla-32x32.png', sizes: '16x16', type: 'image/png' },
      { url: '/karla-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/karla-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
