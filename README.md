# Apartment Management App

Build an demo web application for the `Apartment Management System`, and deploy it on `Vercel`. This app provides CRUD features for user to manage inventories in each apartment.

Technology stack: `Nuxt` with `Vue.js 3`, `Tailwind CSS`, `DaisyUI`, `JSON Server`

## Installation and Run

Make sure to install the dependencies before run app:

```shell
npm install
npm run dev
```

- After execute above commands, webapp run at `localhost:3000` and mock server run at `localhost:3001`

## Structure

The below folder structure follows [Nuxt directory structure](https://nuxtjs.org/docs/get-started/directory-structure/):

- `assets` includes Tailwind css file
- `components` includes Vue.js components which are then imported into your pages
- `composable` includes common functions
- `layout` includes layouts which used by pages
- `mock-server` includes a json server for mocking API server
- `pages` includes views and routes
- `types` includes common types, interfaces
- `utils` includes helper functions
