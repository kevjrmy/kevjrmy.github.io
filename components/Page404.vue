<template>
  <main>
    <section>
      <p>This page could not be found </p>
      <p class="alert">404</p>
      <NuxtLink to="/">Back to homepage <Icon name="material-symbols:arrow-right-alt" /></NuxtLink>
    </section>
  </main>
</template>

<style scoped>
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50vh;
}

.alert {
  font-size: 4em;
  margin: 1rem 0;
  color: var(--clr-text-dark);
}

a {
  align-items: center;
  display: flex;
  position: relative;
  color: var(--clr-text-medium);
}

a:hover {
  color: var(--clr-text-dark);
}
</style>