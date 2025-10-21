<template>
  <div class="hero">
    <div class="hero-head">
      <div class="head-main">

        <div class="head-name" >ORBIT.MUJ</div>
        <img :src="Logo" alt="" class="head-logo">
      </div>
      <div class="head-nav">
        <div class="nav-item">APPLY</div><span>•</span>
        <div class="nav-item">WHY</div><span>•</span>
        <div class="nav-item">FOR</div><span>•</span>
        <div class="nav-item">CONTACT</div><span>•</span>
        <div class="nav-item">POLICY</div>

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
</script>

<style scoped>
.hero{

  /*  */
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
