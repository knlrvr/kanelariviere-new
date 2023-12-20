import { Reveal } from "@/components/utils/reveal"
import Link from 'next/link'
import { notFound } from "next/navigation";

import getPostMetadata from "@/components/utils/PostMetadata";

import { BsArrowLeft } from "react-icons/bs";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import fs from 'fs'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import type { Metadata } from "next";

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

interface CodeBlockProps {
    language: string;
    value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
    return <SyntaxHighlighter language={language} style={a11yDark}>{value}</SyntaxHighlighter>
}

export async function generateMetadata({ 
    params
}: any): Promise<Metadata | undefined> {
    let post = getPostMetadata().find((post) => post.slug === params.slug);
    
    if (!post) {
        return;
    }

    let {
        title,
        description,
        image,
    } = post;

    let ogImage = image
    ? `https://knlrvr.dev${image}`
    : `https://knlrvr.dev/og?title=${title}`

    return {
        title, 
        description,
        openGraph: {
            title, 
            description,
            type: 'article',
            url: `https://knlrvr.dev/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title, 
            description,
            images: [ogImage]
        },
    };
}

const PostPage = (props: PostPageProps) => {

    const slug = props.params.slug;
    const post = getPostContent(slug);

    const components = {
        code: ({ node, inline, className, children, ...props }: any) => (
            <CodeBlock language={props.language} value={children}/>
        )
    }
    
    if (!post) {
        notFound;
    }

    return (
        <section>
            <script
                type='application/ld+json'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        headline: post.data.title,
                        description: post.data.description,
                        author: {
                            '@type': 'Person',
                            name: 'Kane Lariviere',
                        }
                    })
                }}
            />
            <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <Reveal>
                        <span className="intro-text font-migra -mb-4">Blog.</span>
                    </Reveal>
                </div>

                <div className="my-8">
                    <Reveal>
                        <div className="flex flex-col">
                            <Link href="/blog" className="text-2xl w-fit mb-4">
                                <BsArrowLeft />
                            </Link>
                            <span className="font-migra text-4xl sm:text-5xl md:text-7xl">
                                {post.data.title}
                            </span>
                            <span className="font-light tracking-wider text-sm mt-2">
                                Published &mdash; {post.data.date}
                            </span>
                        </div>
                    </Reveal>
                </div>

                <article className="text prose prose-md prose-pre:bg-[#2b2b2b] prose-pre:my-2 prose-a:text-blue-500 prose-blockquote:text-code max-w-full prose-strong:text-code prose-headings:text-heading prose-headings:font-light prose-headings:tracking-wide prose-code:text-code 
                                    prose-h6:text-xs prose-h6:text-neutral-500 prose-p:font-light
                                    prose-h5:text-xs prose-h5:border prose-h5:border-neutral-500 prose-h5:p-4 prose-h5:rounded-lg prose-h5:bg-neutral-500 prose-h5:bg-opacity-25
                ">
                    <Reveal>
                        <ReactMarkdown className=""
                            components={components}
                        >{post.content}</ReactMarkdown>
                    </Reveal>
                </article>
            </div>
        </section>
    )
}

export default PostPage