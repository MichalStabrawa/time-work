const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css"}
    ],
  
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '../aghNode-Project/assets/css/style.css',
    // SCSS file in the project
    '../aghNode-Project/assets/css/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    '~/plugins/moment.js',
    '~/plugins/dayjs.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
    
  
    
  
  ],
  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  
    extend(config, ctx) {
     
    }
  }
}
