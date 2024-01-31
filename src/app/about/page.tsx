import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal } from '@/components/utils/reveal'

import type { Metadata } from 'next'
import { BsBoxArrowUpRight } from 'react-icons/bs'

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
                As a developer, I&apos;ve had to wear many hats. I deliver high-quality, production-ready code 
                for a diverse array of projects for clients, tailored to their needs and the needs of the commununities they serve. 
                My work mostly consists of code, but I&apos;ve had the pleasure of working in various areas of digital design, including
                but not limited to front-end development, UI/UX design, & graphic design.
                <br /><br />
                It&apos;s my goal in my work to commit myself to accessibility, equity, education, & sustainability and I do my best to 
                contribute to those ideals whenever and however I can. 
                <br /><br />
                Outside of work, I try to hone my creativity through multiple outlets. 
                I write & play music, I&apos;m an avid D&D nerd and gamer, I love to 
                explore the world with my fiancée & play with my dog, Sundance, and my cat, Tadashi. 
              </p>

              <Link href="/LariviereK24.pdf" target="_blank"
                className="text-neutral-500 flex items-center space-x-2 font-light text-sm group w-fit">
                <span className="group-hover:text-blue-400 duration-300">View My Resume</span>
                <BsBoxArrowUpRight className="text-sm group-hover:text-blue-400 duration-300" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
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
            Reach me at <Link href="mailto:hello@knlrvr.com" className="hover:text-blue-400 duration-300">hello@knlrvr.com</Link>!
          </p>
        </Reveal>
      </div>

    </div>
  )
}

export default About