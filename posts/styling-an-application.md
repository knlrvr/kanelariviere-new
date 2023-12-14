---
title: Styling An Application
description: Vanilla CSS, CSS-in-JS, Sass, etc. 
date: 12/1/23
---

There are so many ways that you could style your application. You could use Vanilla CSS, CSS-in-JS, SASS, a styling framework, a component library, etc. Whatever you decide to use will be fine, as long as it works for you and meets the needs of your application! There are so many reasons to use or not use various technologies, and YMMV. (*Your Mileage May Vary*)

Here, I'll discuss my experience with CSS and the various methods of styling, as well as my opinions on them. This is not a comprehensive review of every styling method, but rather a review of my own experiences. Again, YMMV. 

###### Disclaimer &mdash; I try my best to be concise but sometimes that means I don't make the points I intend to. Please let me know if you see any mistakes here or if you've had different experiences!

## Vanilla CSS
Link the CSS to your HTML or import it in your JSX and you're good to go! That's it!
```html
<!-- some code -->
<link rel="stylesheet" type="text/css" href="styles.css" /> 
<!-- some more code -->
<p class="text">This is text in an HTML file!</p>
```

```jsx
import 'globals.css'

<p className="text">This is text in a JSX file!</p>
```

```css
.text {
  color: #222;
  font-size: 16px;
}
```


###### Tip &mdash; In HTML5, 'type' on the link tag isn't required. The default value will be 'text/css'. The reason for defining the type is so that if it's unsupported, the browser can skip fetching it. For various reasons that I won't get into for the sake of brevity, my advice would be to include it anyway.

Vanilla CSS should be where you start. The only way to be effective in utilizing frameworks and libraries is by knowing the basics and fundamentals of the technology you're using. However, there are a few drawbacks to vanilla CSS &mdash;

**It's not very scalable**. As the project grows, so too does the complexity of styling. 

**CSS has a global nampespace**. This is great for creating a cohesive site/application, but can be detrimental when it comes to very specific styling. One change can break various things across your site/application.

**Colocation**. Keeping related code together improves readability & maintainability, but vanilla CSS forces you to separate related code.

