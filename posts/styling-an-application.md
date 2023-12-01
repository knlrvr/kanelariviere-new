---
title: Styling An Application
description: Vanilla CSS, CSS-in-JS, Sass, etc. 
date: 12/1/23
---

There are so many ways that you could style your application. You could use Vanilla CSS, CSS-in-JS, SASS, a styling framework, a component library, etc. Whatever you decide to use will be fine, as long as it works for you and meets the needs of your application! There are so many reasons to use or not use various technologies, and YMMV. 

Here, I'll discuss my experience with CSS and the various methods of styling, as well as my opinions on them. This is not a comprehensive review of every styling method, but rather a review of my own experiences. Again, YMMV. 

###### Disclaimer &mdash; I try to be concise but sometimes that means I don't make the points I intend to. Please let me know if you see any mistakes here!

## Vanilla CSS
Link a CSS file to your HTML file and you're good to go! 
```html
  <!-- some code -->
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <!-- some more code -->
  <p class="text">This is text in an HTML file!</p>
```


```css
.text {
  color: #222;
  font-size: 16px;
}
```


###### Tip &mdash; In HTML5, 'type' on the link tag isn't required. The default value will be 'text/css'. The reason for defining the type is so that if it's unsupported, the browser can skip fetching it. For various reasons that I won't get into for the sake of brevity, my advice would be to include it anyway.

Vanilla CSS should be where you start. The only way to be effective in utilizing frameworks and libraries is by knowing the basics and fundamentals of the technology you're using. Vanilla CSS is getting However, there are a few drawbacks to vanilla CSS - 

1. **It's not very scalable**. As the project grows, so too does the complexity of styling. 
2. **CSS has a global nampespace**. This is great for creating a cohesive site/application, but can be detrimental when it comes to very specific styling. One change can break various things across your site/application.
3. **Colocation**. Keeping related code together improves readability & maintainability, but vanilla CSS forces you to separate related code.

## CSS-in-JS
You could always just throw your styles in with your JavaScript, using a library like [styled-components](https://styled-components.com/).  

```js
const Container = styled.div`
  padding: 16px;
  color: #111;
  border: 1px solid #222;
  border-radius: 10px;
`

<Container>  
  I'm a container! Beep boop!
</Container>
```

CSS-in-JS solves *a lot* of problems. The biggest benefit is the ability to scope styles only to their intended elements since the necessary CSS is colocated. The benefits also include auto-generated unique class names, automatic vendor prefixing & very, very easy maintenance. 

The biggest issue I've come across with CSS-in-JS is it's impact on performance. [This deep dive](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) is a really good explanation of what exactly that means, and how you can avoid similar performance issues when using CSS-in-JS. 

## CSS Preprocessors
In the simplest of terms, preprocessors compile the code you write into something else. CSS preprocessors compile code written in the selected preprocessors syntax and generate CSS based on that code. It sounds like vanilla CSS with extra steps, but preprocessors offer a new dimension to writing CSS that makes them far easier to work with overall. 

## Sass
[Sass](https://sass-lang.com/) is a CSS preprocessor. Sass introduces features that lend to writing reusable and maintainable styling, making it a go-to for many projects. These features include - 

1. **Variables**. Define a value once and use it across your styling. 

```css
$heading: 'Courier New', monospace;
$font: 'Helvetica', sans-serif;
$primary: #222;

h1 {
  font: $heading;
  color: $primary;
}

p {
  font: $font;
  color: $primary;
}
```

2. **Mixins**. Mixins let you reuse snippets of CSS that you've already defined.

```css
@mixin important-message {
  color: #dc2626;
  font-weight: bold;
  border: 1px solid #222;
}

.error {
  @include important-message;
}
```

& so much more. Sass allows you to write clean, reusable, maintainable CSS. It is by no means the only CSS preprocessor available, and it might not even be what works best for you! You could also use something like [LESS](https://lesscss.org/), [Stylus](https://stylus-lang.com/), or [Stylable](https://stylable.io/). 

Personally, Sass is my #2 go-to for styling. It's easy and intuitive. 

## But Naming Is... Hard
The biggest drawback to any of these methods is naming. If you're working on a large application, you'll have to get pretty creative with names, regardless of the styling conventions you might be using. This is something that I, personally, absolutely hate.

## ✨ Tailwind ✨
Tailwind CSS is my go-to for most of my projects, and I won't apologize for that. It gets a lot of hate, though. A lot of folks see Tailwind as a shortcut to avoid actually learning CSS, but I believe the only way to effectively use Tailwind is by knowing CSS. I'm not saying that people don't use it for that reason, but to write off an entire framework because a few people take advantage of it seems strange to me. 

Tailwind is a utility-first framework, so it doesn't provide predefined classes for elements like buttons, or tables. You'll still have to design & build components yourself. 

```jsx
  <div className="flex justify-center p-8 text-blue-500"> Hello! </div>
```

Tailwind also allows you to set arbitrary values if the predefined values just aren't working for you. Rather than using **p-8**, you can wrap a value with square brackets &mdash; **p-[2.25rem]** or **text-[#222]**. 

```jsx
    <div className="flex justify-center p-[2.25rem] text-[#222]"> Hello! </div>
```

```jsx
  <div className="div"> Hello! </div>
```

```css
.div {
  display: flex;
  justify-content: center;
  padding: 2.25rem;
  color: #222;
}
```

Tailwind offers a great developer experience. You spend less time trying to conjure names and never leave your HTML/JSX/TSX. The only setback I've found is that the code can get bloated pretty quickly with long class names. I don't find myself struggling to name things very often, though, so it's a decent trade-off, in my opinion. 

## Conclusion
There's a lot of options when styling your application. You just have to pick the right tool for the job. Sometimes, the right tool is something you're already familiar with. Other times, it's something that you've never even heard of and pushes you *all the way* out of your comfort zone. Every option has its advantages and disadvantages, and you'll have to identify the best solution for you. 

**It's Tailwind, though**.