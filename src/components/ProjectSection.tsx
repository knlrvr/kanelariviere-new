import React from 'react'

import ProjectCard from './ProjectCard'
import { Reveal } from './utils/reveal'

const Projects: React.FC = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="pt-10 md:pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="md:col-span-2 relative">
            <Reveal>
              <ProjectCard 
                url='/ttrpcompanion'
                title='TTRPCompanion'
                category='Utility'
                image={{
                  src: '/1.png',
                  alt: 'ttrpcompanion logo',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-md group-hover:translate-y-4 duration-300',
                }}
                background='bg-[#fef08a]'
              />
            </Reveal>
          </div>
          <div className="relative">
            <Reveal>
              <ProjectCard 
                url='/theviewfrominside'
                title='The View From Inside'
                category='Blog'
                image={{
                  src: '/2.png',
                  alt: 'the view from inside',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-sm md:top-3/4 group-hover:translate-y-2 duration-300'
                }}
                background='bg-[#86efac]'
              />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ProjectCard 
                url='/keepup'
                title='KeepUp'
                category='Social Media'
                image={{
                  src: '/3.png',
                  alt: 'keepup brand',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-sm md:top-3/4 group-hover:translate-y-2 duration-300'
                }}
                background='bg-[#7dd3fc]'
              />
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal>
              <ProjectCard 
                url='/theskyisfake'
                title='The Sky Is Fake'
                category='Social Media'
                image={{
                  src: '/5.png',
                  alt: 'tsif logo',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-md group-hover:translate-y-4 duration-300'
                }}
                background='bg-[#c4b5fd]'
              />
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal>
              <ProjectCard 
                url='/abstract'
                title='Abstract'
                category='Ecommerce'
                image={{
                  src: '/4.png',
                  alt: 'abstract brand',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-md group-hover:translate-y-4 duration-300'
                }}
                background='bg-[#f87171]'
              />
            </Reveal>
          </div>
        
          <div className="">
            <Reveal>
              <ProjectCard 
                url='/personalportfolio'
                title='Personal Portfolio'
                category='Misc'
                image={{
                  src: '/logo-new.png',
                  alt: 'knlrvr logo',
                  width: 1000,
                  height: 1000,
                  className: 'absolute left-1/3 rounded-md group-hover:translate-y-4 duration-300'
                }}
                background='bg-[#fdba74]'
              />
            </Reveal>
          </div>
        </div>
    </div>
    )
}

export default Projects