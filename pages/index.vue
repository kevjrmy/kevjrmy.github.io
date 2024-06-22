<template>
  <main>
    <Hero />
    <section id="featured">
      <h2>Featured articles</h2>
      <p>Check out some of my featured articles <Icon name="material-symbols:ink-pen" /></p>
      <div>
        <ContentQuery path="/blog" :where="{ featured: true }" :limit=3 :sort="{ date: -1 }" v-slot="{ data }">
          <article v-for="featured of data" :key="featured._path">
            <NuxtLink :to="featured._path">
              <img :src=featured.image.src :alt=featured.image.alt>
              <div>
                <h3 @click="$router.push(featured._path)">{{ featured.title }}</h3>
                <time>{{ formattedDate(featured.date) }}</time>
                <p>{{ featured.description }}</p>
              </div>
            </NuxtLink>
          </article>
        </ContentQuery>    
      </div>
    </section>

    <section id="stack">
      <h2>Main stack</h2>
      <p>What is an artisan without his tools ? Here are my most used ones.</p>
      <ul role="list">
        <li>
          <Icon name="logos:laravel" />
          <div><h3>Laravel</h3><small>The PHP framework for API backend</small></div>
        </li>
        <li>
          <Icon name="logos:nuxt-icon" />
          <div><h3>Nuxt</h3><small>A Javascript full stack framework</small></div>
        </li>
        <li>
          <Icon name="logos:mysql-icon" />
          <div><h3>MySQL</h3><small>My database (also w/ MariaDB and SQLite)</small></div>
        </li>
        <li>
          <Icon name="logos:kotlin-icon" />
          <div><h3>Kotlin</h3><small>For Android native mobile dev</small></div>
        </li>
        <li>
          <Icon name="logos:git-icon" />
          <div><h3>Git</h3><small>Version control system</small></div>
        </li>
        <li>
          <Icon name="logos:linux-tux" />
          <div><h3>Linux</h3><small>Debian/Ubuntu based distros</small></div>
        </li>
        <li>
          <Icon name="devicon:inkscape" />
          <div><h3>Inkscape</h3><small>My favorite vector graphic editor</small></div>
        </li>
        <li>
          <Icon name="logos:wordpress-icon" />
          <div><h3>WordPress</h3><small>Most used CMS in the web</small></div>
        </li>
      </ul>
    </section>

    <Portfolio />

    <Author author="me" />

    <div class="scrollToTop">
      <button class="scrollToTop-btn" ref="observeElement" @click="scrollToTop"><Icon name="material-symbols:arrow-upward-alt" /></button>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'

useSeoMeta({
  title: 'Welcome to kevinjeremy.com'
})

/* Formats the ISO date to a text date */
function formattedDate(dateString) {
  const date = new Date(dateString)
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  const formatter = new Intl.DateTimeFormat('en-GB', options)
  const englishDate = formatter.format(date)
  return englishDate
}

function scrollToTop() {
  window.scrollTo(0, 0)
}

const observeElement = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) =>
    {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('observer-animation')
      })
    }, { threshold: 0.5 }
  )

  if (observeElement) {
    observer.observe(observeElement.value)
  }
})
</script>

<style scoped>
/* Featured */
#featured svg {
  vertical-align: text-top;
}

#featured > div {
  margin: 4rem 0;
  display: grid;
}

#featured article a {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

#featured article img {
  aspect-ratio: 16 / 9;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

#featured article p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-height: calc(4 * 1em * var(--line-height));
  height: fit-content;
  text-align: justify;
  margin-top: 0.5rem;
}

/* Stack */
#stack ul {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}

#stack li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
}

#stack h3 {
  font-weight: 400;
  font-size: 1em;
}

#stack svg {
  font-size: 2em;
}

/* ScrollToTop */
.scrollToTop {
  text-align: right;
}

.scrollToTop-btn {
  opacity: 0;
  transform: translateY(1rem);
  transition: all 2s;
  padding: 0;
  cursor: pointer;
}

.scrollToTop-btn svg {
  padding: 0.5rem;
  border: 1px solid var(--clr-primary-200);
  background-color: var(--clr-white);
  height: 2em;
  width: 2em;
}

/* IntersectionalObserver */
.observer-animation {
  transform: translateY(0);
  opacity: 1;
  background-color: bisque;
}

/* Responsive (mobile s) */
@media screen and (max-width: 400px) {
  #about div {
    flex-wrap: wrap;
  }
}


/* Responsive (mobile) */
@media screen and (max-width: 600px) {
  #featured > div {
    gap: 4rem;
  }

  #stack ul {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
}

/* Responsive (desktop) */
@media screen and (min-width: 600px) {
  #featured > div {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  #featured article:first-child {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  #featured article:first-child > a {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
  }

  #stack ul {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>