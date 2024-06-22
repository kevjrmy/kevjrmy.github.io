<template>
  <header>
    <NuxtLink to="/">
      <div id="logo">
        <img src="/KJ.svg" alt="Kevin Jeremy" height="48" width="auto" />
      </div>
    </NuxtLink>
    <nav class="desktop">
      <ul role="list">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
    <button class="mobile" @click="toggleMenu">
      <Icon name="carbon:overflow-menu-horizontal" />
    </button>
  </header>

  <aside v-if="menu">
    <div>
      <img src="/KJ.svg" alt="Kevin Jeremy" height="48" width="auto" />
      <button @click="toggleMenu">
        <Icon name="material-symbols:close" />
      </button>  
    </div>    
    <nav class="mobile">
      <ul role="list">
        <li><NuxtLink to="/" @click="toggleMenu"><Icon name="material-symbols:home" />Home</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="toggleMenu"><Icon name="material-symbols:ink-pen" />Blog</NuxtLink></li>
        <li><NuxtLink to="/portfolio" @click="toggleMenu"><Icon name="carbon:portfolio" />Portfolio</NuxtLink></li>
        <li><NuxtLink to="/services" @click="toggleMenu"><Icon name="material-symbols:tools-wrench-outline" />Services</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="toggleMenu"><Icon name="solar:letter-linear" />Contact</NuxtLink></li>
      </ul>
    </nav>
    <p>Words are magic</p>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

let menu = ref(false)

function toggleMenu() {
  menu.value = !menu.value  
  const body = document.querySelector("body")
  if (menu.value) {
    body.style.overflowY = "hidden"
    scroll()
  }
  else {
    body.style.overflowY = "auto"
  }
}

function scroll() {
  window.scrollTo(0, 0)
}
</script>

<style scoped>
header {
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.desktop ul {
  display: flex;
}

a {
  transition: all 500ms;
}

ul a:hover {
  color: var(--clr-primary-200);
}

.desktop .router-link-exact-active {
  color: var(--clr-primary-300);
  font-weight: 500;
}

button {
  font-size: 2em;
}

/* Responsive (desktop) */
@media screen and (min-width: 640px) {
  .mobile {
    display: none;
  }

  .desktop ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.1rem 1rem;
  }
}

/* Responsive (mobile) */
@media screen and (max-width: 640px) {
  .desktop {
    display: none;
  }

  aside {
    position: fixed;
    z-index: 2;
    background-color: var(--clr-white);
    width: 100%;
    height: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 2rem 1rem;
  }

  aside > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 

  aside > nav > ul {
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    gap: 1rem;
  }

  aside > nav > ul > li > a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  aside > p {
    text-align: center;
    font-size: 0.8rem;
    position: absolute;
    bottom: 4rem;
    width: 100%;
  }
}
</style>