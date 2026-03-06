export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/apexcharts",
        },
        {
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
    },
  },
});
