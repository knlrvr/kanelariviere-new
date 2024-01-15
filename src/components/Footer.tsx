import React from 'react';
import Link from 'next/link'
import ToggleTheme from './toggleTheme';
import { Reveal } from './utils/reveal';

import CircadianTheme from './circTheme';

import OnRepeat from './OnRepeat';

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-7xl mx-auto">

        <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">
          <Reveal>
            <div className="flex flex-col items-start">
              <span className="font-migra text-2xl">Find me</span>
              <ul className="flex flex-col space-y-2 font-light text-sm">
                <li>
                  <Link href="https://www.github.com/knlrvr" target="_blank">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/kane-lariviere" target="_blank">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com/knlrvr" target="_blank">
                    X <span className="text-neutral-500">(Twitter)</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.threads.net/@kanelarivieresucks" target="_blank">
                    Threads
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitch.tv/knlrvr" target="_blank">
                    Twitch
                  </Link>
                </li>
                <li className="text-xs">
                  <Link href="https://kanelariviere-old.vercel.app/" target="_blank">
                    Previous Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col">

              <div className="flex flex-col">
                <span className="font-migra text-2xl">Contact</span>
                <ul className="flex flex-col font-light text-sm">
                  <li>
                    <Link href="mailto:hello@knlrvr.com" target="_blank">
                      Email
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mt-[5.55rem] md:mt-9">
                <span className="font-migra text-2xl">Availability</span>
                <ul className="flex items-center font-light space-x-2 text-xs">
                  <li>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </li>
                  <li>Currently Available</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>


        <div className="w-full flex flex-col justify-between">
          <Reveal>
            <OnRepeat />
          </Reveal>
        </div>
        
      </div>

      <Reveal>
        <CircadianTheme />
      </Reveal>
      
      <Reveal>
        <div className="flex justify-center mt-16 mb-4 max-w-7xl mx-auto">
          <span className="font-light text-xs">
            &copy; 2023 Kane Lariviere.
          </span>
        </div>
      </Reveal>
    </>
  );
};

export default Footer;