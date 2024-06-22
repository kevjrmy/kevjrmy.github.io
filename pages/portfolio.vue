<template>
  <main>
    <h1>Portfolio</h1>
    <p>List of my web, design and other projects/works</p>
    <section id="projects">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="project in list" :key="project._path">
          <NuxtLink :to="project._path">
            <img :src='`/portfolio/${project.image.src}`' :alt=project.image.alt>
            <h2 @click="$router.push(project._path)">{{ project.title }}</h2>
            <p>{{ project.type }}</p>
            <p>{{ project.description }}</p>
          </NuxtLink>
        </article>
      </ContentList>
    </section>
  </main>
</template>

<script setup>
/* Query .md files in the /content/blog foloder */
const query = { path: '/portfolio', limit: 100, sort: [{ date: -1 }] }
</script>

<style scoped>
section {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

article a > * {
  display: grid;
}

img {
  grid-area: image;
  aspect-ratio: 4 / 3;
  object-fit: contain;
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
  margin-top: 1rem;
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