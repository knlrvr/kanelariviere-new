import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next';
import '../../app/globals.css';

import { Reveal } from '@/components/utils/reveal';

import {  
  BsChevronRight,
  BsArrowUpRight,
  BsArrowRight,
  BsArrowLeft,
  BsPlusLg
} from 'react-icons/bs'

import { 
  RiDoubleQuotesL, 
  RiDoubleQuotesR 
} from 'react-icons/ri'
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
  prev: string;
}

interface ProjectDetailsPageProps {
  projectData: Project;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ projectData }) => {
  // const paragraphs = projectData.description.split('\n');

  return (
    <div className="min-h-screen">
      <Header />

      <div className="">
        {projectData.title}
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
        src: '/ttrpc.png',
        alt: 'ttrpc logo',
        width: 1000,
        height: 1000,
        className: 'w-full h-full'
      },
      quote: 'Empowering Adventurers.',
      git: 'https://github.com/knlrvr/ttrpg-char-stats-v2',
      live: 'https://ttrpg-char-stats-v2.vercel.app/',
      title: 'TTRPCompanion',
      category: 'Utility',
      description: 'is a gaming utility app that allows users to track their character\'s stats in D&D Campaigns. Typically, other tools carry on the basic stats of characters, while TTRPCompanion allows users to track stats that blur the lines between player & character. These stats include total sessions, total time played, total damage dealt, & more! TTRPCompanion allows you to immerse yourself in your own gameplay, without taking you away from your character.',
      tags: ['TypeScipt', 'React', 'Next', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright'],
      year: '2023',
      next: '/work/keepup',
      prev: '/work/personalportfolio'
    },

    keepup: {
      url: 'keepup',
      brand: {
        src: '/keepup.png',
        alt: 'KeepUp',
        width: 1000,
        height: 1000,
        className: 'w-full h-full'
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
      prev: '/work/ttrpcompanion'
    },

    theviewfrominside: {
      url: 'theviewfrominside',
      brand: {
        src: '/tvfi.png',
        alt: 'The View From Inside',
        width: 1000,
        height: 1000,
        className: 'w-full h-full'
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
      prev: '/work/keepup'
    },

    abstract: {
      url: 'abstract',
      brand: {
        src: '/abstract.png',
        alt: 'Abstract Store',
        width: 1000,
        height: 1000,
        className: 'w-full h-full'
      },
      quote: 'Abstract. The concept of shopping.',
      git: 'https://github.com/knlrvr/abstract',
      live: 'https://abstract-eight.vercel.app/',
      title: 'Abstract Store',
      category: 'Ecommerce',
      description: 'is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
      tags: ['JavaScript', 'React', 'Next', 'Tailwind', 'MongoDB'],
      year: '2023',
      next: '/work/personalportfolio',
      prev: '/work/theviewfrominside'
    },

    personalportfolio: {
      url: 'personalportfolio',
      brand: {
        src: '/port.png',
        alt: 'Personal Portfolio',
        width: 1000,
        height: 1000,
        className: 'w-full h-full'
      },
      quote: 'Endless Inspiration.',
      git: 'https://github.com/knlrvr/kanelariviere',
      live: '',
      title: 'My Personal Portfolio',
      category: 'Misc',
      description: 'is where you are now! Take a look around and let me know what you think!',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
      year: '2023',
      next: '/work/ttrpcompanion',
      prev: '/work/abstract'
    },
  };

  // Retrieve the project data based on the provided URL
  const projectData = projectDataMap[url];

  // Return the project data
  return projectData;
};


export default ProjectDetailsPage;