<template>
  <div class="container">
    <m.div :style="{ x }" class="moving-text">
      BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD•BUILD
    </m.div>
  </div>
</template>

<script setup>
import { useScroll, motion as m, useTransform } from "motion-v"

const { scrollYProgress } = useScroll()

// Map scroll progress (0 to 1) to horizontal movement (-200px to 200px)
// When scrolling down (progress increases), move left
// When scrolling up (progress decreases), move right
const x = useTransform(scrollYProgress, [0, 1], [1000, -1000])
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.moving-text {
  white-space: nowrap;
  box-sizing: border-box;
  font-family: var(--font1);
  font-size: 15vw;
  font-weight: 800;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

/* Responsive font sizing and safe padding so marquee looks good on all viewports */
.moving-text {
  font-size: clamp(1.5rem, 12vw, 12rem);
  line-height: 1;
  padding-inline: 6vw;
  transform: translateZ(0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Use big vw-based font on phones and reduce container height for more compact layout */
@media (max-width: 480px) {
  .moving-text {
    /* prefer a large vw-driven size but clamp to reasonable min/max */
    font-size: clamp(2.5rem, 25vw, 14rem);
    padding-inline: 4vw;
  }

  /* reduce overall height on small screens so marquee doesn't take the full viewport */
  .container {
    height: 50vh;
  }
}

/* Slightly reduce font on large ultra-wide screens to avoid overflow */
@media (min-width: 1600px) {
  .moving-text {
    font-size: clamp(2rem, 9vw, 14rem);
  }
}

/* Respect users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .moving-text,
  .moving-text * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
