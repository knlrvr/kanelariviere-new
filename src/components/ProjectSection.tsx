import React from 'react'

import ProjectCard from './ProjectCard'
import { Reveal } from './utils/reveal'

const Projects: React.FC = () => {
    return (
<div className="max-w-7xl mx-auto">
        <div className="pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <Reveal>
            <ProjectCard 
              url='/ttrpcompanion'
              title='TTRPCompanion'
              category='Utility'
              image={{
                src: '/ttrpc-brand-2.png',
                alt: 'ttrpcompanion logo',
                width: 1000,
                height: 1000,
                className: 'rounded-lg group-hover:-translate-y-2 transition duration-300'
              }}
            />
          </Reveal>
          <Reveal>
            <ProjectCard 
              url='/theviewfrominside'
              title='The View From Inside'
              category='Blog'
              image={{
                src: '/tvfi-brand.png',
                alt: 'the view from inside',
                width: 1000,
                height: 1000,
                className: 'rounded-lg group-hover:-translate-y-2 transition duration-300'
              }}
            />
          </Reveal>
          <Reveal>
            <ProjectCard 
              url='/keepup'
              title='KeepUp'
              category='Social Media'
              image={{
                src: '/keepup-brand.png',
                alt: 'keepup brand',
                width: 1000,
                height: 1000,
                className: 'rounded-lg group-hover:-translate-y-2 transition duration-300'
              }}
            />
          </Reveal>
          <Reveal>
            <ProjectCard 
              url='/abstract'
              title='Abstract'
              category='Ecommerce'
              image={{
                src: '/abstract-brand.png',
                alt: 'abstract brand',
                width: 1000,
                height: 1000,
                className: 'rounded-lg group-hover:-translate-y-2 duration-300'
              }}
            />
          </Reveal>
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
                className: 'rounded-lg group-hover:-translate-y-2 transition duration-300'
              }}
            />
          </Reveal>
        </div>
    </div>
    )
}

export default Projects