import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rayean Patric F - AI Systems Engineer & Researcher",
  description:
    "AI Systems Engineer & Researcher | SDE @ AugurAI | 3 papers published, 2 under review | Ex-IEEE Student Branch Chairperson | FOSS Society Founder",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
