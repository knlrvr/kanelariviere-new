'use client'

import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

import Script from 'next/script'

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
      {/* removed until cookie banner is created (: */}
      {/* <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script> */}
      <head>
        <title>Kane Lariviere • Portfolio</title>
        <meta name="description" content="Kane Lariviere • Software Engineer. Full Stack Developer. Designer." />
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body>
      <ClerkProvider publishableKey='pk_test_dml0YWwtZG9yeS01OC5jbGVyay5hY2NvdW50cy5kZXYk'>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <div className="p-4">
              <Header />
              {children}
              <Footer />
            </div>
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </body>
    </html>
  )
}
