// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  site: {
    url: process.env.SITE_URL,
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Kevin Jeremy - Web artisan & SEO blogger',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        /* SEO */
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'description', content: 'Kevin Jeremy - Web artisan & SEO blogger' },
        { name: 'keywords', content: 'Nuxt, Laravel, SEO, Freelance, UI/UX' },
        { name: 'google', content: 'notranslate' },
        /* OpenGraph */
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kevin Jeremy - Web artisan & SEO blogger' },
        { property: 'og:description', content: 'Nuxt, Laravel, SEO, Freelance, UI/UX' },
        { property: 'og:image', content: process.env.SITE_URL + '/KJ.svg' },
        { property: 'og:image:alt', content: process.env.SITE_URL + 'opengraph preview image' },
	      { property: 'og:url', content: process.env.SITE_URL },
        { property: 'og:site_name', content: 'Kevin Jeremy' },
        { property: 'og:locale', content: 'en_EN' },
        { property: 'og:image:width', content: '724' },
        { property: 'og:image:height', content: '724' },
        { property: 'og:image:type', content: 'image/webp' },
        { name: 'twitter:title', content: 'Kevin Jeremy - Web artisan & SEO blogger' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@kevjrmy' },
        { name: 'twitter:description', content: 'Nuxt, Laravel, SEO, Freelance, UI/UX' },
        { name: 'twitter:image', content: process.env.SITE_URL + '/KJ.svg' },
        { name: 'twitter:image:alt', content: process.env.SITE_URL + 'opengraph preview image' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/sitemap'],
  plugins: ['~/plugins/scroll.js'],
  sitemap: {
    strictNuxtContentPaths: true,    
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
    }
  },
  nitro: {
    serveStatic: true,
    baseURL: process.env.NUXT_APP_BASE_URL,
    prerender: {
      routes: ['/']
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL,
    },
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_TOKEN: process.env.EMAIL_TOKEN,
    FORMSPREE_TOKEN: process.env.FORMSPREE_TOKEN
  }
})