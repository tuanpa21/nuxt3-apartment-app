export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Apartment Management App',
      meta: [{ name: 'description', content: 'Apartment Management App' }],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      reactivityTransform: true,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3001',
    },
  },
})
