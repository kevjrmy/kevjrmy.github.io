<template>
  <main>
    <h1>Contact</h1>
    <ClientOnly>
    <div class="form-layout">
      <!-- <form name="contact-form" @submit.prevent="sendEmail" autocomplete="on" ref="form"> -->
        <form name="contact-form" action="https://formspree.io/f/xzzppeor" method="POST" autocomplete="on" ref="form">
        <legend>Fill this form to contact me for any professional inquiry.</legend>      
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="tel"
          type="tel"
          placeholder="Phone (optional)"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          required
        ></textarea>
        <div class="btn">
          <button type="submit">GO!</button>
        </div>
      </form>
      <div class="contact-links">
        <p>My social media</p>
        <ul role="list">
          <li><a :href="data.linkedin" rel="noopener noreferrer" aria-label="My linkedin" title="linkedin" target="_blank"><Icon name="ri:linkedin-fill" /> Linkedin</a></li>
          <li><a :href="data.x" rel="noopener noreferrer" aria-label="My twitter" title="X (twitter)" target="_blank"><Icon name="ri:twitter-x-fill" /> Twitter</a></li>
          <li><a :href="data.github" rel="noopener noreferrer" aria-label="My github" title="github" target="_blank"><Icon name="ri:github-fill" /> Github</a></li>
        </ul>
      </div>
    </div>
  </ClientOnly>
  </main>
</template>

<script setup>
  // import {ref } from 'vue'
  import jsonFile from '~/data.json'
  const data = jsonFile

  // let form = ref({
  //   name: null,
  //   tel: null,
  //   email: null,
  //   message: null
  // })

  // async function sendEmail() {
  //   console.log("send Email")
  //   let contact = form.value
  //   try {
  //     let res = await $fetch('/api/email', {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       lazy: true,
  //       server: true,
  //       immediate: false,
  //       body: {
  //         name: contact.name.value,
  //         tel: contact.tel.value,
  //         email: contact.email.value,
  //         message: contact.message.value
  //       }
  //     })
  //     if (res === 201) {
  //       alert("Message successfully sent")
  //     } else {
  //       alert("Oops. Sorry, something went wrong: message couldn't be sent")
  //     }
  //   }
  //   catch(err) {
  //     console.error(err)
  //   }
  // }
</script>

<style scoped>
.form-layout {
  display: grid;
}

/* Form */
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px;
}

legend {
  text-align: justify;
  height: 4rem;
}

input, textarea {
  font-size: 1em;
  padding: 1rem;
  border-top: 1px solid var(--clr-gray-20);
  border-right: 1px solid var(--clr-gray-20);
  border-left: 1px solid var(--clr-gray-20);
  border-bottom: 1px solid transparent;
  background-color: transparent;
}

input {
  border-bottom: 1px solid transparent;
}

textarea {
  border-bottom: 1px solid var(--clr-text-light);
}

input::placeholder, textarea::placeholder {
  color: var(--clr-text-light);
}

input:focus, input:focus::placeholder, textarea:focus {
  outline: none;
}

input:hover, textarea:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.btn {
  text-align: right;
}

button {
  border: 1px solid var(--clr-gray-20);
  background-color: transparent;
  padding: 1rem 2rem;
  margin: 1rem 0;
  font-weight: 500;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 8px 8px 8px var(--clr-primary-50);
}

button:hover {
  border: 1px solid var(--clr-primary-100);
  box-shadow: 8px 8px 8px var(--clr-primary-100);
}

/* Contact links */
.contact-links > p {
  height: 4rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

li {
  display: inline-flex;
  align-items: center;
}

li:hover {
  text-decoration: underline;
}

svg {
  width: 32px;
}

/* Responsive (mobile) */
@media screen and (max-width: 800px) {
  .form-layout {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    gap: 4rem;
  }

  button {
    width: 100%;
  }

  .contact-links > p {
    text-align: center;
  }

  ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }
}

/* Responsive (desktop) */
@media screen and (min-width: 800px) {
  .form-layout {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    gap: 4rem;
  }

  button {
    width: 160px;
  }
}
</style>