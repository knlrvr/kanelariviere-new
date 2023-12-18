---
title: App Router vs. Pages Router
description: The differences between directories in Next.js
date: 12/12/23
---

When I felt reasonably comfortable with my knowledge in React, I, of course, moved on to learning a framework. I didn't even know where to start. I did what any dev would do &mdash; **I googled it**. I chose the framework that seemed to have the most support, and was aligned with what I wanted from React &mdash; **Next.js**. 

Next.js is an absolute powerhouse. It provides a ton of features out-of-the-box, and even though you might not need them all, it can be pretty intimidating if you don't understand them. 

## Routing 
There have been a lot of changes and additions with the introduction of Next.js 13, the most recent update from the framework. The most significant change is the new app directory, which handles routing for Next applications. Basically, the new app directory has a lot more flexibility and ease-of-use than the previous pages directory. 

So what's the difference? What *exactly* is the benefit of the new app directory? Or should you just keep using the pages directory? Could you use *both*? 

###### If you take a look at the repo for this portfolio, you'll see that I am utilizing both directories. More about that below!

## Pages
To outline some of the differences between the directories, we'll use this portfolio as an example. Using the **pages** directory, the structure looked a little like this &mdash;

```
└── pages     
    ├── index.tsx     
    ├── about.tsx     
    ├── contact.tsx     
    ├── tsif.tsx     
    └── guestbook.tsx   
```

Next.js will treat files in the '**pages**' directory as routes, provided that the files are React Components exported from a **.js**, **.ts**, **.jsx** or **.tsx** file.

For example, if the code below was in our '**about.tsx**' file, it will be accessible at '**/about**'.

```jsx
export default function About() {
  return <div>About Page</div>
}
```

Pages was *the* way to create routes in Next.js before the introduction of the App router. The Pages directory offers a simple and straight forward approach to handle routing in a Next.js application, but has a defining limitation &mdash;

**It's Simple**. The simplicity of the pages directory is both it's greatest and worst feature. It's ideal for smaller applications with simple, static pages but becomes difficult to use in larger applications with advanced routing & layouts, dynamic pages, etc. Essentially, the pages directory is simple and is best used for simple applications. You can certainly find workarounds to complete more complex tasks, but at that point, you may benefit from using the app directory. 

## App
Using the **app** directory, the structure of this portfolio looks more like this &mdash;

```
src/     
└── app     
    ├── page.tsx     
    ├── globals.css     
    ├── layout.tsx     
    ├── about     
    │   └── page.tsx     
    ├── blog
    │   ├── posts
    │   │   └── [slug]
    │   │       └── page.tsx    
    │   └── page.tsx     
    ├── tsif     
    │   └── page.tsx     
    └── guestbook     
        └── page.tsx    
```

###### The use of a folder in square brackets indicates a dynamic route. The name inside of the square brackets corresponds to the parameter we want to capture for the URL. 

The app router works in a new directory named '**app**'. In app, **folders** define the routes of your application, from a root folder down to a leaf folder. So the previous route we defined in '**pages**' would instead be '**app/contact/page.tsx**'. 

The app router includes new support for shared layouts, server components, streaming, and data fetching. It's a great answer to the issues introduced by the Pages directory, but does also come with its own limitation &mdash; 

**It's Complex**. The biggest issue introduced by the app router is it's complexity. There's a bit of a learning curve in adopting new techniques and finding new ways to do things that were done another way in the pages directory. However, in my opinion, the benefit provided by the app router far outweighs the complexity and learning curve.

## So Which Directory Should You Use?
Well, it depends! I would certainly recommend using the app router for any new projects you may create, and trying to adopt it for your existing work. However, the two routers offer two different behaviors for your applications, each with their pros and cons, so it's really a matter of what you feel is best for your use case!

From my experience, and what I've been able to gather from others, it might be best for now to stick with the pages directory for smaller projects, and use the app router for larger projects. 

*Or you can use **both***. 

## Using Both Directories
The app router works alongside the pages directory to allow for incremental adoption of the new router, so you can absolutely use both if you needed certain behaviors from each one. 

For example, I still use the **pages** directory in my portfolio to showcase my projects. This is all handled in a file named '**[url].tsx**'  located in the pages directory. Within that file, I use two functions that aren't supported in the app directory &mdash;  *getStaticProps* & *getStaticPaths*. 

*getStaticProps* tells Next.js to pre-render the page at build time using the props returned by *getStaticProps*. Here it is in action &mdash;

```jsx
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = params?.url as string;
  const projectData: Project = await fetchProjectData(url);

  return {
    props: {
      projectData,
    },
  };
};
```

*getStaticPaths* tells Next.js to statically pre-render all the paths specified by *getStaticPaths*. A page with dynamic routes and uses *getStaticProps* needs to define a list of paths to be statically generated. Here's that function in use as well &mdash; 

```jsx
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { url: 'theviewfrominside' } },
    { params: { url: 'keepup' } },
    { params: { url: 'abstract' } },
    { params: { url: 'theskyisfake'} },
    { params: { url: 'personalportfol
    { params: { url: 'ttrpcompanion' } },
  ];

  return {
    paths,
    fallback: false,
  };
};
```

In the app directory, *getStaticPaths* is replaced with *generateStaticParams*, simplifying route parameters, so the function might look something like this &mdash;

```jsx
export async function generateStaticParams() {
    return [
        { url: 'theviewfrominside' },
        { url: 'keepup' },
        // other paths
    ]
}
```

###### Tip &mdash; When using both directories, you also have to be mindful of the different behaviors in layouts, state management, metadata, routing hooks, data fetching, etc. 

Other than the dynamic routes for work, everything in my portfolio was migrated to the new app router with the support of [these Next.js docs](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration). It was a relatively easy process, and I will be making the complete transition at some point, but I wanted to see the different behaviors in practice. 

For example, if you change the theme and then navigate to any of the '**work**' pages, the theme will revert to it's default setting, which is dependent on the time of day. Another example is how metadata is added. In the pages directory, we simply use the Head component provided by Next.js &mdash;

```jsx
<Head>
  <meta property='og:title' content={`Kane Lariviere | ${projectData.title}`} key='title' />
  <meta property='og:image' content='https://knlrvr.dev/og-bg-2.png' />
</Head>
```

In the app directory, we have a few options. To define static metadata, we export a '**Metadata**'' object &mdash;

```jsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Portfolio',
  description: 'Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}
```

**or** to fetch metadata with dynamic values, we use the *generateMetadata* function &mdash;

```jsx
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
```

I think these differences do a good job of showcasing the trade offs between directories, highlighting the fact that the pages directory is better for simpler applications, and the app directory is better for more complex applications. 

I certainly wouldn't *recommend* using both routers, but it's certainly possible, and may just fit your needs. 

## More about Next.js
**Always read the docs!**   
For more information about Next.js version 13, visit [nextjs.org](https://nextjs.org/blog/next-13).    
For more information about migrating from Pages to App, visit [the Incremental Adoption Guide from Next.js](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration).

## This Portfolio
As always, all of my work is open source. Visit [the repo for this portfolio](https://github.com/knlrvr/kanelariviere-new) to see both routers in action. 

## Conclusion 
Choosing the right tools can make all the difference when creating efficient and scalable applications, and nearly every approach comes with its own set of considerations. It's important to address these considerations and figure out what will work best for you. 


Let me know what you think! & **happy coding**! 