<template>
  <!-- This component doesn't render anything, it just manages head tags -->
</template>

<script lang="ts" setup>
interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'book' | 'profile'
  noindex?: boolean
  canonical?: string
}

const props = withDefaults(defineProps<SEOProps>(), {
  title: 'ORBIT.MUJ - Exclusive Community | Manipal University Jaipur',
  description: 'Join ORBIT.MUJ, an exclusive community at Manipal University Jaipur focused on building, connecting, and evolving. Turn ideas into action with like-minded innovators.',
  keywords: 'ORBIT.MUJ, Manipal University Jaipur, exclusive community, student community, innovation, collaboration, networking, MUJ',
  image: 'https://orbit.taohq.org/og.png',
  url: 'https://orbit.taohq.org',
  type: 'website',
  noindex: false,
  canonical: ''
})

const robots = computed(() => {
  return props.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

const canonicalUrl = computed(() => {
  return props.canonical || props.url
})

// Apply SEO meta tags
useSeoMeta({
  title: props.title,
  description: props.description,
  keywords: props.keywords,
  robots: robots.value,

  // OpenGraph
  ogTitle: props.title,
  ogDescription: props.description,
  ogImage: props.image,
  ogImageAlt: `${props.title} - ORBIT.MUJ`,
  ogUrl: props.url,
  ogType: props.type,
  ogSiteName: 'ORBIT.MUJ',
  ogLocale: 'en_US',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: props.title,
  twitterDescription: props.description,
  twitterImage: props.image,
  twitterImageAlt: `${props.title} - ORBIT.MUJ`,
  twitterSite: '@TheNormVg',
  twitterCreator: '@TheNormVg'
})

// Additional head tags
useHead({
  title: props.title,
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
})
</script>
