<template>
  <div class="box">
    <img src="~/assets/apply-bg.png" alt="Background" class="bg-image">

    <div class="content" ref="domRef">
      <div class="l1" :class="{ 'animate-l1': isInView, 'fade-out': !isInView }">BELONG "EXCLUSIVE"</div>
      <a href="https://forms.gle/XcWMhkwzNNoyEcFc8" target="_blank" rel="noopener noreferrer" class="apply-btn" :class="{ 'animate-btn': isInView, 'fade-out': !isInView }">APPLY NOW</a>
      <div class="l2" :class="{ 'animate-l2': isInView, 'fade-out': !isInView }">WELCOME TO ORBIT</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInView } from 'motion-v'

const domRef = ref()
const isInView = useInView(domRef, {
  threshold: 0.3,
  rootMargin: '0px 0px -10% 0px'
})

// Log for debugging
watch(isInView, (inView) => {
  console.log('Apply element is in view: ', inView)
})
</script>

<style scoped>
.box {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: auto;
  z-index: -1;
  object-fit: contain;
  border-radius:10px ;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16vh;
  z-index: 1;
}

.apply-btn {
  padding: 20px 50px;
  background-color: black;
  border-radius: 10px;
  color: white;
  border: none;
  font-family: var(--font2);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  opacity: 0;
}

/* Hover state */
.apply-btn:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

/* Focus state (for keyboard navigation) */
.apply-btn:focus {
  background-color: #444;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}

/* Active state (when clicked/pressed) */
.apply-btn:active {
  background-color: #000;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Focus-visible for better accessibility */
.apply-btn:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.l1 {
  /* font-size: 125px; */
  font-size: 10vw;
  font-family: var(--font1);
  opacity: 0;
}

.l2 {
  /* font-size: 125px; */
  font-size: 10vw;
  font-family: var(--font1);
  letter-spacing: 15%;
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

.animate-l1 {
  animation: slideInUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.animate-l2 {
  animation: slideInUp 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.animate-btn {
  animation: slideInUp 0.8s ease-out forwards;
  animation-delay: 1.4s;
  opacity: 0;
}

.fade-out {
  animation: fadeOut 0.8s ease-out forwards;
  animation-delay: 0s;
}

@media (max-width: 600px) {
  .box {
    margin: 12px;
    height: 100vh;
  }

  .bg-image {
    width: 100%;
    height: 50vh;
    max-width: none;
    object-fit: cover;
  }

  .content {
    gap: calc(16vh / 1.618);
  }

  .apply-btn {
    padding: 16px 40px;
    font-size: 16px;
    border-radius: 10px;
  }

  .l1 {
    font-size: calc(125px / 1.618);
    line-height: 1.5;
    text-align: center;
  }

  .l2 {
    font-size: calc(125px / 1.618);
    letter-spacing: 10%;
    line-height: 1.5;
    text-align: center;
  }
}

@media (max-width: 360px) {
  .content {
    gap: calc(16vh / 2.618);
  }

  .apply-btn {
    padding: 12px 24px;
    font-size: 14px;
  }

  .l1 {
    font-size: calc(125px / 2.618);
    margin: 10px;
  }

  .l2 {
    font-size: calc(125px / 2.618);
    letter-spacing: 5%;
    margin: 10px;
  }
}
</style>
