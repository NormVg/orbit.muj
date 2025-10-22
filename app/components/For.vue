<template>
  <div class="box for">
    <div class="bgd" :class="{ 'animate-in': isInView, 'fade-out': !isInView }">FOR ??</div>

    <div class="fg" ref="domRef">
      <div class="title">
        <span :class="{ 'animate-title-1': isInView, 'fade-out': !isInView }">FOUNDER,</span>
        <span :class="{ 'animate-title-2': isInView, 'fade-out': !isInView }"> TECHIE,</span>
        <span :class="{ 'animate-title-3': isInView, 'fade-out': !isInView }">CREATOR.</span>
      </div>
      <div class="banner" :class="{ 'animate-banner': isInView, 'fade-out': !isInView }" ref="domRef2">
        <div :class="{ 'animate-banner-text': isInView2, 'fade-out': !isInView2 }">

          For founders, techies, and creators — Orbit.MUJ is where ambition meets
          action. It’s a circle of people who build, experiment, and share openly.
          Whether you’re launching projects, exploring ideas, or shaping your
          craft, Orbit gives you the space, community, and momentum to keep moving
          forward.
        </div>
      </div>
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

const domRef2 = ref()
const isInView2 = useInView(domRef2, { amount: 1 })

</script>


<style scoped>

.box{
  margin: 20px;
}

.bgd{
  opacity: 0;
  font-size: 150px;
  font-family: var(--font1);
  text-align: left;
  margin-top: 100px;
}

.fg{
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.title{
  font-size: 100px;
  font-family: var(--font1);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
}

.title span {
  opacity: 0;
}

.banner{
  background-image: url("~/assets/for-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1200/570;
  width: 70%;
  color: whitesmoke;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  opacity: 0;
}

.banner div{
  font-size: 22px;
  margin: 30px;
  width: 70%;
  text-align: right;
  opacity: 0;
  /* border: 1px solid salmon; */
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

@keyframes bgdSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 0.25;
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

@keyframes bgdFadeOut {
  from {
    opacity: 0.25;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-in {
  animation: bgdSlideIn 0.8s ease-out forwards;
  animation-delay: 0.1s;
  opacity: 0;
}

.animate-title-1 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.animate-title-2 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.animate-title-3 {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.7s;
  opacity: 0;
}

.animate-banner {
  animation: slideInUp 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.animate-banner-text {
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.fade-out {
  animation: fadeOut 0.8s ease-out forwards;
  animation-delay: 0s;
}

.bgd.fade-out {
  animation: bgdFadeOut 0.8s ease-out forwards;
  animation-delay: 0s;
}

@media (max-width: 600px) {
  .box { margin: 12px; }
  .bgd {
    font-size: 58px;
    margin-top: 40px;
    opacity: 0.12;
    text-align: right;
  }
  .fg { margin-top: 100px; }
  .title {
    font-size: 92px;
    line-height: 1.5;
    flex-direction: column;
    align-items: flex-end;
  }
  .title span { display: inline-block; margin-right: 6px; }
  .banner {
    width: 100%;
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
    align-items: flex-end;
    border-radius: 10px;
    height: 45vh;
    object-fit: cover;
    object-position: right;
  }
  .banner div {
    font-size: 16px;
    margin: 12px;
    width: 100%;
  }
}

@media (max-width: 360px) {
  .bgd { font-size: 36px; margin-top: 24px; }
  .title { font-size: 26px; }
  .banner { aspect-ratio: 4/3; }
  .banner div { font-size: 14px; margin: 10px; }
}
</style>
