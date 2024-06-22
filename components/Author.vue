<template>
  <section>
    <h2>About {{ author }}</h2>
    <div>
      <img src="~/assets/Kevin_Jeremy.png" alt="my profile picture" height="80" width="80" loading="lazy">
      <h3>Kevin Jeremy</h3>
      <p>I am passionate about web development not only from a technical standpoint but also because of the human element behind these projects and the economic aspects.
        My goal is to gather, select and share what I learn about these topics.</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  author: String
})
</script>

<style scoped>
div {
  max-width: 600px;
  margin: auto;
  margin-top: 2rem;
  text-align: justify;
  display: grid;
}

h3 {
  text-align: center;
  width: 100%;
}

/* Responsive (mobile) */
@media screen and (max-width: 480px) {
  div {
    grid-row-gap: 1rem;
    justify-items: center;
  }
}

/* Responsive (lg mobile > tablet > pc) */
@media screen and (min-width: 480px) {
  div {
    grid-column-gap: 2rem;
    grid-template-areas:
    "image name"
    "image text";
    grid-template-columns: repeat(2, auto);
  }

  img {
    grid-area: image;
  }

  h3 {
    grid-area: name;
    text-align: left;
  }

  p {
    grid-area: text;
  }
}
</style>

