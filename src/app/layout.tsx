import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kane Lariviere • Portfolio',
  description: 'Kane Lariviere is a software engineer, full stack developer, & designer. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="p-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
