import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// ✅ Font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// ✅ Full metadata setup
export const metadata: Metadata = {
  title: "Nadeer E P - Flutter Developer",
  description:
    "Building beautiful, fast, and scalable apps with Flutter. Portfolio showcasing projects, skills, and achievements.",

  keywords: [
    "Nadeer E P",
    "Flutter Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Dart",
    "Firebase",
    "React Native",
    "Portfolio",
    "UI Design",
    "Full Stack Developer",
  ],

  authors: [{ name: "Nadeer E P", url: "https://nadeerep-portfolio.vercel.app" }], // replace with your actual domain

  icons: {
    icon: [
      { url: "/nadeer-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/nadeer-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/nadeer-icon.png",
    shortcut: "/nadeer-icon.png",
  },

  openGraph: {
    title: "Nadeer E P - Flutter Developer",
    description:
      "Building beautiful, fast, and scalable apps with Flutter. Portfolio showcasing projects, skills, and achievements.",
    url: "https://nadeerep-portfolio.vercel.app", // 🔁 replace with your actual domain (e.g. https://nadeer.dev)
    siteName: "Nadeer E P",
    images: [
      {
        url: "https://nadeerep-portfolio.vercel.app/nadeer-icon.png", // 🔁 absolute URL for OpenGraph
        width: 1200,
        height: 630,
        alt: "Nadeer E P - Flutter Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nadeer E P - Flutter Developer",
    description:
      "Building beautiful, fast, and scalable apps with Flutter. Portfolio showcasing projects, skills, and achievements.",
    creator: "@nadeer", // optional: your X/Twitter handle
    images: ["https://nadeerep-portfolio.vercel.app/nadeer-icon.png"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  themeColor: "#0f0f1e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={{ fontFamily: poppins.style.fontFamily }}
      className="scroll-smooth"
    >
      <body className="antialiased bg-slate-950 text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
