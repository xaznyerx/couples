import type { Metadata, Viewport } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Jessie Wang | Intercultural & LGBTQ+ Couples Therapist London",
  description:
    "Jessie Wang is a BACP-registered couples therapist in London specialising in intercultural, interracial and LGBTQ+ affirming couples therapy. In-person and online.",
}

export const viewport: Viewport = {
  themeColor: "#faf7f3",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
