import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Yumyfy - Your One-Stop Super App",
  description: "Groceries, Pharmacy, Food & Parcel Delivery in One App",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🔥 Add this script BEFORE anything renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const t=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(_){}})();`,
          }}
        />

        <meta name="color-scheme" content="dark light" />

        <style>{`
          :root {
            color-scheme: light;
          }
          html.dark {
            color-scheme: dark;
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
