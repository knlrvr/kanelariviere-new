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
      <Link href={`/work/${url}`} as={`/work/${url}`}
      className="group">
      <div className="flex flex-col mx-auto group rounded-xl project-container__5">
        <div className="w-full h-fit flex justify-center group p-8 md:p-16">
          <Image 
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={image.className}
          />
        </div>
        <div className="px-8 md:px-16 p-8 flex justify-between items-center">
          <span className="text-lg font-migra tracking-wider">{title}</span>
          <span className="text-neutral-500 text-sm font-light">&mdash;&mdash; {category}</span>
        </div>
      </div>
    </Link>
    )
}

export default ProjectCard;