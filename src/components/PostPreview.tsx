import { PostMetadata } from "./utils/PostMetadata";
import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
    <Link key={props.slug} className=""
      href={`/blog/posts/${props.slug}`}>
      <p className="font-light tracking-wide md:text-lg ">{props.title}</p>
      <p className="font-light text-sm text-neutral-500">{props.description}</p>
      <span className="text-neutral-500 text-xs md:text-sm tracking-wide">{props.date}</span>
    </Link>
    )
}

export default PostPreview