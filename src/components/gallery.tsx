'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Reveal } from './utils/reveal';

const pictures = [
  {
    url: '/gallery/1.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/2.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/3.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/4.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/5.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/6.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/8.jpeg',
    location: 'United States',
  },
  {
    url: '/gallery/9.jpeg',
    location: 'Florida',
  },
  {
    url: '/gallery/15.jpeg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/17.jpeg',
    location: 'United States',
  },
  {
    url: '/gallery/19.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/22.jpg',
    location: 'South Carolina',
  },
  {
    url: '/gallery/23.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/25.jpg',
    location: 'North Carolina',
  },
  {
    url: '/gallery/26.jpeg',
    location: 'Minnesota',
  },
];

type Picture = typeof pictures[number];

const Gallery: React.FC = () => {
  const [randomPictures, setRandomPictures] = useState<Picture[]>([]);

  useEffect(() => {
    const selectedPictures: Picture[] = [];

    while (selectedPictures.length < 4) {
      const randomIndex = Math.floor(Math.random() * pictures.length);
      const randomPicture = pictures[randomIndex];

      // Ensure the selected picture is not already in the list
      if (!selectedPictures.some((pic) => pic.url === randomPicture.url)) {
        selectedPictures.push(randomPicture);
      }
    }

    setRandomPictures(selectedPictures);
  }, []);

  return (
    <>
    <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12">
        {randomPictures.map((picture, index) => (
            <div key={index} className="relative group flex justify-center md:first:col-span-3 md:last:col-span-3 overflow-hidden row-span-4 rounded-2xl shadow-md">
              <Image 
                src={picture.url} 
                alt={`Random Picture ${index + 1} - ${picture.location}`} 
                width="1000"
                height="1000"
                className="h-96 w-full object-cover rounded-2xl" 
              />
              <div className="absolute transform duration-500 -bottom-10 left-2 group-hover:bottom-2">
                <div className="container p-2 rounded-lg text-sm text-neutral-500">
                  <p>{picture.location}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </Reveal>
    </>
  );
};

export default Gallery;

