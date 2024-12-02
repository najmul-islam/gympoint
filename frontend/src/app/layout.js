import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import StoreProvider from "./storeprovider";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        <StoreProvider>
          <Header />
          {children}
          <Toaster position="top-right" richColors expand={false} />
          <Footer />
        </StoreProvider>
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
