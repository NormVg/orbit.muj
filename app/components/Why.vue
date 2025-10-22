<template>
  <div class="box why">
    <div class="bgd">WHY ??</div>

    <div class="fg">
      <div class="title">
        <span>GROW,</span> <span> CONNECT,</span> <span>EVOLVE.</span>
      </div>
      <div class="banner">
        <div>

          Orbit.MUJ is built on three core ideas — Build. Connect. Evolve.It’s a
          space where initiative meets collaboration. Members turn ideas into
          action, learn from each other, and grow together. Orbit isn’t about
          status or noise — it’s about progress, clarity, and movement toward
          what’s next.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>

.box{
  margin: 20px;
}

.bgd{
  opacity: 0.25;
  font-size: 150px;
  font-family: var(--font1);
  text-align: right;
  margin-top: 100px;
}

.fg{
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.title{
  font-size: 100px;
  font-family: var(--font1);
}

.banner{
  background-image: url("~/assets/why-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1200/570;
  width: 70%;
  color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.banner div{
  font-size: 22px;
  margin: 30px;
  width: 70%;
  /* border: 1px solid salmon; */
}
</style>
