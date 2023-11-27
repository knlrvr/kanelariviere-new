import { Reveal } from "@/components/utils/reveal"
import Link from 'next/link'
import Head from "next/head";

import getPostMetadata from "@/components/utils/PostMetadata";

import { BsArrowLeft } from "react-icons/bs";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import fs from 'fs'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import type { Metadata, ResolvingMetadata } from "next";

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

type MetaProps = {
    params: { id: string }
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
    return <SyntaxHighlighter language={language} style={a11yDark}>{value}</SyntaxHighlighter>
}

export async function generateMetadata(
    { params }: MetaProps, 
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.id

    const post = await fetch(`https://.../${slug}`).then((res) => res.json())

    return {
        title: slug,
    }
}

const PostPage = (props: PostPageProps) => {

    const slug = props.params.slug;
    const post = getPostContent(slug);

    const components = {
        code: ({ node, inline, className, children, ...props }: any) => (
            <CodeBlock language={props.language} value={children}/>
        )
    }

    return (
        <>
        <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <Reveal>
                    <span className="intro-text font-migra -mb-4">Blog.</span>
                </Reveal>
            </div>

            <div className="my-8">
                <Reveal>
                    <div className="flex flex-col space-y-4">
                        <Link href="/blog" className="text-2xl w-fit">
                            <BsArrowLeft />
                        </Link>
                        <span className="font-light tracking-wide text-3xl md:text-4xl xl:text-5xl">
                            {post.data.title}
                        </span>
                        <span className="text-neutral-500 text-sm">
                            {post.data.date}
                        </span>
                    </div>
                </Reveal>
            </div>

            <article className="text prose prose-md prose-pre:bg-[#2b2b2b] prose-pre:my-2 prose-a:text-blue-500 prose-blockquote:text-code max-w-full prose-strong:text-code prose-headings:text-heading prose-code:text-code">
                <Reveal>
                    <ReactMarkdown className=""
                        components={components}
                    >{post.content}</ReactMarkdown>
                </Reveal>
            </article>
        </div>
        </>
    )
}

export default PostPage