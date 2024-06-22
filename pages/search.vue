<template>
  <main>
    <input v-model="search">

    <pre>{{ results }} </pre>
  </main>
</template>

<script setup>
const search  = ref('')

let results = "search"
onMounted(() => {
  let query = searchContent("fraichup")
  console.log(query)
})
</script>