// import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"

"use client"

import localFont from "next/font/local"

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })
export const fontTitr = localFont({
  
  src: [
    // {
    //   path: '../../public/fonts/titr/TitrB.ttf',
    //   weight: '900'
    // },
    {
      path: '../../../public/fonts/titr/TitrB.ttf',
      weight: '900'
    }
  ],
  variable: '--font-titr'
})