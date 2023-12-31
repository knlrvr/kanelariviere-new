import React from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/utils/reveal'

import Gallery from '@/components/gallery'

import { 
  BsBoxArrowUpRight
} from 'react-icons/bs'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | The Sky Is Fake',
  description: 'The Sky Is Fake | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

const TSIF = () => {
    return (
        <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <Reveal>
            <span className="intro-text font-migra -mb-4">The Sky Is Fake.</span>
          </Reveal>
          <Reveal>
            <p className="intro-about font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg lg:text-xl text-neutral-500 mb-8">
              Obviously, the sky isn&apos;t fake. Right? Every now and then, the sky seems less like the sky, 
              and more like a painting. Here are a few of my favorite shots of these moments. 
            </p>
          </Reveal>
        </div>

        <Gallery />

        <div className="mt-12 font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg lg:text-xl text-neutral-500 mb-8">
          <p className="text-neutral-500 intro-about">
            To learn more about The Sky Is Fake, please visit <br />
            <Link href="https://www.theskyisfake.org" target="_blank"
              className="inline-flex items-center space-x-2 hover:text-blue-400 duration-300">
              <span>theskyisfake.org</span>
              <BsBoxArrowUpRight className="text-sm" />
            </Link>
          </p>
        </div>
        </div>
    )
}

export default TSIF