## CSS-in-JS
You could always just throw your styles in with your JavaScript, using a library like [styled-components](https://styled-components.com/).  

```jsx
const Container = styled.div`
  padding: 16px;
  color: #222;
  background-color: white;
  border: 1px solid #222;
  border-radius: 10px;
  display: flex;
`

<Container>  
  I'm a container! Beep boop!
</Container>
```

or without a library at all (*which I don't recommend*) &mdash; by creating an object *or* by writing it directly within the element.

```jsx
const containerStyle = {
  padding: '16px',
  color: '#222',
  backgroundColor: 'white',
  border: '1px solid #222',
  borderRadius: '10px',
  display: 'flex',
};

function Container() {
  <div style={containerStyle}> I'm a container too! </div>;
}
```

```jsx
<div style={{ 
  padding: '16px,'
  color: '#222', 
  backgroundColor: 'white',
  border: '1px solid #222'
  borderRadius: '10px',
  display: 'flex',
}}>  
  Another container! 
</div>
```

###### Tip &mdash; The reason I wouldn't recommend CSS-in-JS without a library is the lack of support for CSS features like ***:hover***, ***:active***, ***:focused***, etc. Libraries like styled-components offer this support out of the box. 


CSS-in-JS, when implemented correctly, solves **a lot** of problems. The biggest benefit is the ability to scope styles only to their intended elements since the necessary CSS is colocated. The benefits also include auto-generated unique class names, automatic vendor prefixing, taking advantage of the JS ecosystem & very, very easy maintenance. 

The biggest issue I've come across with CSS-in-JS is it's impact on performance. [This deep dive](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) is a really good explanation of what exactly that means, and how you can avoid similar performance issues when using CSS-in-JS. 

## StyleX
[StyleX](https://stylexjs.com/) is Meta's CSS-in-JS solution, which they've been developing for some time and have recently open-sourced. 

It's important to note that this is probably far better suited for large-scale solutions since it was created with those solutions in mind. I wouldn't use StyleX for a small to medium project, but I think the benefit becomes apparent in larger projects when you have to build and define specific design systems. 

One thing that I really liked that StyleX was sure to be clear about is that it's a CSS-in-JS solution, not a CSS-in-React solution. Obviously, it was made with React in mind, but it is framework-agnostic. You can use this with *any* JavaScript framework, provided that framework allows authoring markup in JavaScript. 

Using StyleX is pretty similar to how we'd use other CSS-in-JS solutions. 

```jsx
import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  base: {
    fontSize: 16,
    color: rgb(34, 34, 34),
  },
});

<p {...stylex.props(styles.base)}>I'm text styled with StyleX!</p>
```

###### This portion of the blog entry (StyleX) was added on 12/14/23.

## CSS Modules
[CSS Modules](https://github.com/css-modules/css-modules) locally scope all class names by default. What this means is that you can reuse class names in different files, since the class names change to unique class names at build time so they won't modify any other components. 

```css
.text {
  color: #222;
  font-size: 14px;
}

.bigText {
  font-size: 3rem;
  line-height: 1;
}
```

```jsx
import styles from './[fileName].module.css'

<h1 className={styles.bigText}>I'm big text!</div>
<p className={styles.text}>I'm smaller text!</p>
```

###### Tip &mdash; It's advised (but not required) to use camelCase for local class identifiers. 

The benefit to CSS Modules is that it's still just CSS. They take care of the setbacks presented by vanilla CSS, but have a few setbacks of their own &mdash;

**Tool Configuration**. You may have to configure specific build tools and loaders, like Webpack and 'css-loader' to handle the modules. 

**One size does not fit all**. CSS Modules introduce a certain *unnecessary* complexity that might not justify the effort they require, especially during the initial setup. 

CSS Modules aren't very beginner friendly, but they're a great way to style your application if you're willing to do the work. 


## CSS Preprocessors
In the simplest of terms, preprocessors compile the code you write into something else. CSS preprocessors compile code written in the selected preprocessors syntax and generate CSS based on that code. Well, *this* sounds like vanilla CSS with extra steps, but preprocessors offer a new dimension to writing CSS that makes them far easier to work with overall. 

## Sass
[Sass](https://sass-lang.com/) is a CSS preprocessor. Sass introduces features that lend to writing reusable and maintainable styling, making it a go-to for many projects. For example &mdash;

**Variables**. Define a value once and use it across your styling. 

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

**Mixins**. Mixins let you reuse snippets of CSS that you've already defined.

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
The biggest drawback to most of these methods is naming. If you're working on a large application, you'll have to get pretty creative with names, regardless of the styling conventions you might be using. This is something that I, personally, absolutely hate.

## ✨ Tailwind ✨
[Tailwind CSS](https://tailwindcss.com/) is my go-to for most of my projects, and I won't apologize for that. It gets a lot of hate, though. A lot of folks see Tailwind as a shortcut to avoid actually learning CSS, but I believe the only way to effectively use Tailwind is by knowing CSS. I'm not saying that people don't use it for that reason, but to write off an entire framework because a few people take advantage of it seems strange to me. 

Tailwind is a utility-first framework, so it doesn't provide predefined classes for elements like buttons, or tables. You'll still have to design & build components yourself. 

```jsx
<div className="flex justify-center p-8 text-blue-500"> Hello! </div>
```

Tailwind also allows you to set arbitrary values if the predefined values just aren't working for you. Rather than using **p-8**, you can wrap a value with square brackets &mdash; **p-[2.25rem]** or **text-[#222]**. 

```jsx
<div className="flex justify-center p-[2.25rem] text-[#222]"> Hello! </div>
```

```jsx
<div className="text"> Hello! </div>
```

```css
.text {
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

Thanks for reading! Don't hesitate to reach out & let me know what you think! 

## 

###### This is an official Tailwind fan account. Not really. But it might be. 