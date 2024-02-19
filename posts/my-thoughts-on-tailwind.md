---
title: My Thoughts On Tailwind
description: What I've learned after using Tailwind as my go-to tool for styling
date: February 19, 2024
---

[Tailwind](https://tailwindcss.com/) is a utility-first CSS framework. It's *not* a shortcut to avoid learning CSS and it's *not always* an easy transition from CSS. But Tailwind is quicker to write, easier to maintain, and it can make design feel like less of a chore. 

The biggest appeal of Tailwind is the time it saves you. You don't have to worry about class names, compatibility, growing CSS files, or breaking something while restyling. It's peace of mind in development. It's less about **styling an application** and more about **creating a design system**.

I wrote about the downsides of Tailwind (*there aren't any*) [in another blog post about different styling methods](https://www.knlrvr.dev/blog/posts/styling-an-application), but at the end of it all, I made it clear that **I'm a Tailwind fanboy through and through**. It's made my life a lot easier in quickly translating my ideas into something real. I've learned a lot about Tailwind as I continue to utilize it, and I wanted to share some high-level insight.


Let's jump in!

## Some Basics 
The following examples of some basics in Tailwind are meant to highlight that working with Tailwind is just... easy. 

### Pseudo-classes
Using pseduo-classes in Tailwind is as easy as you think it would be. 

```jsx
<button className="bg-green-500 hover:bg-green-600 focus:border-green-950 active:bg-green-800">
	Click Here
</button>
```

In Tailwind, you can utilize any pseudo-class as you would in vanilla CSS. 

### Pseudo-elements
Using something like '**::after**', we can pretty quickly make a loading spinner. 

```jsx
  <div className="relative h-10 w-10 animate-spin rounded-full border-2 border-blue-400 after:absolute after:h-2 after:w-2 after:bg-white" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span>
  </div>
```

In Tailwind, you can utilize any pseudo-element as you would in vanilla CSS. 

###### More about animations below!

### Group 
Everyone loves buttons, right? Let's make a button. 

```jsx
<button className="rounded-md bg-green-500">
	Click Here
</button
```

But what if we wanted something else in that button? Maybe an arrow icon that moves in some way when you hover over the button? We can accomplish this with **group**! 

```jsx
<button className="group rounded-md bg-green-500">
	<span>Click Here</span>
	<span className="group-hover:translate-x-1 transition duration-200">&rarr;</span>
</button>
```

When we use group, we style an element based on the state of the *parent* element. In this case, when the button is hovered, the arrow will move a little to the right. 

### Peer
Using **peer**, we could do something like displaying an error message if input isn't accepted. 

```jsx
<form>
    <label className="block">
        <span className="block text-sm font-light text-neutral-500">Email</span>
        <input type="email" className="peer" />
        <p className="mt-2 invisible peer-invalid:visible text-red-500"> 
            Please provide a valid email address. 
        </p>
    </label>
</form>
```

When we use peer, we style an element based on the state of a *sibling* element. The **peer** class name can only work on *previous* siblings because of how the **subsequent-sibling combinator** works in CSS. 

So something like the following wouldn't work &mdash;

```jsx
<label>
    <span className="peer-invalid:text-red-500">Email</span>
    <input type="email" className="peer" />
</label>
```

### Form State
Rather than using '**peer**' to display an error, we could instead style form elements depending on their state. 

```jsx
<form>
    <label className="block">
        <span className="block text-sm font-light text-neutral-500">Email</span>
        <input type="email" className="rounded-md border-2 focus:ring-2 invalid:border-red-500 invalid:text-red-500" />
    </label>
</form>
```

### Direct children
As mentioned in the Tailwind docs, it's generally preferable to put utility classes directly on child elements. However, there may be cases where you just don't have control over the children, or you're working quickly and can't add *x* amount of styles to *y* child elements. Whatever the case is, you can use '**&ast;**' &mdash;

```jsx
<div className="p-4">
	<h2 className="text-sm pb-2">Skills<h2>
	<ul className="flex flex-wrap gap-2 *:rounded-full *:border *:border-neutral-500 *:bg-neutral-100 *:text-neutral-500 *:px-2 *:py-0.5 *:w-fit">
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
		<li>TypeScript</li>
		<li>React/Next.js</li>
		<li>Tailwind</li>
		<li>SQL</li>
		<li>Postgres</li>
		<li>Python</li>
		<li>Django/Flask</li>
		<li>Playwright</li>
		<li>Jest</li>
	</ul>
</div>
```

This lets you target those child elements without having to style each individual element. 

### Arbitrary Values
Sometimes the default utilities won't be pixel perfect in our designs, but we're perfectionists. 

```jsx
<button className="p-[1.2rem]">
	Click Here
</button>
```

This would put our padding right between '**p-4**' and '**p-5**', which might just be what it needs! You can use arbitrary values instead of the default utilities on any tailwind class. They're great for one-offs, but if you find yourself using them often, and with the same values, you should instead configure your tailwind for these values (*more about tailwind configuration below*). 

### Conditional Values

The most important note on conditional class names is that the *full utility class name must be available at build time for Tailwind to generate proper CSS classes*. This means that the classes must exist as *complete unbroken strings* in your source files. 

Essentially, if you use string interpolation or concatenate partial class names together, Tailwind won't find them and therefore won't generate the corresponding CSS. 

**This is good** &mdash; 
```jsx
<button className={ error ? 'text-red-500' : 'text-neutral-500' }>
	Click Here
</button>
```

**This is bad** &mdash;
```jsx
<button className={`text-${ error ? 'red' : 'neutral' }-500`}>
	Click Here
</button>
```

So, rather than constructing class names dynamically, we want to make sure we use complete class names. 

There are are some workarounds for this, but at that point, you're kind of just doing extra work to avoid doing extra work. There's some really good information about customization in the Tailwind docs, and you can find information about dynamic class names in Tailwind [here](https://tailwindcss.com/docs/content-configuration#dynamic-class-names).

###### You'll probably see this again in this post, but always [read the docs](https://tailwindcss.com/docs/installation).

### Animations

Tailwind has some pretty solid default animations. With just a few lines, we can write another loading spinner. 

```jsx
<div className="animate-spin inline-block size-8 border-2 border-blue-500 border-t-transparent rounded-full" role="status" aria-label="loading">
	<span className="sr-only">Loading...</span>
</div>
```

My only issue with the default animations is that they repeat infinitely. Luckily, this is a quick fix! For example, if we wanted any of the animations to repeat only once, we would just extend the configuration in the *tailwind.config.ts* file &mdash;

```jsx
const config: Config = {
	content: [],
	theme: {
		extend: {
			animation: {
				'spin-short': 'spin 1s linear 1'
			},
		},
	},
};
```

Now we have access to a new animation and we can use that utility in our code. 

```jsx
<div className="animate-short-spin" />
```

You can also add your own customized animations inside of the *tailwind.config.ts* file if the provided animations just aren't cutting it. 

For more information about everything discussed above, please visit the [Core Concepts section of the Tailwind documentation](https://tailwindcss.com/docs/utility-first).

## Maximizing Efficiency

You can do a lot of really cool things with Tailwind with relative ease. I still have *plenty* to learn but there's a few things I want to emphasize that have allowed me to use Tailwind more efficiently.

### Configure Your Tailwind 

If you need quick, on-the-fly styling, you can use Tailwind's square bracket notation with any arbitrary value, as discussed above. This is great for something quick, but you might find yourself using these square brackets a little too often for the same things (at least I did). Instead of using arbitrary values, you can define these values in your *globals.css* file and assign them in your *tailwind.config.ts* file.

```css
:root {
	--primary: #5eead4;
	--secondary: #222222;
	--error: #ef4444;
}
```

```jsx
const config: Config = {
	theme: {
		extend: {
			colors: {
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'error': 'var(--error)'
			},
		}
	},
}
```

Now, that button would look like this &mdash;

```jsx
<button className="text-secondary bg-primary">
	Click Here
</button>
```

You won't *always* need to, but you can accomplish a lot just by configuring tailwind a little bit. You can customize breakpoints, fonts, plugins, themes, animations, etc. So instead of using or *reusing* arbitrary values, you're able to define your design in a more meaningful and maintainable way, helping in establishing a solid design system and a more cohesive application. 

### Avoid @apply

Let's say you have an element that has a lot of styling. 

```jsx
<button className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-sm md:text-base lg:text-lg text-primary border-primary hover:text-white hover:bg-primary hover:shadow-md duration-200">
	Click Here
</button>
```

Well, instead of having to rewrite this code on every button, you could use @apply. 

```css
btn-primary {
	@apply px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-sm md:text-base lg:text-lg text-primary border-primary hover:text-white hover:bg-primary hover:shadow-md duration-200;
}
```

and now the markup for the button looks like this &mdash;

```jsx
<button className="btn-primary">
	Click Here
</button>
```

*Why is this a problem?*

Well. If you write Tailwind inside of CSS, and then use those CSS classes in your markup, you have essentially bypassed any benefit of Tailwind. You're introducing yourself to a bad abstraction that [even the creator of Tailwind disapproves of](https://twitter.com/adamwathan/status/1559250403547652097?lang=en) and says [you should never use](https://twitter.com/adamwathan/status/1226511611592085504?lang=en). 

There are far better ways to accomplish reusing styles. Learn more about them [here](https://tailwindcss.com/docs/reusing-styles). 

### Use Other Tools

Tailwind makes writing CSS easy, but you can make Tailwind easy, too.

#### Tailwind Docs &mdash;
For whatever tool you're using, the docs are your friend! I know they can be terrible sometimes, but the [Tailwind Docs](https://tailwindcss.com/docs/installation) are super user-friendly and easy to understand. There's even a VSCode extension that will take you straight to the docs from within the code. Always, always, always, and without exception, **read the docs**. 

#### Tailwind CSS IntelliSense &mdash;
This extension offers autocomplete, syntax highlighting, hover preview, and linting. My favorite feature is hover preview. If we have the following code &mdash;

```jsx
<button className="text-4xl">
	Big text!
</button>
```

We can hover over our tailwind class name and see *exactly* what styling is applied. In this case, since we have '**text-4xl**', we'll see the following &mdash;

```css
.text-4xl {
	font-size: 2.25rem;
	line-height: 2.5rem;
}
```

It's important to know what your code is doing, and the Tailwind CSS IntelliSense extension will help you tremendously. 

#### Prettier &mdash;
Listen, I know Tailwind can look ridiculous. It's one of the reasons that people don't like it. And when you're skimming through code, and you see something like this &mdash; 

```jsx
<button className="text-white shadow-md p-4 border-neutral-500 m-2 flex" />
```

I mean, come on. Obviously, that could just be written better, but sometimes, that's how it is! You change things as you go, you add or delete things, you restructure, etc. Using Prettier makes those changes *readable*. So instead of that mess, we have something like this &mdash;

```jsx
<button className="m-2 flex border-neutral-500 p-4 text-white shadow-md" />
```

The new order is loosely based on the box model, and tries to put high impact classes that affect the layout at the beginning and decorative classes at the end, while also trying to keep related utilities together. 

It's just one less thing to worry about.

## My Top 3 Favorite Tailwind Tricks

Below are just a few neat things that I don't see being used or talked about often, but have been very helpful to me in design. They're pretty specific, but I think they really showcase how easy Tailwind makes things. 

### Divide 
Admittedly, this one is *super* simple, but I don't see anyone else talking about it! It's the *easiest* way to add borders between elements. This way, you don't have to worry about the borders of each individual element. It makes it easy to add, remove, or alter any elements within the parent container. 

```jsx
<div className="flex divide-x divide-neutral-500">
	<button className="px-4 py-2 transition-colors hover:bg-neutral-200">
		Button 1
	</button>
	<button className="px-4 py-2 transition-colors hover:bg-neutral-200">
		Button 2
	</button>
	<button className="px-4 py-2 transition-colors hover:bg-neutral-200">
		Button 3
	</button>
</div>
```

👉 [Demo](https://play.tailwindcss.com/zoeBiBfgRQ)

### Transparent Text
This is a really cool effect that I like to use to put text over pictures. This gives the text a background and makes the text transparent so it can still be read while seeing what's underneath! There's a lot of other really cool uses for this with some slight modification. 

```jsx
<div className="relative flex bg-white">
	<img src="https://images.unsplash.com/photo-1485321586038-4cc99992a06f" alt="image" className="h-64 w-full object-cover object-center" />
	<div className="absolute top-4 left-4">
		<div className="text-3xl font-bold italic text-white ml-4">EXPLORE</div>
		<div className="mix-blend-color-dodge bg-white px-8 text-3xl font-extrabold -skew-x-[25deg]">TODAY</div>
	</div>
</div>
```

👉 [Demo](https://play.tailwindcss.com/uCtjUUDHe7)

### Masonry
Masonry gives so much character to grids. In Tailwind, masonry is super easy to accomplish and just *looks better*. 

```jsx
<div className="columns-1 sm:columns-2 md:columns-3">
	<div className="break-inside-avoid-column">
		<div> {/* content */} </div>
		<div> {/* content */} </div>
		<div> {/* content */} </div>
	</div>
</div>
```

👉 [Demo](https://play.tailwindcss.com/nv5Xx2yX0M)

## Conclusion

Tailwind is a powerhouse of productivity. The best way to utilize that capability is by understanding it. And the first step in understanding it is experimenting with it. Tailwind may not be perfect for every use case, but in my opinion, it's pretty damn close. If, for whatever reason, you're avoiding Tailwind, you're really missing out. 

As always, let me know what you think & **happy coding**!   

###### Curious to see how I use Tailwind? Check out [my github](https://github.com/knlrvr)! 