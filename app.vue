<template>
  <NuxtLayout />
</template>

<style>
/* Variables */
:root {
  --max-width: 896px;
  --line-height: 1.6;
  --letter-spacing: 0.01em;
  --max-lines: 6;

  --clr-primary-50:   #ffd5d5;
  --clr-primary-100:  #ffaaaa;
  --clr-primary-200:  #ff8080;
  --clr-primary-300:  #ff5555;
  --clr-primary-400:  #ff2a2a;
  --clr-primary-500:  #ff0000;
  --clr-primary-600:  #d40000;
  --clr-primary-700:  #aa0000;
  --clr-primary-800:  #800000;
  --clr-primary-900:  #550000;
  --clr-primary-1000: #2b0000;

  --clr-white: #ffffff;
  --clr-white-alt: #f5f5f5;
  --clr-gray-5: #f2f2f2;
  --clr-gray-10: #e6e6e6;
  --clr-gray-20: #cccccc;
  --clr-black: #000000;
  --clr-text-dark: #232323;
  --clr-text-medium: #565454;
  --clr-text-light: #969faf;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  overflow-x: hidden;
}

#__nuxt {
  margin: auto;
  min-height: 100vh;
  max-width: var(--max-width);
  line-height: var(--line-height);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif;
  letter-spacing: var(--letter-spacing);
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Makes the page at least take the whole screen */
main {
  padding: 1rem;
  min-height: 100svh;
}

/* Margin for sections */
section {
  margin: 4rem 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Headings styling */
h1, h2, h3, h4 {
  color: var(--clr-text-dark);
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

/* Coloring elements */
p,
button,
time,
aside,
ul,
legend,
small,
figure {
  color: var(--clr-text-medium);
}

/* Remove list styles on ul, ol elements with a list role */
ul:where([role="list"]),
ol:where([role="list"]),
ul:where([role="tab"]) {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Clear links default style */
a {
  color: inherit;
  text-decoration: none;
}

/* Clear button default style */
button {
  background-color: transparent;
  border: none;
}

/* Font size for time and captions */
time,
figcaption {
  font-size: 0.8em;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

main > section > h2,
main > section > h2 + p {
  text-align: center;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Transition between page nav */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Markdown Content styling */
.content h2,
.content p {
  margin: 1rem 0;
}

/* Give a "pressed" animation when clicking button */
button:active {
  transition: transform 200ms;
  transform: scale(0.98);
}
</style>
