'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { 
  BsSpotify,
  BsBoxArrowUpRight
} from 'react-icons/bs';

const songs = [
  {
    title: 'Absence',
    artist: 'glasslight',
    link: 'https://open.spotify.com/track/5V4TlcwtVBENzHgQx24aGV?si=29736d12645d4dbf'
  },
  {
    title: 'Upside Down - Lofi',
    artist: 'Mik, The Story So Far',
    link: 'https://open.spotify.com/track/5W2jpvaV8RpeP2PEkZ6mtu?si=1978918e9dfa4df3'
  },
  {
    title: 'Overcome',
    artist: 'Nothing But Thieves',
    link: 'https://open.spotify.com/track/18q5OmlDTbSm8w9J1i17dT?si=d03902ace3c9482a'
  },
  {
    title: 'BLOOD AND SUGAR',
    artist: 'BOYS LIKE GIRLS',
    link: 'https://open.spotify.com/track/7slQaLDyL3WnMUffGwrnYi?si=9e6c8d914e7840bf'
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
    title: 'You\'re Gonna Go Far',
    artist: 'Noah Kahan',
    link: 'https://open.spotify.com/track/4nHJcUtNSUVjXRnjdP29Bk?si=49ef22b8d51f4aa1'
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
      className="container py-4 px-4 rounded-full flex items-center justify-between">
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