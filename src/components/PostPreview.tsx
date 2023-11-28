import { PostMetadata } from "./utils/PostMetadata";
import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
    <Link key={props.slug} className=""
      href={`/blog/posts/${props.slug}`}>
      <p className="font-light tracking-wide text-lg">{props.title}</p>
      <p className="font-light text-base md:text-base lg:text-lg text-neutral-500">{props.description}</p>
      <span className="text-neutral-500 text-xs tracking-wide">{props.date}</span>
    </Link>
    )
}

export default PostPreview