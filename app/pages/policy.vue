<template>
  <div class="policy-page">
    <!-- Header -->
    <div class="policy-header">
      <NuxtLink to="/" class="back-link">← BACK TO HOME</NuxtLink>
      <div class="page-title">ORBIT.MUJ COMMUNITY POLICY</div>
    </div>

    <!-- Content -->
    <div class="policy-content">
      <div class="purpose-section">
        <h2 class="section-title">PURPOSE</h2>
        <p class="section-text">
          Orbit.MUJ exists to bring together founders, techies, and creators who believe in action, collaboration, and growth. Every member contributes to a culture built on respect, integrity, and momentum.
        </p>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">1.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">RESPECT AND CONDUCT</h3>
          <ul class="policy-list">
            <li>Treat every member with professionalism and courtesy.</li>
            <li>No discrimination, harassment, or personal attacks.</li>
            <li>Keep discussions productive and focused on learning or collaboration.</li>
          </ul>
        </div>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">2.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">PRIVACY AND CONFIDENTIALITY</h3>
          <ul class="policy-list">
            <li>Respect the privacy of members and their work.</li>
            <li>Do not share private discussions, ideas, or content outside Orbit without consent.</li>
          </ul>
        </div>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">3.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">AUTHENTIC PARTICIPATION</h3>
          <ul class="policy-list">
            <li>Orbit is for those who build and act. Passive participation or spam is discouraged.</li>
            <li>Contributions should reflect honesty, effort, and a genuine desire to grow.</li>
          </ul>
        </div>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">4.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">INTELLECTUAL PROPERTY</h3>
          <ul class="policy-list">
            <li>Members retain full ownership of their projects, ideas, and content.</li>
            <li>Credit must be given when referencing or using another member's work.</li>
          </ul>
        </div>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">5.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">ZERO TOLERANCE FOR MISUSE</h3>
          <ul class="policy-list">
            <li>Orbit does not support unethical practices, academic dishonesty, or activities that harm others.</li>
            <li>Violations may result in suspension or removal from the community.</li>
          </ul>
        </div>
      </div>

      <div class="policy-section">
        <h3 class="policy-number">6.</h3>
        <div class="policy-content-wrapper">
          <h3 class="policy-title">INVITE-ONLY INTEGRITY</h3>
          <ul class="policy-list">
            <li>Membership is by invitation to ensure quality and alignment with the community's vision.</li>
            <li>Members are expected to uphold Orbit's values when inviting others.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="policy-footer">
      <div class="footer-text">BUILD. CONNECT. EVOLVE.</div>
      <NuxtLink to="/" class="home-link">RETURN TO ORBIT</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta Tags for Policy Page
useSeoMeta({
  title: 'Community Policy - ORBIT.MUJ',
  description: 'Read the community policy and guidelines for ORBIT.MUJ, our exclusive community at Manipal University Jaipur.',
  keywords: 'ORBIT.MUJ policy, community guidelines, terms of service, MUJ community rules',
  robots: 'index, follow',

  // OpenGraph Tags
  ogTitle: 'Community Policy - ORBIT.MUJ',
  ogDescription: 'Community policy and guidelines for ORBIT.MUJ exclusive community at Manipal University Jaipur.',
  ogImage: '/og.png',
  ogUrl: 'https://orbit.taohq.org/policy',
  ogType: 'website',
  ogSiteName: 'ORBIT.MUJ',

  // Twitter Card Tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Community Policy - ORBIT.MUJ',
  twitterDescription: 'Community policy and guidelines for ORBIT.MUJ exclusive community.',
  twitterImage: '/og.png'
})

// Additional head tags
useHead({
  title: 'Community Policy - ORBIT.MUJ',
  link: [
    { rel: 'canonical', href: 'https://orbit.taohq.org/policy' }
  ]
})
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  padding: 20px;
  font-family: var(--font1);
  line-height: 1.6;
}

.policy-header {
  margin-bottom: 60px;
}

.back-link {
  font-size: 16px;
  color: #666;
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #000;
}

.page-title {
  font-size: 80px;
  font-family: var(--font1);
  font-weight: bold;
  margin-top: 20px;
  line-height: 1.1;
}

.policy-content {
  max-width: 800px;
  margin: 0 auto 60px;
}

.purpose-section {
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 2px solid #eee;
}

.section-title {
  font-size: 36px;
  font-family: var(--font1);
  margin-bottom: 20px;
  font-weight: bold;
}

.section-text {
  font-size: 18px;
  color: #333;
  line-height: 1.7;
}

.policy-section {
  display: flex;
  margin-bottom: 50px;
  gap: 30px;
}

.policy-number {
  font-size: 48px;
  font-family: var(--font1);
  font-weight: bold;
  color: #000;
  min-width: 60px;
  margin: 0;
}

.policy-content-wrapper {
  flex: 1;
}

.policy-title {
  font-size: 24px;
  font-family: var(--font1);
  font-weight: bold;
  margin: 0 0 15px 0;
  letter-spacing: 1px;
}

.policy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-list li {
  font-size: 16px;
  color: #444;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

.policy-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #000;
  font-weight: bold;
}

.policy-footer {
  text-align: center;
  padding-top: 60px;
  border-top: 2px solid #eee;
}

.footer-text {
  font-size: 24px;
  font-family: var(--font1);
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.home-link {
  font-size: 18px;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #666;
  border-radius: 5px;
}

.home-link:hover {
  color: #000;
  border-color: #000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 48px;
  }

  .policy-section {
    flex-direction: column;
    gap: 15px;
  }

  .policy-number {
    font-size: 36px;
  }

  .section-title {
    font-size: 28px;
  }

  .policy-title {
    font-size: 20px;
  }
}
</style>
