require('dotenv').config()

export default {
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'Les lanternes',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: 'Les lanternes vous proposent des thérapies à Bourges, pour les couples, les jeunes, la constellation familiale et le deuil. ',
      // },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/colors.css', '~/styles/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    '@nuxtjs/markdownit',
    'nuxt-leaflet',
    '@nuxtjs/sitemap',
  ],

  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: process.env.SITEMAP_HOSTNAME,
  },

  generate: {
    routes: [
      '/week-end-couples',
      '/week-end-jeunes',
      '/constellations-familiales',
    ],
  },
}
