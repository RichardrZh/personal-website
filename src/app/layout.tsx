import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Richard Zhuang',
  description: 'A personal website made by Richard Zhuang',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' m-0 p-0 bg-darkmode-background'}>
        {children}
      </body>
    </html>
  )
}
