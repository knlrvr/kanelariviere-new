import { Reveal } from "@/components/utils/reveal"

import getPostMetadata from "@/components/utils/PostMetadata";

import fs from 'fs'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface PostPageProps {
    params: {
        slug: string;
    }
}

const PostPage = (props: PostPageProps) => {

    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <Reveal>
                    <span className="intro-text font-migra -mb-4">Blog.</span>
                </Reveal>
            </div>

            <div className="my-8">
                <Reveal>
                    <span className="font-light tracking-wide text-3xl md:text-4xl xl:text-5xl">
                        {post.data.title}
                    </span>
                </Reveal>
            </div>

            <article className="text prose prose-md md:prose-lg prose-neutral prose-a:text-blue-500 prose-blockquote:text-code max-w-full prose-strong:text-code prose-headings:text-heading prose-code:text-code">
                <Reveal>
                    <ReactMarkdown className=""
                    >
                        {post.content}
                    </ReactMarkdown>
                </Reveal>
            </article>
        </div>
    )
}

export default PostPage