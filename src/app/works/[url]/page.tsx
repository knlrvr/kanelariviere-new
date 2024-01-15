import Link from 'next/link'
import Image from 'next/image';
import { Reveal } from '@/components/utils/reveal';

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Kane Lariviere | Works',
  description: 'Works | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

import {  
    BsArrowUpRight,
    BsArrowRight,
    BsArrowLeft
} from 'react-icons/bs'

interface Work {
    url: string;
    bg: string;
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
    tags?: string[];
    year: string;
    next: string;
    nextTitle: string;
}

export default async function WorksPage(
{
    params, 
}: {
    params: { 
        url: string
    };
}) {

    const projects = fetchWorksData(params.url);
    const paragraphs = projects.description.split('\n');

    return (
        <div className="min-h-screen max-w-7xl mx-auto">
  
        <div className="pt-10 md:pt-20">
          <div className="flex flex-col items-center justify-center">
              <Reveal>
                <span className="intro-text font-migra -mb-4">Work.</span>
              </Reveal>
            </div>
  
          <Reveal>
            <div className="flex flex-col my-8">
              <Link href="/" className="text-2xl w-fit mb-4 group">
                <BsArrowLeft className="group-hover:text-neutral-500 duration-200" />
              </Link>
              <p className="font-migra text-4xl sm:text-5xl md:text-7xl">{projects.title}</p>
              <p className="font-thin text-2xl sm:text-3xl md:text-4xl">&mdash; {projects.category}</p>
            </div>
          </Reveal>
  
          {projects.brand && (
            <Reveal>
              <div className={`flex justify-center pl-2 rounded-r-3xl rounded-l-md mb-8  ${projects.bg}`}>
  
                <Image 
                  src={projects.brand.src}
                  alt={projects.brand.alt}
                  width={projects.brand.width}
                  height={projects.brand.height}
                  className={projects.brand.className}
                />
              </div>
            </Reveal>
          )}
  
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="font-light mb-8">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="md:mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="text-xs grid grid-cols-1 md:grid-cols-3 gap-0 gap-y-8 md:gap-y-0">
                <div className="w-full flex flex-col">
                  <span className="font-migra text-base tracking-widest">Year</span>
                  <span className="border-t border-neutral-500 w-full mt-2 pt-4 font-light">{projects.year}</span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-migra text-base tracking-widest">Tech</span>
                    <span className="border-t border-neutral-500 w-full mt-2 pt-4 flex flex-col space-y-2">
                      {projects.tags && projects.tags.map((tag, index) => (
                        <span key={index} className="text-xs flex font-light">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="font-migra text-base tracking-widest">View</span>
                    <span className="border-t border-neutral-500 w-full mt-2 pt-4 flex flex-col space-y-2">
                    {projects.git && ( 
                      <Link href={projects.git} target="_blank"
                        className="flex items-center text-xs group">
                        <span className="font-light group-hover:text-neutral-500 transition duration-200">Open Code</span>
                        <BsArrowUpRight
                          className="ml-6 text-sm group-hover:text-neutral-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"/>
                      </Link>
                    )}
                    {projects.live && (
                      <Link href={projects.live} target="_blank"
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
              <Link href={projects.next}
                className="group text-3xl font-migra flex items-center space-x-4 w-fit">
                <span>{projects.nextTitle}</span>
                <BsArrowRight className="text-xl group-hover:translate-x-2 duration-300 mb-1" />
              </Link>
            </div>
          </Reveal>
        </div>
  

    </div>
    )
}


export async function generateStaticParams() {
    return [
        { url: "ttrpcompanion" },
        { url: "theviewfrominside" },
        { url: "keepup" },
        { url: "theskyisfake" },
        { url: "abstract" },
        { url: "personalportfolio" }
    ] 
}

const fetchWorksData = (url: string): Project => {
    // Replace this with your actual static data for each project
    // Create an object that maps the project URLs to their respective data
    const projectDataMap: { [key: string]: Project } = {
      
      ttrpcompanion: {
        url: 'ttrpcompanion',
        bg: 'bg-[#fef08a]',
        brand: {
          src: '/brand/ttrpc-brand-new.png',
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
        description: 'TTRPCompanion is a gaming utility app that allows users to track their character\'s stats in D&D or other TTRPG Campaigns. Typically, other available tools weigh on the very basic stats of characters like total HP, ability scores, etc. while TTRPCompanion allows users to track stats that blur the lines between player & character. These stats include total sessions, total time played, total damage dealt, & more! TTRPCompanion allows you to immerse yourself in your own gameplay, without taking you away from your character.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright'],
        year: '2023 ~',
        next: '/works/theviewfrominside',
        nextTitle: 'The View From Inside'
      },
  
      theviewfrominside: {
        url: 'theviewfrominside',
        bg: 'bg-[#86efac]',
        brand: {
          src: '/brand/tvfi-brand-new.png',
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
        description: 'The View From Inside is an exceptionally performant blog powered by Sanity\'s dynamic capabilities. It seamlessly handles content creation with native editing, while its dynamic routing supports individual post pages for effortless article exploration. With optimized loading times and responsiveness through static generation, The View From Inside delivers compelling content in a user-friendly and efficient manner.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Sanity'],
        year: '2023',
        next: '/works/keepup',
        nextTitle: 'Keep Up'
      },
  
  
      keepup: {
        url: 'keepup',
        bg: 'bg-[#7dd3fc]',
        brand: {
          src: '/brand/keepup-brand-new.png',
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
        description: 'KeepUp is a full stack social media app. With seamless GitHub login integration through Clerk, users can easily access the platform. KeepUp allows users to post \'notes\' ranging from 1 to 240 characters. This flexibility enables users to express themselves concisely while still capturing the essence of their message, fostering a dynamic and engaging environment within the platform.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'tRPC', 'Prisma', 'PlanetScale', 'Upstash', 'NextAuth'],
        year: '2023',
        next: '/works/theskyisfake',
        nextTitle: 'The Sky Is Fake'
      },
  
      theskyisfake: {
        url: 'theskyisfake',
        bg: 'bg-[#c4b5fd]',
        brand: {
          src: '/brand/tsif-brand-new.png',
          alt: 'The Sky Is Fake',
          width: 1000,
          height: 1000,
          className: 'w-full h-full rounded-md'
        },
        quote: 'We Can Stop Pretending Now.',
        git: 'https://github.com/knlrvr/theskyisfake',
        live: 'https://www.theskyisfake.org',
        title: 'The Sky Is Fake',
        category: 'Social Media',
        description: 'The Sky Is Fake is a full stack social media/image sharing app. Users can sign in through a variety of platforms via Clerk and upload pictures to be featured in the gallery. The gallery showcases images of the sky that seem just a little too picturesque to be real. Users can also like the pictures that are featured in the gallery.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk'],
        year: '2023 ~',
        next: '/works/abstract',
        nextTitle: 'Abstract'
      },
  
      abstract: {
        url: 'abstract',
        bg: 'bg-[#f87171]',
        brand: {
          src: '/brand/abs-brand-new.png',
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
        description: 'Abstract is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
        tags: ['JavaScript', 'React', 'Next.js', 'Tailwind', 'MongoDB'],
        year: '2023',
        next: '/works/personalportfolio',
        nextTitle: 'Personal Portfolio'
      },
  
      personalportfolio: {
        url: 'personalportfolio',
        bg: 'bg-[#fdba74]',
        brand: {
          src: '/brand/logo-new.png',
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
        description: 'My personal portfolio is where you are now! Take a look around! If you\'d like, you can navigate to the Guestbook page and leave me a note!',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex'],
        year: '2023',
        next: '/works/ttrpcompanion',
        nextTitle: 'TTRPCompanion'
      },
    };
  
    // Retrieve the project data based on the provided URL
    const projectData = projectDataMap[url];
  
    // Return the project data
    return projectData;
  };