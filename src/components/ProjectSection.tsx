import React from 'react'

import ProjectCard from './ProjectCard'
import { Reveal } from './utils/reveal'

const Projects: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-12 pt-8">
            <div className="md:col-span-3 project-container__1 rounded-[2.5rem] group hover:-translate-y-2 transition duration-200">

                    <ProjectCard
                        url='ttrpcompanion'
                        title="TTRPCompanion"
                        category='gaming utility'
                        image={{
                            src: '/ttrpc.png',
                            alt: 'ttrpcompanion screenshot',
                            width: 1000,
                            height: 1000,
                            className: 'rounded-sm md:rounded-lg absolute top-1/2 md:top-1/3 left-1/4 md:left-1/3 group-hover:translate-y-4 transition duration-500',
                        }}
                        git="https://github.com/knlrvr/ttrpcompanion"
                        live="https://ttrpcompanion.vercel.app/"
                    />
                    
            </div>
            <div className="md:col-span-1 project-container__2 rounded-[2.5rem] group hover:-translate-y-2 transition duration-200">
                    
                    <ProjectCard
                        url='keepup'
                        title="KeepUp"
                        category='social media'
                        image={{
                            src: '/keepup.png',
                            alt: 'ttrpcompanion screenshot',
                            width: 1000,
                            height: 1000,
                            className: 'rounded-sm absolute top-1/2 md:top-3/4 left-1/4 md:left-1/3 group-hover:translate-y-4 transition duration-500',
                        }}
                        git="https://github.com/knlrvr/next-notes"
                        live="https://next-notes-74lh.vercel.app/"
                    />

            </div>
            <div className="md:col-span-2 project-container__3 rounded-[2.5rem] group hover:-translate-y-2 transition duration-200">
                    
                    <ProjectCard
                        url='theviewfrominside'
                        title="The View From Inside"
                        category='blog'
                        image={{
                            src: '/tvfi.png',
                            alt: 'tvfi screenshot',
                            width: 1000,
                            height: 1000,
                            className: 'rounded-sm absolute top-1/2 md:top-1/2 left-1/4 md:left-1/3 group-hover:translate-y-4 transition duration-500',
                        }}
                        git="https://github.com/knlrvr/the-view-from-inside"
                        live="https://the-view-from-inside.vercel.app/"
                    />

            </div>
            <div className="md:col-span-2 project-container__4 rounded-[2.5rem] group hover:-translate-y-2 transition duration-200">
                    
                    <ProjectCard
                        url='abstract'
                        title="Abstract"
                        category='ecommerce'
                        image={{
                            src: '/abstract.png',
                            alt: 'abstract screenshot',
                            width: 1000,
                            height: 1000,
                            className: 'rounded-sm md:rounded-md absolute top-1/2 md:top-1/3 left-1/4 md:left-1/2 group-hover:translate-y-4 transition duration-500',
                        }}
                        git="https://github.com/knlrvr/abstract"
                        live="https://abstract-eight.vercel.app/"
                    />

            </div>
            <div className="md:col-span-1 project-container__5 rounded-[2.5rem] group hover:-translate-y-2 transition duration-200">
                    
                    <ProjectCard
                        url='personalportfolio'
                        title="Personal Portfolio"
                        category='portfolio'
                        image={{
                            src: '/port.png',
                            alt: 'ttrpcompanion screenshot',
                            width: 1000,
                            height: 1000,
                            className: 'rounded-sm absolute top-1/2 md:top-3/4 left-1/4 md:left-1/3 group-hover:translate-y-4 transition duration-500',
                        }}
                        git="https://github.com/knlrvr/kanelariviere"
                    />

            </div>
        </div>
    )
}

export default Projects