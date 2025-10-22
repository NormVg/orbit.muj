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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

@media (max-width: 600px) {
  .box { margin: 12px; }
  .bgd {
    font-size: calc(92px / 1.618);
    margin-top: 40px;
    opacity: 0.12;
    text-align: left;
  }
  .fg { margin-top: 100px; }
  .title {
    font-size: 92px;
    line-height: 1.5;
    flex-direction: column;
    align-items: flex-start;
  }
  .title span {
    display: inline-block;
     margin-right: 6px;

   }
  .banner {
    width: 100%;
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
    align-items: flex-end;
    border-radius: 10px;
    height: 45vh;
    object-fit: cover;
    object-position: left;
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
