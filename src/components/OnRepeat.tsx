'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { 
  BsSpotify,
  BsBoxArrowUpRight
} from 'react-icons/bs';

const songs = [
  {
    title: 'Big Blind',
    artist: 'The Story So Far',
    link: 'https://open.spotify.com/track/5IiyHmNFsTx6PLI2diNH98?si=af2946545b9548c1'
  },
  {
    title: 'Overcome',
    artist: 'Nothing But Thieves',
    link: 'https://open.spotify.com/track/18q5OmlDTbSm8w9J1i17dT?si=d03902ace3c9482a'
  },
  {
    title: 'Seasonal',
    artist: 'glasslight',
    link: 'https://open.spotify.com/track/6mKFrX61Q81ie7KA5iXVcu?si=70cfa7daf7554ec5'
  },
  {
    title: 'Chemical',
    artist: 'Post Malone',
    link: 'https://open.spotify.com/track/5w40ZYhbBMAlHYNDaVJIUu?si=e83419a0e4b9470f'
  },
  {
    title: '234',
    artist: 'Driveways',
    link: 'https://open.spotify.com/track/2kXs5h6xwYvzbYmYlXRK3E?si=6c501bc756044ca2'
  },
  {
    title: 'Everywhere, Everything',
    artist: 'Noah Kahan',
    link: 'https://open.spotify.com/track/7rn89zBlXChGFTNHFZA8un?si=2a1dd7ebb38a4d66'
  }
];

const OnRepeat: React.FC = () => {
  const [randomSong, setRandomSong] = useState<{ title: string; artist: string; link: string } | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setRandomSong(songs[randomIndex]);
  }, []);

  const songLink = randomSong?.link || '';

  return (
    <Link href={songLink} target="_blank" rel="noopener noreferrer"
      className="container py-4 px-4 rounded-full flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <BsSpotify 
          className="text-green-500 text-4xl" />
        <div className="flex flex-col ml-4">
          <p className="font-semibold text-xs md:text-sm">On Repeat</p>
          <p className="font-light text-xs md:text-sm">
            {randomSong ? `${randomSong.title} by ${randomSong.artist}` : 'No song selected'}
          </p>
        </div>
      </div>
      <div className="mr-2">
        <BsBoxArrowUpRight />
      </div>
    </Link>
  );
};

export default OnRepeat;