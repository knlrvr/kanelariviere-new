import React from 'react'
import Link from 'next/link'

import { Reveal } from '@/components/utils/reveal';

import getPostMetadata from '@/components/utils/PostMetadata';

const Blog = () => {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <Link key={post.slug} className=""
      href={`/blog/posts/${post.slug}`}>
      <p className="font-light tracking-wide text-lg">{post.title}</p>
      <p className="font-light text-sm md:text-base lg:text-lg text-neutral-500">{post.description}</p>
      <span className="text-neutral-500 text-xs">{post.date}</span>
    </Link>
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