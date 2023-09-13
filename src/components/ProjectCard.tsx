import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  BsGithub,
  BsBoxArrowUpRight
} from 'react-icons/bs'

interface ProjectCardProps {
    url: string;
    title: string;
    category: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className: string;
    };
    git?: string;
    live?: string;
}

const ProjectCard = ({ url, title, category, image, git, live}: ProjectCardProps) => {
    return (
      <Link href={`/work/${url}`} as={`/work/${url}`}>
        <div className='relative h-64 md:h-96 rounded-[2.5rem] overflow-hidden'>
          <div className="flex items-start justify-between p-8">
            <div className="flex flex-col space-y-2">
              <span className="font-mont tracking-wide text-xs md:text-base uppercase font-light">{category} &nbsp;&mdash;</span>
              <span className="font-migra text-3xl md:text-4xl tracking-widest">{title}</span>
            </div>
            {/* <div className="flex items-center space-x-4 text-lg">
              {git && (
                <Link href={git} target="_blank">
                  <BsGithub />
                </Link>
              )}
              {live && (
                <Link href={live} target="_blank">
                  <BsBoxArrowUpRight />
                </Link>
              )}
            </div> */}
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={image.className}
          />
        </div>
      </Link>
    )
}

export default ProjectCard;