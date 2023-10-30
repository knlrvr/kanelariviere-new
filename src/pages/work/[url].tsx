import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next';
import '../../app/globals.css';

import { Reveal } from '@/components/utils/reveal';

import {  
  BsArrowUpRight,
  BsArrowRight
} from 'react-icons/bs'

// import { 
//   RiDoubleQuotesL, 
//   RiDoubleQuotesR 
// } from 'react-icons/ri'

import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

interface Project {
  url: string;
  brand?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
  quote: string,
  git?: string;
  live?: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];        // array of tags
  year: string;
  next: string;
  nextTitle: string;
}

interface ProjectDetailsPageProps {
  projectData: Project;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ projectData }) => {
  // const paragraphs = projectData.description.split('\n');

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <Header />

      <div className="pt-12 md:pt-20 p-4">

        <Reveal>
          <div className="flex flex-col">
            <p className="font-migra text-4xl sm:text-5xl md:text-7xl">{projectData.title}</p>
            <p className="font-thin text-2xl sm:text-3xl md:text-4xl">&mdash; {projectData.category}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="py-8 text-xs flex items-center space-x-2 text-neutral-500">
            <Link href="/" className="font-semibold">
              Work
            </Link>
            <p>&gt;</p>
            <span className="font-light">{projectData.title}</span>
          </div>
        </Reveal>

        {projectData.brand && (
          <Reveal>
            <div className="flex justify-center pb-16">
              <Image 
                src={projectData.brand.src}
                alt={projectData.brand.alt}
                width={projectData.brand.width}
                height={projectData.brand.height}
                className={projectData.brand.className}
              />
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:w-4/5 font-light">
              <span className="text-neutral-500 font-light">
                {projectData.title}
              </span>&nbsp;{projectData.description}
            </div>
            <div className="text-xs grid grid-cols-1 md:grid-cols-3 gap-0 gap-y-8 md:gap-y-0">
              <div className="w-full flex flex-col">
                <span className="font-migra text-base">Year</span>
                <span className="border-t border-neutral-500 w-full mt-2 pt-4 font-light">{projectData.year}</span>
              </div>
              <div className="w-full flex flex-col">
                <span className="font-migra text-base">Tech</span>
                  <span className="border-t border-neutral-500 w-full mt-2 pt-4 flex flex-col space-y-2">
                    {projectData.tags && projectData.tags.map((tag, index) => (
                      <span key={index} className="text-xs flex font-light">
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-migra text-base">Open</span>
                  <span className="border-t border-neutral-500 w-full mt-2 pt-4 flex flex-col space-y-2">
                  {projectData.git && ( 
                    <Link href={projectData.git} target="_blank"
                      className="flex items-center text-xs group">
                      <span className="font-light group-hover:text-neutral-500 transition duration-200">Open Code</span>
                      <BsArrowUpRight
                        className="ml-6 text-sm group-hover:text-neutral-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"/>
                    </Link>
                  )}
                  {projectData.live && (
                    <Link href={projectData.live} target="_blank"
                      className="flex items-center text-xs group">
                      <span className="font-light group-hover:text-neutral-500 transition duration-200">Open Live</span>
                      <BsArrowUpRight
                        className="ml-[1.95rem] text-sm group-hover:text-neutral-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"/>
                    </Link>
                  )}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="pt-24 flex md:justify-end justify-center">
            <Link href={projectData.next}
              className="text-2xl font-migra flex items-center space-x-4 w-fit">
              <span>{projectData.nextTitle}</span>
              <BsArrowRight className="text-xl" />
            </Link>
          </div>
        </Reveal>
      </div>


      <div className="p-4">
        <Footer />
      </div>
    </div>
  );
};



export const getStaticPaths: GetStaticPaths = async () => {
  // Replace this with your actual logic to fetch the dynamic paths
  const paths = [
    { params: { url: 'theviewfrominside' } },
    { params: { url: 'keepup' } },
    { params: { url: 'abstract' } },
    { params: { url: 'personalportfolio' } },
    { params: { url: 'ttrpcompanion' } },
    // Add more dynamic paths as needed
  ];

  return {
    paths,
    fallback: false, // Set fallback to `false` if you don't want to render fallback pages
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = params?.url as string;

  // Replace this with your actual data fetching logic to retrieve the project data
  // Fetch the project data based on the `url` parameter
  const projectData: Project = await fetchProjectData(url);

  return {
    props: {
      projectData,
    },
  };
};

const fetchProjectData = (url: string): Project => {
  // Replace this with your actual static data for each project
  // Create an object that maps the project URLs to their respective data
  const projectDataMap: { [key: string]: Project } = {
    
    ttrpcompanion: {
      url: 'ttrpcompanion',
      brand: {
        src: '/ttrpc-brand-2.png',
        alt: 'ttrpc logo',
        width: 1000,
        height: 1000,
        className: 'w-full h-full rounded-md'
      },
      quote: 'Empowering Adventurers.',
      git: 'https://github.com/knlrvr/ttrpcompanion',
      live: 'https://ttrpcompanion.vercel.app/',
      title: 'TTRPCompanion',
      category: 'Gaming Utility',
      description: 'is a gaming utility app that allows users to track their character\'s stats in D&D Campaigns. Typically, other tools carry on the basic stats of characters, while TTRPCompanion allows users to track stats that blur the lines between player & character. These stats include total sessions, total time played, total damage dealt, & more! TTRPCompanion allows you to immerse yourself in your own gameplay, without taking you away from your character.',
      tags: ['TypeScipt', 'React', 'Next', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright'],
      year: '2023',
      next: '/work/keepup',
      nextTitle: 'KeepUp'
    },

    keepup: {
      url: 'keepup',
      brand: {
        src: '/keepup-brand.png',
        alt: 'KeepUp',
        width: 1000,
        height: 1000,
        className: 'w-full h-full rounded-md'
      },
      quote: 'Seamless Connection. Expressive Impact.',
      git: 'https://github.com/knlrvr/next-notes',
      live: 'https://next-notes-74lh.vercel.app/',
      title: 'KeepUp',
      category: 'Social Media',
      description: 'is a full stack social media app. With seamless GitHub login integration through Clerk, users can easily access the platform. KeepUp allows users to post \'notes\' ranging from 1 to 240 characters. This flexibility enables users to express themselves concisely while still capturing the essence of their message, fostering a dynamic and engaging environment within the platform.',
      tags: ['TypeScript', 'React', 'Next', 'Tailwind', 'tRPC', 'Prisma', 'PlanetScale', 'Redis', 'NextAuth'],
      year: '2023',
      next: '/work/theviewfrominside',
      nextTitle: 'The View From Inside'
    },

    theviewfrominside: {
      url: 'theviewfrominside',
      brand: {
        src: '/tvfi-brand.png',
        alt: 'The View From Inside',
        width: 1000,
        height: 1000,
        className: 'w-full h-full rounded-md'
      },
      quote: 'Boldly written. Relatably lived.',
      git: 'https://github.com/knlrvr/the-view-from-inside',
      live: 'https://the-view-from-inside.vercel.app/',
      title: 'The View From Inside',
      category: 'Blog',
      description: 'is an exceptionally performant blog powered by Sanity\'s dynamic capabilities. It seamlessly handles content creation with native editing, while its dynamic routing supports individual post pages for effortless article exploration. With optimized loading times and responsiveness through static generation, The View From Inside delivers compelling content in a user-friendly and efficient manner.',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Sanity'],
      year: '2023',
      next: '/work/abstract',
      nextTitle: 'Abstract'
    },

    abstract: {
      url: 'abstract',
      brand: {
        src: '/abstract-brand.png',
        alt: 'Abstract Store',
        width: 1000,
        height: 1000,
        className: 'w-full h-full rounded-md'
      },
      quote: 'Abstract. The concept of shopping.',
      git: 'https://github.com/knlrvr/abstract',
      live: 'https://abstract-eight.vercel.app/',
      title: 'Abstract',
      category: 'Ecommerce',
      description: 'is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
      tags: ['JavaScript', 'React', 'Next', 'Tailwind', 'MongoDB'],
      year: '2023',
      next: '/work/personalportfolio',
      nextTitle: 'Personal Portfolio'
    },

    personalportfolio: {
      url: 'personalportfolio',
      brand: {
        src: '/logo-new.png',
        alt: 'Personal Portfolio',
        width: 1000,
        height: 1000,
        className: 'w-full h-full rounded-md'
      },
      quote: 'Endless Inspiration.',
      git: 'https://github.com/knlrvr/kanelariviere',
      live: '',
      title: 'My Personal Portfolio',
      category: 'Misc',
      description: 'is where you are now! Take a look around and let me know what you think. You can navigate to the Guestbook page and leave me a message!',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex'],
      year: '2023',
      next: '/work/ttrpcompanion',
      nextTitle: 'TTRPCompanion'
    },
  };

  // Retrieve the project data based on the provided URL
  const projectData = projectDataMap[url];

  // Return the project data
  return projectData;
};


export default ProjectDetailsPage;