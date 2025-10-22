<template>
  <div>
    <Hero />
    <Why/>
    <For/>
    <Apply/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta Tags
useSeoMeta({
  title: 'ORBIT.MUJ - Exclusive Community | Manipal University Jaipur',
  description: 'Join ORBIT.MUJ, an exclusive community at Manipal University Jaipur focused on building, connecting, and evolving. Turn ideas into action with like-minded innovators.',
  keywords: 'ORBIT.MUJ, Manipal University Jaipur, exclusive community, student community, innovation, collaboration, networking, MUJ, build connect evolve',
  author: 'ORBIT.MUJ',

  // OpenGraph Tags
  ogTitle: 'ORBIT.MUJ - Exclusive Community | Grow, Connect, Evolve',
  ogDescription: 'An exclusive community at Manipal University Jaipur where initiative meets collaboration. Members turn ideas into action, learn from each other, and grow together.',
  ogImage: 'https://orbit.taohq.org/og.png',
  ogImageAlt: 'ORBIT.MUJ - Exclusive Community Logo',
  ogUrl: 'https://orbit.taohq.org',
  ogType: 'website',
  ogSiteName: 'ORBIT.MUJ',
  ogLocale: 'en_US',

  // Twitter Card Tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'ORBIT.MUJ - Exclusive Community | Grow, Connect, Evolve',
  twitterDescription: 'Join ORBIT.MUJ at Manipal University Jaipur. An exclusive space where initiative meets collaboration. Build. Connect. Evolve.',
  twitterImage: 'https://orbit.taohq.org/og.png',
  twitterImageAlt: 'ORBIT.MUJ - Exclusive Community Logo',
  twitterSite: '@TheNormVg',
  twitterCreator: '@TheNormVg',

  // Additional Meta Tags
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

// Additional head tags
useHead({
  title: 'ORBIT.MUJ - Exclusive Community | Manipal University Jaipur',
  link: [
    { rel: 'canonical', href: 'https://orbit.taohq.org' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'theme-color', content: '#000000' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'ORBIT.MUJ' },
    { name: 'application-name', content: 'ORBIT.MUJ' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://orbit.taohq.org/#organization',
            name: 'ORBIT.MUJ',
            description: 'An exclusive community at Manipal University Jaipur focused on building, connecting, and evolving.',
            url: 'https://orbit.taohq.org',
            logo: {
              '@type': 'ImageObject',
              url: 'https://orbit.taohq.org/orbit-logo.svg'
            },
            sameAs: [
              'https://www.linkedin.com/in/vishnu-gupta-b5b634254/',
              'https://www.instagram.com/thenorm.vg',
              'https://twitter.com/TheNormVg'
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jaipur',
              addressRegion: 'Rajasthan',
              addressCountry: 'India'
            },
            memberOf: {
              '@type': 'EducationalOrganization',
              name: 'Manipal University Jaipur'
            }
          },
          {
            '@type': 'WebSite',
            '@id': 'https://orbit.taohq.org/#website',
            url: 'https://orbit.taohq.org',
            name: 'ORBIT.MUJ',
            description: 'An exclusive community at Manipal University Jaipur focused on building, connecting, and evolving.',
            publisher: {
              '@id': 'https://orbit.taohq.org/#organization'
            },
            inLanguage: 'en-US'
          },
          {
            '@type': 'WebPage',
            '@id': 'https://orbit.taohq.org/#webpage',
            url: 'https://orbit.taohq.org',
            name: 'ORBIT.MUJ - Exclusive Community | Manipal University Jaipur',
            isPartOf: {
              '@id': 'https://orbit.taohq.org/#website'
            },
            about: {
              '@id': 'https://orbit.taohq.org/#organization'
            },
            description: 'Join ORBIT.MUJ, an exclusive community at Manipal University Jaipur focused on building, connecting, and evolving. Turn ideas into action with like-minded innovators.',
            inLanguage: 'en-US'
          }
        ]
      })
    }
  ]
})
</script>

<style>

</style>
