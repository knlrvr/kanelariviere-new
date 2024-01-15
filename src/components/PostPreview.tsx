import { PostMetadata } from "./utils/PostMetadata";
import Link from 'next/link'
import { Reveal } from "./utils/reveal";

const PostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="w-fit flex flex-col space-y-0.5"
        href={`/blog/posts/${props.slug}`}>
        <p className="font-light tracking-wide md:text-lg ">{props.title}</p>
        <p className="font-light text-sm text-neutral-500 pb-0.5">{props.description}</p>
        <span className="text-neutral-500 text-xs md:text-sm tracking-wider">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default PostPreview