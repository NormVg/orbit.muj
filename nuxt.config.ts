// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'canonical', href: 'https://orbit.taohq.org' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
        // { rel: 'shortcut icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'ORBIT.MUJ' },
        { name: 'theme-color', content: '#000000' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'ORBIT.MUJ' },
        { name: 'application-name', content: 'ORBIT.MUJ' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'MobileOptimized', content: '320' },
        { name: 'referrer', content: 'no-referrer-when-downgrade' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://orbit.taohq.org',
      siteName: 'ORBIT.MUJ',
      siteDescription: 'An exclusive community at Manipal University Jaipur focused on building, connecting, and evolving. Join us to grow, connect, and turn ideas into action.'
    }
  },

  // Nitro configuration for better SEO
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  modules: ['motion-v/nuxt'],


})

