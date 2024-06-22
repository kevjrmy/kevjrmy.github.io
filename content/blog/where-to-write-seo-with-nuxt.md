---
title: 'Where to write my SEO tags when using Nuxt: 4 different methods + 1 bonus'
author: Kevin Jeremy
date: 2024-06-16
featured: true
image: 
  src: /blog/carbon.svg
  alt: Nuxt useSeoMeta() function
description: How to configure SEO in a Nuxt project
head:
  meta:
    - name: 'keywords'
      content: 'Tech company slogans, Iconic tech slogans, Best tech company mottos, Tech brands taglines, Evolution of tech companies tagline'
    - name: 'robots'
      content: 'index, follow'
sitemap:
---

### 1) For basic SEO: nuxt.config.ts
When working with the Nuxt framework, the `nuxt.config.ts` file, at the root project, is your starting point for you SEO strategy. This is where you want to write the global scope SEO that will work as a fallback for your whole project (we'll talk about more specific uses down below). Let's have a look at it:

```ts
export default defineNuxtConfig({
  app: {
    head: { // <- head tag, equivalent to the classic HTML <head>
      htmlAttrs: { lang: 'en' }, // <- setting the language to english
      title: 'My awesome title!', // <- fallback title
      meta: [  // <- the meta tag, where your primary SEO goes */
        { name: 'robots', content: 'index, follow' }, // <- indicates to Google we want to index our pages
        { name: 'description', content: 'Kevin Jeremy - Web artisan & SEO blogger' },
        { name: 'keywords', content: 'Nuxt, Laravel, SEO, Freelance, UI/UX' },]
    }
  }
})
```

Use `nuxt.config.ts` to write what you consider your generic SEO: in case you don't specify any further SEO elsewhere this will be the one loaded as a fallback.

### 2) the useHead() function
Nuxt [official documentation](https://nuxt.com/docs/api/composables/use-head){:target="_blank" class="link"} states that *useHead customizes the head properties of individual pages of your Nuxt app*. This means that, if you want a specific SEO title, keyword, etc for you `about.vue` page (normally in you `/pages` folder) you can do the following:

```ts
<script setup>
  useHead({
    title: 'My about page title',
    meta: [
      { name: 'description', content: 'My description goes here' }
    ]
  })
</script>
```

What it will do is to override the generic title from `nuxt.config.ts` with this more specific one. It's mostly a function that gives access to the `<head>` and its attributes.

### 3) the useSeoMeta() function: your best SEO friend
This might be were you'll put most of your real SEO strategy into action. It's similar to useHead() but more focused and straight forward specifically for SEO purpose. Let's see unwrap this this a first example.

```ts
<script setup lang="ts">
useSeoMeta({
  title: 'My about page title',
  description: 'My description goes here'
})
</script>
```

Now what if you need it to be dynamic ? No problem: useSeoMeta() supports reactive values.

```ts
<script setup lang="ts">
const title = ref('My about page title')
const description = ref('My description goes here')

useSeoMeta({
  title: () => title
  description: () => `description: ${description.value}`
})
</script>
```

### 4) Markdown front-matter with Nuxt Content
If you're using Nuxt Content then you have an out-of-the-box access to some SEO attributes (see example below).

```md
---
title: 'Title of the page'
description: 'meta description of the page'
---
```

Nuxt Content will replace SEO attributes with Markdown front-matter ones. So be cautious not to have duplicates values.

### 5) Bonus: the Nuxt SEO module
Nuxt SEO module comes handy when dealing with some more advanced SEO like setting up a dynamic sitemap. Visit official [Nuxt SEO](https://nuxtseo.com/){:target="_blank" class="link"} documentation for more insights.