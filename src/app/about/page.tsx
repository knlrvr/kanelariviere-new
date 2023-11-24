import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal } from '@/components/utils/reveal'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | About',
  description: 'About | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

const About = () => {
  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <span className="intro-text font-migra -mb-4">I&apos;m Kane.</span>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center items-center">
            <Reveal>
              <div className="rounded-full mx-auto">
                <Image 
                  src="/kane.jpg"
                  alt="kane"
                  width="1000"
                  height="1000"
                  className="rounded-full h-80 w-80"
                />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="flex flex-col justify-center space-y-4">
              <p className="font-migra text-3xl md:text-4xl xl:text-5xl">
                Software engineer. Full stack developer. Designer.
              </p>
              <p className="font-light font-mont text-base md:text-lg lg:text-xl text-neutral-500">
                As a freelance developer, I&apos;ve had to wear many hats. I deliver high-quality, production-ready code 
                for a diverse array of projects for clients, tailored to their needs and the needs of the commununities they serve. 
                My work mostly consists of code, but I&apos;ve had the pleasure of working in various areas of digital design, including
                but not limited to front-end development, UI/UX design, & graphic design.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        {/* <Reveal>
          <p className="mb-20 font-light text-lg md:text-xl text-neutral-500 container mx-auto p-12 rounded-[2.5rem]">
            I have a deep passion for all things tech, and an understanding that design drives 
            <strong> everything</strong>. Because of this, I do my best to create welcoming and 
            inclusive experiences for everyone because that&apos;s the <strong>right thing to do</strong>. 
            The web is an exciting place, and everyone has a place in it.
            <br /><br />
            When I&apos;m not hunched over my keyboard, I&apos;m probably spending time with my family, playing D&D, 
            listening to or writing music, or exploring the world!
          </p>
        </Reveal> */}

        <Reveal>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-8 gap-4 md:mt-16 mb-24 md:mb-32">
          
          {/* 1 */} 
          <div className="md:col-span-4 row-start-1 container p-8 rounded-full flex justify-between items-center shadow-md">
            <div className="flex flex-col">
              <span className="font-migra text-xl md:text-2xl">Gaston College</span>
              <span className="font-light text-xs md:text-sm">AAS, Computer Science</span>
            </div>
            <div className="">
              <span className="font-light text-right">&apos;20 &mdash; &apos;22</span>
            </div>
          </div>

          {/* 2 */}
          <div className="md:col-span-7 md:col-start-2 row-start-2 container p-8 rounded-full flex justify-between items-center shadow-md">
            <div className="flex flex-col">
              <span className="font-migra text-xl md:text-2xl">KNLRVR</span>
              <span className="font-light text-xs md:text-sm">Freelance Developer</span>
            </div>
            <div className="">
              <span className="font-light text-right">&apos;21 &mdash; Present</span>
            </div>
          </div>

          {/* 3 */}
          <div className="md:col-span-4 md:col-start-5 row-start-3 container p-8 rounded-full flex justify-between items-center shadow-md">
            <div className="flex flex-col">
              <span className="block lg:hidden font-migra text-xl md:text-2xl">WGU</span>
              <span className="hidden lg:block font-migra text-xl md:text-2xl">Western Governors University</span>
              <span className="font-light text-xs md:text-sm">BSc, Computer Science</span>
            </div>
            <div className="">
              <span className="font-light text-right">&apos;23 &mdash; Present</span>
            </div>
          </div>

        </div>
      </Reveal> 

        <Reveal>
          <span className="font-migra text-4xl md:text-5xl xl:text-6xl">
            Want to learn more? Want to collaborate? Just want to talk? Let me know!
          </span>
        </Reveal>
        <Reveal>
          <p className="mt-4 font-light font-mont text-base md:text-lg lg:text-xl text-neutral-500 md:w-1/2">
            Reach me at <Link href="mailto:hello@knlrvr.com">hello@knlrvr.com</Link>!
          </p>
        </Reveal>
      </div>

    </div>
  )
}

export default About