'use client'

import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

import { Analytics } from '@vercel/analytics/react'

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from 'convex/react'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ClerkProvider publishableKey='pk_test_dml0YWwtZG9yeS01OC5jbGVyay5hY2NvdW50cy5kZXYk'>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <div className="p-4">
              <Header />
              {children}
              <Analytics />
              <Footer />
            </div>
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </body>
    </html>
  )
}
