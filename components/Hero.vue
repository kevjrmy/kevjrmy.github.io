<template>
  <section id="hero">
    <div>
      <h1>Hi, I'm Kevin Jeremy</h1>
      <p>Web <span>artisan</span> & SEO blogger</p>
      <p class="about">Welcome to my personal blog where I select and share tips for you about SEO, Content Creation, Web Dev with Laravel or Nuxt as well as news of the tech community.</p>
      <NuxtLink to="/blog">Explore</NuxtLink>
    </div>
    <div>
      <img src="~/assets/welcome.webp" alt="Welcome hero image" loading="lazy">
    </div>      
  </section>
</template>

<style scoped>
#hero {
  display: grid;
  gap: 4rem;
  grid-template-rows: auto;
  margin-top: 2rem;
  align-items: center;
  justify-items: center;
}

h1 {
  line-height: normal;
  margin-bottom: 0.5rem;
  position: relative;
}

h1:before {
  content: "";
  position: absolute;
  top: -8rem;
  left: -4rem;
  z-index: -1;
  display: block;
  width: 24rem;
  max-width: 100%;
  height: 24rem;
  background-image: radial-gradient(50% 50% at 50% 50%, var(--clr-primary-50) 0%, rgba(255, 255, 255, 0) 100%);
  filter: blur(8px);
  opacity: 0.5;
}

p {
  margin-bottom: 2rem;
  text-align: justify;
}

span {
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(359deg, var(--clr-primary-300), var(--clr-primary-600));
  -webkit-background-clip: text;
  background-clip: text;
}

a {
  text-align: center;
  display: block;
  border: 1px solid var(--clr-gray-20);
  background-color: transparent;
  padding: 1rem 2rem;
  margin: 1rem 0;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 8px 8px 8px var(--clr-primary-50);
}

a:hover {
  border: 1px solid var(--clr-primary-100);
  box-shadow: 8px 8px 8px var(--clr-primary-100);
}

/* Responsive (desktop) */
@media screen and (min-width: 800px) {
  #hero {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>