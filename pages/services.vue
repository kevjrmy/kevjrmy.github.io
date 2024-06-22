<template>
  <main>
    <h1>Services & pricing</h1>
    <p>My services for websites project</p>
    <section id="pricing">
      <div>
        <h2>Audit</h2>
        <small>Giving a comprehensive overview of your project based on metrics</small>
        <p><strong>15€</strong> / hour</p>
        <ul role="list">
          <li><Icon name="material-symbols:chevron-right" /> Testing SEO scores</li>
          <li><Icon name="material-symbols:chevron-right" /> Looking for errors</li>
          <li><Icon name="material-symbols:chevron-right" /> UI/UX advices</li>
          <li><Icon name="material-symbols:chevron-right" /> General project analisis</li>
          <li><Icon name="material-symbols:chevron-right" /> Helping with coding practices</li>
        </ul>
      </div>
      <div>
        <h2>Optimization</h2>
        <small>Making your project faster, lighter, better</small>
        <p><strong>25€</strong> / hour</p>
        <ul role="list">
          <li><Icon name="material-symbols:chevron-right" /> Improving SEO score</li>
          <li><Icon name="material-symbols:chevron-right" /> Fixing coding errors</li>
          <li><Icon name="material-symbols:chevron-right" /> Making page speed/load faster</li>
          <li><Icon name="material-symbols:chevron-right" /> Helping with code migration</li>
        </ul>
      </div>
      <div>
        <h2>Customized</h2>
        <small>For more specific works or other professional inquiries</small>
        <p><strong>30€</strong> / hour</p>
        <ul role="list">
          <li><Icon name="material-symbols:chevron-right" /> Require a more personalized service if your project needs an adapted solution</li>
        </ul>
      </div>
    </section>
    <div class="contact-btn">
      <NuxtLink to="/contact">Contact me</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
#pricing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}

#pricing > div {
  padding: 1rem;
  border: 1px solid var(--clr-gray-20);
  text-align: center;
  transition: all 500ms;
  cursor: default;
}

#pricing > div:hover {
  scale: 1.04;
  border: 1px solid var(--clr-primary-100);
}

h2 {
  margin: 1rem 0;
}

small {
  min-height: 64px;
  display: block;
}

strong {
  color: var(--clr-text-dark);
}

ul {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

.contact-btn {
  text-align: center;
  margin: 6rem 0;
}

a {
  display: block;
  border: 1px solid var(--clr-gray-20);
  padding: 1rem 4rem;
  font-weight: 500;
  margin: auto;
  box-shadow: 8px 8px 8px var(--clr-primary-50);
  cursor: pointer;
  transition: all 500ms;
}

a:hover {
  border: 1px solid var(--clr-primary-100);
  box-shadow: 8px 8px 8px var(--clr-primary-100);
}

a:active {
  scale: .98;
}

/* Responsive (mobile) */
@media screen and (max-width: 600px) {
  a {
    width: 100%;
  }
}

/* Responsive (desktop) */
@media screen and (min-width: 600px) {
  a {
    width: 240px;
  }
}
</style>