// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vesp/nuxt-fontawesome'],
  app: {
    head: {
      title: 'TechStore',
      meta: [
        {
          name: 'description',
          content: 'Fancy tech and gadgets!'
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        }
      ]
    }
  },
  routeRules: {
    '/products': { redirect: '/' },
  },
  fontawesome: {
    icons: {
      solid: ['cart-shopping', 'magnifying-glass', 'angle-left', 'star'],
      regular: []
    }
  }
})