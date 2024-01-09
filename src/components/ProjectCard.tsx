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
    background: string;
}

const ProjectCard = ({ url, title, category, image, background }: ProjectCardProps) => {
    return (
      <Link href={`/works/${url}`} as={`/works/${url}`} className="group">
        <div className={` shadow-md relative h-64 md:h-96 rounded-[2rem] overflow-hidden group-hover:-translate-y-1 group-hover:shadow-xl duration-300 ${background}`}>
          <div className="flex items-start justify-between p-8">
            <div className="flex flex-col space-y-2 text-[#333]">
              <span className="font-mont tracking-wide text-xs md:text-base uppercase font-light">{category} &nbsp;&mdash;</span>
              <span className="font-migra text-3xl md:text-4xl tracking-widest">{title}</span>
            </div>
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