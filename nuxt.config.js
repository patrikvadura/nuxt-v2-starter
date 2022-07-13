export default {
  target: 'static',

  head: {
    title: 'nuxt-v2-starter',
    htmlAttrs: {
      lang: 'cs-CZ'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css' },
      { rel: 'stylesheet', href: 'https://res.cloudinary.com/patrik-vadura/raw/upload/v1641887298/fontFaces/BrandonGrotesque/fontBrandonGrotesque_gf3jjy.css' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      },
      {
        type: 'text/javascript',
        src: 'https://unpkg.com/feather-icons'
      }
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
    '@/plugins/globalComponents'
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

  axios: {
    baseURL: '/'
  },

  build: {
  }
}
