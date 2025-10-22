<template>
  <div class="footer" ref="domRef">

    <div class="footer-link" :class="{ 'animate-links': isInView, 'fade-out': !isInView }">

      <a href="https://www.linkedin.com/in/vishnu-gupta-b5b634254/" target="_blank" rel="noopener noreferrer" class="nav-item">LINKEDIN</a><span>•</span>
      <a href="https://twitter.com/TheNormVg" target="_blank" rel="noopener noreferrer" class="nav-item">TWITTER / X</a><span>•</span>
      <a href="mailto:thealphaones.work@gmail.com" class="nav-item">EMAIL</a>

    </div>

    <div class="l1" :class="{ 'animate-l1': isInView, 'fade-out': !isInView }"></div>
    <div class="l2" :class="{ 'animate-l2': isInView, 'fade-out': !isInView }"></div>
    <div class="l3" :class="{ 'animate-l3': isInView, 'fade-out': !isInView }"></div>
    <div class="l4" :class="{ 'animate-l4': isInView, 'fade-out': !isInView }"></div>
    <div class="l5" :class="{ 'animate-l5': isInView, 'fade-out': !isInView }"></div>
    <div class="l6" :class="{ 'animate-l6': isInView, 'fade-out': !isInView }">POWERED BY  <a href="https://taohq.org" target="_blank" rel="noopener noreferrer" class="powered-by-link"> TheAlphaOnes</a></div>

  </div>
</template>

<script lang="ts" setup>
import { useInView } from 'motion-v'

const domRef = ref()
const isInView = useInView(domRef, {
  once: true,
  threshold: 0.3,
  rootMargin: '0px 0px -10% 0px'
})

// Log for debugging
watch(isInView, (inView) => {
  console.log('Footer element is in view: ', inView)
})
</script>

<style scoped>

.powered-by-link{
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  margin-left: 5px;
    transition: color 0.2s ease;
}



.powered-by-link:hover,
.powered-by-link:focus {
  color: crimson;
}

.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-link{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  opacity: 0;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
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



.l1{
  height: calc(60px / (1.618*5));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 1px;
  opacity: 0;
}
.l2{
  height: calc(60px / (1.618*4));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 2px;
  opacity: 0;
}
.l3{
  height: calc(60px / (1.618*3));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 2.5px;
  opacity: 0;
}

.l4{
  height: calc(60px / (1.618*2));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 3px;
  opacity: 0;
}

.l5{
  height: calc(60px / 1.618);
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 5px;
  opacity: 0;
}

.l6{
  height: 60px;
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  opacity: 0;
}

/* Scroll-triggered animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-links {
  animation: slideInUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.animate-l1 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.animate-l2 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.animate-l3 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
}

.animate-l4 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 1.0s;
  opacity: 0;
}

.animate-l5 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
}

.animate-l6 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 1.4s;
  opacity: 0;
}

.fade-out {
  animation: fadeOut 0.8s ease-out forwards;
  animation-delay: 0s;
}


</style>
