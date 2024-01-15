import { PostMetadata } from "./utils/PostMetadata";
import Link from 'next/link'
import { Reveal } from "./utils/reveal";

const PostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="w-fit"
        href={`/blog/posts/${props.slug}`}>
        <p className="font-light tracking-wide md:text-lg ">{props.title}</p>
        <p className="font-light text-sm text-neutral-500">{props.description}</p>
        <span className="text-neutral-500 text-xs md:text-sm tracking-wide">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default PostPreview