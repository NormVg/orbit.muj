<template>
  <div class="hero">
    <div class="hero-head">
      <div class="head-main">

        <div class="head-name" >ORBIT.MUJ</div>
        <img :src="Logo" alt="" class="head-logo">
      </div>
      <div class="head-nav">
        <a href="https://forms.gle/XcWMhkwzNNoyEcFc8" target="_blank" rel="noopener noreferrer" class="nav-item">APPLY</a><span>•</span>
        <div class="nav-item" @click="scrollToSection('why')">WHY</div><span>•</span>
        <div class="nav-item" @click="scrollToSection('for')">FOR</div><span>•</span>
        <a href="mailto:thealphaones.work@gmail.com" class="nav-item">CONTACT</a><span>•</span>
        <NuxtLink to="/policy" class="nav-item">POLICY</NuxtLink>

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

}

.head-logo{
  height: 100px;
}
</style>
