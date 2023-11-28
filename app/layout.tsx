import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Analytics } from '@vercel/analytics/react';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Richard Zhuang',
  description: 'A personal website made by Richard Zhuang. Learn a bit about me and what I do!', /* include project keywords frontend backend css html js c# etc? */
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body className={inter.className + " h-full"}>{children}</body>
      <Analytics />
    </html>
  )
}
