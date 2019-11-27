require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Sell Beats Online | Buy Beats | Airbit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://code.iconify.design/1/1.0.3/iconify.min.js' }]
  },
  env: {
    apiUrl: process.env.API_URL || 'https://api.airbit.com'
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // SCSS file in the project
    '@/assets/css/main.scss',
    '@/assets/css/simple-line-icons.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/font-awesome',
    '@nuxtjs/dotenv'
  ],
  bootstrapVue: {
    // bootstrapCSS: false, // Or `css: false`
    // bootstrapVueCSS: false // Or `bvCSS: false`,
    componentPlugins: ['LayoutPlugin', 'NavbarPlugin']
    // directivePlugins: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'https://api.airbit.com'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
