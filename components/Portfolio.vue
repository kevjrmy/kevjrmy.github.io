<template>
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <p>Here's a list of my websites portfolio. Click here to see my other works.</p>
      <div class="box">
        <div class="tabs">
          <button @click="scrollX(-48)"><Icon name="material-symbols:chevron-left" /></button>
          <ul role="tab">
            <li @click="tab(0, $event)" class="active">rachel-blot.com</li>
            <li @click="tab(1, $event)">fraichup06.fr</li>
            <li @click="tab(2, $event)">fulltattoo.es</li>
            <li @click="tab(3, $event)">kantuta.es</li>
            <li @click="tab(4, $event)">fesma.art</li>
          </ul>
          <button @click="scrollX(48)"><Icon name="material-symbols:chevron-right" /></button>
        </div>
        <div class="preview">        
          <img :src='`/portfolio/${projects[i].image.src}`' :alt="projects[i].image.alt">
          <ul role="list">
            <li><i>Project:</i> {{ projects[i].title }}</li>
            <li><i>Type:</i> {{ projects[i].type }}</li>
            <li><i>Language:</i> {{ projects[i].language }}</li>
            <li><i>Stack:</i> {{ projects[i].stack }}</li>
            <li><i>Link:</i> <a :href="projects[i].link">{{ projects[i].link }} <Icon name="ic:baseline-open-in-new" /></a></li>
            <li><i>Description:</i> {{ projects[i].description }}</li>
          </ul>
        </div>  
      </div>
      <p>✨ Interested ? To see my pricings and plans <NuxtLink to="/services">click here</NuxtLink>.</p>
    </section>
</template>

<script setup>
/* Query all portfolio markdown and display the reactive index */
const projects = await queryContent('portfolio').find()
let i = ref(0)

function tab(j, e) {
  i.value = j
  let activeTab = document.querySelector('.active')
  activeTab.classList.remove('active')
  e.target.classList.add('active')
}

function scrollX(n) {
  let tabs = document.querySelector(".tabs > ul")
  tabs.scrollLeft += n
}

onMounted(() => {
  const tabs = document.querySelectorAll(".tabs li")
  const previewWidth = document.querySelector(".preview").offsetWidth
  const buttons = document.querySelectorAll("#portfolio .tabs button")
  let tabsWidth = 0
  tabs.forEach(tab => {
    tabsWidth += tab.offsetWidth
  })
  if (tabsWidth > previewWidth) {
    buttons[0].style.display = "block"
    buttons[1].style.display = "block"
  }
  else {
    buttons[0].style.display = "hidden"
    buttons[1].style.display = "hidden"
  }
})
</script>

<style scoped>
/* Box */
#portfolio .box {
  border-bottom: 1px solid var(--clr-gray-20);
  margin: 2rem 0;
}

/* Tabs */
#portfolio .tabs {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

#portfolio .tabs > ul {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  width: 100%;
  border-left: 1px solid var(--clr-gray-20);
}

#portfolio .tabs::after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 1px;
  border-bottom: 1px solid var(--clr-gray-20);
}

#portfolio .tabs li {
  background-color: var(--clr-gray-5);
  font-size: 0.9em;
  padding: 1rem;
  min-width: fit-content;
  cursor: pointer;
  position: relative;
  border-right: 1px solid var(--clr-gray-20);
  border-top: 1px solid var(--clr-gray-20);
  width: 140px;
  text-align: center;
}

#portfolio .tabs .active {
  background-color: var(--clr-white);
  color: var(--clr-text-dark);
  font-weight: 500;
}

#portfolio .tabs .active::after {
  content: "";
  background-color: var(--clr-white);
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  z-index: 1;
}

/* Preview */
#portfolio .preview {
  display: grid;
  gap: 2rem;
  border-right: 1px solid var(--clr-gray-20);
  border-left: 1px solid var(--clr-gray-20);
  overflow: hidden;
}

#portfolio .preview > img {
  margin: auto;
  max-height: 300px;
}

#portfolio .preview > ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 0;
  gap: 0.5rem;
}

#portfolio .preview a {
  text-decoration: underline;
}

#portfolio .preview i {
  font-size: 0.9em;
  font-weight: 600;
  font-style: normal;
  color: var(--clr-text-dark);
}

/* Link to service/pricing page */
#portfolio > p > a {
  color: var(--clr-primary-300);
  font-weight: 500;
}

#portfolio > p > a:hover {
  text-decoration: underline;
}

/* Responsive (mobile) */
@media screen and (max-width: 600px) {
  #portfolio .tabs button {
    min-height: 56px;
    cursor: pointer;
  }

  #portfolio .tabs button:last-of-type {
    border-left: 1px solid var(--clr-gray-20);
  }

  #portfolio .preview {
    padding: 1rem;
  }
}

/* Responsive (desktop) */
@media screen and (min-width: 600px) {
  #portfolio .tabs button {
    display: none;
  }

  #portfolio .preview {
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>