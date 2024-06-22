<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <button @click="$router.back()"><Icon name="material-symbols-light:arrow-back-rounded" /> Back</button>
          <h1>{{ doc.title }}</h1>
          <time>{{ formattedDate(doc.date) }}</time>
          <p>{{ doc.description }}</p>
          <figure v-if="doc.image">
            <img :src=doc.image.src :alt=doc.image.alt loading="lazy">
            <figcaption>{{ doc.image.alt }}</figcaption>
          </figure>
          <ContentRenderer :value="doc" class="content" />
        </article>
        <Author v-if="doc.author" author="the author" />
      </template>

      <template #empty>
        <Page404 />
      </template>
      <template #not-found>
        <Page404 />
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
useSeoMeta({
  author: 'Kevin Jeremy'
})

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
article {
  padding: 2rem 0;
}

article > button:first-of-type {
  color: var(--clr-text-medium);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

h1 {
  margin-top: 2rem;
}

p {
  margin: 2rem 0;
}

:deep(figure) {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
}

:deep(.link) {
  text-decoration: underline;
}

:deep(pre) {
  overflow-x: auto;
}
</style>
