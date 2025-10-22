export default defineEventHandler(async (event) => {
  const robots = `User-Agent: *
Allow: /

# Disallow form pages from being indexed
Disallow: /form

# Allow search engines to crawl main pages
Allow: /
Allow: /index

# Sitemap location
Sitemap: https://orbit.taohq.org/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1`

  setHeader(event, 'Content-Type', 'text/plain')
  return robots
})
