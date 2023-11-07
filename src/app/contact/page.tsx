import React from 'react'
import Link from 'next/link'

import { Reveal } from '@/components/utils/reveal'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Contact',
  description: 'Contact | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

const Contact = () => {
  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <span className="intro-text font-migra -mb-4">Get In Touch.</span>
        </Reveal>
      </div>

      <Reveal>
        <div className="py-16">
          <p className="intro-about font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg lg:text-xl text-neutral-500 mb-8"> 
            The best way to reach me is by email at <br />
            <Link href="mailto:hello@knlrvr.com" target="_blank"
              className="email"> hello@knlrvr.com</Link>. 
            <br />< br />
            Alternatively, you can find me on your platform of choice and contact me there! The platforms I&apos;m active on
            are listed in the footer of this page. <br /><br /> Whatever you might need, don&apos;t hesitate to reach out! Whether you want to learn more, 
            collaborate, or just talk, let me know!
          </p>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact