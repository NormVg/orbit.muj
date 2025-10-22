<template>
  <div class="hero">
    <div class="hero-head">
      <div class="head-main">

        <div class="head-name animate-slide-up" >ORBIT.MUJ</div>
        <img :src="Logo" alt="" class="head-logo animate-fade-in">
      </div>
      <div class="head-nav animate-slide-up-delayed">
        <a href="https://forms.gle/XcWMhkwzNNoyEcFc8" target="_blank" rel="noopener noreferrer" class="nav-item nav-item-1">APPLY</a><span class="nav-dot nav-dot-1">•</span>
        <div class="nav-item nav-item-2" @click="scrollToSection('why')">WHY</div><span class="nav-dot nav-dot-2">•</span>
        <div class="nav-item nav-item-3" @click="scrollToSection('for')">FOR</div><span class="nav-dot nav-dot-3">•</span>
        <a href="mailto:thealphaones.work@gmail.com" class="nav-item nav-item-4">CONTACT</a><span class="nav-dot nav-dot-4">•</span>
        <NuxtLink to="/policy" class="nav-item nav-item-5">POLICY</NuxtLink>

      </div>
    </div>
    <div class="hero-banner">

      <img  :src="heroBanner" alt="" >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "~/assets/orbit-logo.svg";
import heroBanner from "~/assets/hero-banner.png"

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(`.${sectionId}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero{
  position: relative;
}


.hero-head{
  margin: 20px;
  margin-top: -20px;
}

.head-main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 20px; */
}

.head-name{
  font-size: 200px;
  font-family: var(--font1);
}

.head-nav{
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
}

.nav-item {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.nav-item:visited {
  color: inherit;
}

.nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  transform-origin: left;
}

.nav-item:hover::after {
  transform: scaleX(1);
}


.hero-banner{
  width: 100%;
}

.hero-banner img{
  width: calc(100% - 40px);
  margin: 20px;
    border-radius: 10px;

}

.head-logo{
  height: 100px;
}

/* Page Load Animations */
@keyframes dotFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInTwist {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes navItemFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUpFade 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeInTwist 0.8s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.animate-slide-up-delayed {
  opacity: 1;
}

/* Individual nav item animations */
.nav-item-1 {
  animation: navItemFade 0.6s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
}

.nav-item-2 {
  animation: navItemFade 0.6s ease-out forwards;
  animation-delay: 1.0s;
  opacity: 0;
}

.nav-item-3 {
  animation: navItemFade 0.6s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
}

.nav-item-4 {
  animation: navItemFade 0.6s ease-out forwards;
  animation-delay: 1.4s;
  opacity: 0;
}

.nav-item-5 {
  animation: navItemFade 0.6s ease-out forwards;
  animation-delay: 1.6s;
  opacity: 0;
}

/* Navigation dot animations */
.nav-dot-1 {
  animation: dotFade 0.4s ease-out forwards;
  animation-delay: 1.0s;
  opacity: 0;
}

.nav-dot-2 {
  animation: dotFade 0.4s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
}

.nav-dot-3 {
  animation: dotFade 0.4s ease-out forwards;
  animation-delay: 1.4s;
  opacity: 0;
}

.nav-dot-4 {
  animation: dotFade 0.4s ease-out forwards;
  animation-delay: 1.6s;
  opacity: 0;
}

/* Remove unused animations */

@media (max-width: 600px) {
  .head-main {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    margin-top: 25px;
    /* border: 1px solid salmon; */
  }

  .head-name {
    font-size: 75px;
    line-height: 1;
  }

  .head-logo {
    height: 56px;
    align-self: flex-end;
  }

  .head-nav {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 14px;
    margin-top: 6px;
  }

  /* hide separator dots on small screens */
  .head-nav span {
    display: none;
  }

  .nav-item {
    padding: 6px 8px;
  }

  .hero-head {
    margin: 12px;
    margin-top: 0;
  }

  .hero-banner img {
    width: calc(100% - 24px);
    height: 70vh;
    margin: 12px;
    object-fit: cover;
    object-position: 52% 50%;
  }
}

@media (max-width: 360px) {
  .head-name {
    font-size: 36px;
  }

  .head-logo {
    height: 48px;
  }

  .head-nav {
    font-size: 13px;
    gap: 6px;
  }
}
</style>
