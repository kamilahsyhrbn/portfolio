import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { LayoutWithHeader } from "@/components/layout/layout-with-header";
import { Toaster } from "react-hot-toast";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kamilah Syahrabanu's Portfolio",
  description:
    "Explore Kamilah Syahrabanu’s portfolio — a Frontend Web Developer skilled in React and the MERN stack. Showcasing innovative projects, user-friendly interfaces, and scalable web applications built for performance.",
  icons: {
    icon: "/tab-logo.png",
    shortcut: "/tab-logo.png",
    apple: "/tab-logo.png",
  },
  keywords: [
    "Kamilah Syahrabanu",
    "Kamilah Syahrabanu's Portfolio",
    "Frontend Web Developer",
    "Web Developer",
    "React",
    "MERN Stack",
    "User-Friendly Interfaces",
    "Scalable Web Applications",
    "Performance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased scroll-smooth overflow-x-hidden`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <LayoutWithHeader>{children}</LayoutWithHeader>
      </body>
    </html>
  );
}
