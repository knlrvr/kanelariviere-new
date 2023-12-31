import React from 'react'
import Link from 'next/link'

import { Reveal } from '@/components/utils/reveal';

import getPostMetadata from '@/components/utils/PostMetadata';
import PostPreview from '@/components/PostPreview';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kane Lariviere | Blog',
  description: 'Blog | Kane Lariviere',
}

const Blog = () => {

  const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ));

  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <span className="intro-text font-migra -mb-4">Blog.</span>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex flex-col space-y-8 mt-8 w-fit">
          {postPreviews}
        </div>
      </Reveal>

    </div>
  )
}

export default Blog