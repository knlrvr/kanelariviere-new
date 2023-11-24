import React from 'react'

import { Reveal } from '@/components/utils/reveal';

const Blog = () => {
  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
            <Reveal>
            <span className="intro-text font-migra -mb-4">Blog.</span>
            </Reveal>
        </div>

        {/*  */}
        <Reveal>
          <div className="flex items-center justify-center mt-32 mb-24 text-sm space-x-2">
            <span>Coming soon</span>
            <span className="text-xl">☻</span>
          </div>
        </Reveal>

    </div>
  )
}

export default Blog