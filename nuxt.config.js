export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt',
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/vee-validate'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'tr',
            file: 'tr.js',
            name: 'Türkçe',
          },
          {
            code: 'en',
            file: 'en.js',
            name: 'English',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'tr',
        silentTranslationWarn: process.env.NODE_ENV === 'development',
      },
    ],
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss', '~/assets/style.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.BASE_URL,
      },
    },
    user: {
      property: 'user',
      autoFetch: true,
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/admin',
    },
    endpoints: {
      user: { url: '/api/user', method: 'get' },
    },
  },

  router: {
    middleware: ['auth'],
  },
}
