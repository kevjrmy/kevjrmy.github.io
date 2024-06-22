// To scroll to top when changing page/route
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
  })
})