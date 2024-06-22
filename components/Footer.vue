<template>
  <footer>
    <NuxtLink>
      <img src="/KJ.svg" alt="Kevin Jeremy" height="32" width="auto" />
    </NuxtLink>
    <ul role="list">
      <li><a :href="data.linkedin" rel="noopener noreferrer" aria-label="My linkedin" title="linkedin" target="_blank"><Icon name="ri:linkedin-fill" /></a></li>
      <li><a :href="data.x" rel="noopener noreferrer" aria-label="My twitter" title="X (twitter)" target="_blank"><Icon name="ri:twitter-x-fill" /></a></li>
      <li><a :href="data.github" rel="noopener noreferrer" aria-label="My github" title="github" target="_blank"><Icon name="ri:github-fill" /></a></li>
    </ul>
    <div>
      <p class="copyright">kevinjeremy.com © {{ year }} - All Rights Reserved</p>
      <ul role="list">
        <li><NuxtLink to="/info">Terms of use</NuxtLink></li>
        <li><NuxtLink to="/info">Privacy</NuxtLink></li>
      </ul>  
    </div>    
  </footer>
</template>

<script setup>
  import jsonFile from '~/data.json'
  const data = jsonFile
  const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  border-top: 1px solid var(--clr-gray-20);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  font-weight: 300;
}

ul {
  display: flex;
  gap: 1rem;
}

/* Responsive (mobile) */
@media screen and (max-width: 800px) {
  div {
    flex-direction: column-reverse;
    gap: 1rem;
    align-items: center;
  }
}
</style>