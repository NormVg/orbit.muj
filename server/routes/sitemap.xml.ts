export default defineEventHandler(async (event) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://orbit.taohq.org/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://orbit.taohq.orghttps://orbit.taohq.org/og.png</image:loc>
      <image:title>ORBIT.MUJ - Exclusive Community</image:title>
      <image:caption>ORBIT.MUJ exclusive community at Manipal University Jaipur</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://orbit.taohq.org/form</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://orbit.taohq.org/policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
