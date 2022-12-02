export default {
  // Global page headers: https://go.nuxtjs.dev/config-head\
  target: 'server',
  ssr: true,
  head: {
    title: 'Le Dispositif',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le Dispositif, basé sur Caen, à la radio, en Podcast ou sur vos réseaux sociaux' },
      { name: 'keywords', content: 'dispositif, podcast, caen, radio, 666'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/global.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  
  axios: {
    proxy: true
  },

  proxy: { 
    '/api/ausha/': { target: 'https://feed.ausha.co/', pathRewrite: {'^/api/ausha/': ''}, changeOrigin: true },
    '/api/insta/': { target: 'https://graph.instagram.com/', pathRewrite: {'^/api/insta/': ''}, changeOrigin: true },
    '/api/youtube/': { target: 'https://www.googleapis.com/youtube/v3/', pathRewrite: {'^/api/youtube/': ''}, changeOrigin: true }
  }, 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    {
      path: "/youtube",
      handler: "~/middleware/api/youtube.js"
    },
    {
      path: "/instagram",
      handler: "~/middleware/api/instagram.js"
    },
  ]
}
