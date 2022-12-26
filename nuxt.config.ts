export default defineNuxtConfig({
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
