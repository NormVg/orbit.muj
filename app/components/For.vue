<template>
  <div class="box for">
    <div class="bgd">FOR ??</div>

    <div class="fg">
      <div class="title">
        <span>FOUNDER,</span> <span> TECHIE,</span> <span>CREATOR.</span>
      </div>
      <div class="banner">
        <div>

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

<script lang="ts" setup></script>


<style scoped>

.box{
  margin: 20px;
}

.bgd{
  opacity: 0.25;
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
}

.banner div{
  font-size: 22px;
  margin: 30px;
  width: 70%;
  text-align: right;
  /* border: 1px solid salmon; */
}
</style>
