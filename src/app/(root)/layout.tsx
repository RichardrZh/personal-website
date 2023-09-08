import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Topbar />
        
      <section className='main-container w-screen max-w-full'>
          {children}
      </section>
        
      <Footer/>
    </>
  )
}
