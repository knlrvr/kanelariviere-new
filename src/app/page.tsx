import React from 'react'

import {
  SiTeespring
} from 'react-icons/si'
import {
  LuBox
} from 'react-icons/lu'
import { Reveal } from '@/components/utils/reveal'
import Projects from '@/components/ProjectSection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Portfolio',
  description: 'Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

const Home = () => {
  return (
    <div className="pt-6 md:pt-20 max-w-7xl mx-auto pb-10">
      <div className="pb-20 md:pb-36">
        <Reveal>
          <div className="relative p-8 flex flex-col items-center justify-center w-fit mx-auto">
            <span className="intro-text font-migra text-center -mb-4 md:-mb-8 2xl:-mb-16">Hi! I&apos;m Kane.</span>
            <span className="intro-subtext font-migra text-center">Software engineer.</span>
            <span className="intro-subtext font-migra text-center -mt-3 md:-mt-6 2xl:-mt-9"> Developer. Designer.</span>

            <div className="absolute top-0 -left-2 md:-left-8 -rotate-45 text-4xl sm:text-5xl md:text-7xl">
              <SiTeespring />
            </div>
            <div className="absolute bottom-2 -right-1 rotate-90 text-2xl sm:text-4xl md:text-5xl">
              <LuBox />
            </div>

          </div>
        </Reveal>

        <Reveal>
          <div className="mt-4">
            <p className="intro-about font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg lg:text-xl text-neutral-500">
              My work is focused on building engaging & memorable experiences for the web while 
              advocating for <em>accessibility</em>, <em>affordability</em>, & <em>equity</em>.
            </p>
          </div>
        </Reveal>
      </div>

    <Projects />
    </div>
  )
}

export default Home
