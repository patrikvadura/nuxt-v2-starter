export default {
  target: 'static',

  head: {
    title: 'nuxt-v2-starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/config.scss'
    ]
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  stylelint: {
    /* module options */
  },

  axios: {
    baseURL: '/'
  },

  build: {
  }
}
