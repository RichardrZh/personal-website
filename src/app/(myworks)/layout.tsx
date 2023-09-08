import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import Gallery from '@/components/shared/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Topbar />
        
      <Gallery>        
        {children}        
      </Gallery>
        
    </>
  )
}
