// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/forms")],
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/apexcharts/dist/apexcharts.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js', body: true },
        { src: 'https://cdn.jsdelivr.net/npm/apexcharts', body: true },
        { src: 'https://js.stripe.com/v3/', body: true }
      ]
    }
  }
});
