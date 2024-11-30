import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gym Point - Your Ultimate Fitness Destination",
  description:
    "Discover your strength and transform your fitness journey at GymPoint. Equipped with state-of-the-art facilities, expert trainers, and personalized programs, GymPoint is designed to help you achieve your fitness goals. Join us and redefine your lifestyle today!",
  keywords: ["gym", "fitness center", "workout", "GymPoint", "gym equipment"],
  authors: [
    {
      name: "Najmul Islam",
    },
  ],
  publisher: "Najmul Islam",
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: "https://gympoint.vercel.app",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
