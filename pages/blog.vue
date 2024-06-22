<template>
  <main>
    <h1>Blog</h1>
    <p>My latest articles</p>
    <section id="articles">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <img :src=article.image.src :alt=article.image.alt>
            <h2 @click="$router.push(article._path)">{{ article.title }}</h2>
            <time>{{ formattedDate(article.date) }}</time>
            <p>{{ article.description }}</p>
          </NuxtLink>
        </article>
      </ContentList>
    </section>
  </main>
</template>

<script setup>
/* Query .md files in the /content/blog foloder */
const query = { path: '/blog', limit: 100, sort: [{ date: -1 }] }

/* Formats the ISO date to a english date format: May 25, 2024 */
function formattedDate(dateString) {
  const date = new Date(dateString)
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  const formatter = new Intl.DateTimeFormat('en-EN', options)
  const englishDate = formatter.format(date)
  return englishDate
}
</script>

<style scoped>
section {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

article a > * {
  display: grid;
}

img {
  grid-area: image;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
}

h2 {
  grid-area: title;
}

h2 + p {
  grid-area: type;
  font-size: 0.8rem;
}

p:last-child {
  grid-area: excerpt;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  height: fit-content;
  text-align: justify;
  margin: 1rem 0;
}

/* Responsive (mobile) */
@media screen and (max-width: 480px) {
  h2 {
    margin-top: 1rem;
  }
}

/* Responsive (lg mobile > tablet > pc) */
@media screen and (min-width: 480px) {
  article a {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
      "image title"
      "image type"
      "image excerpt";
  }
}
</style>