<template>
  <div class="footer">

    <div class="footer-link">

      <a href="https://www.linkedin.com/in/vishnu-gupta-b5b634254/" target="_blank" rel="noopener noreferrer" class="nav-item">LINKEDIN</a><span>•</span>
      <a href="https://twitter.com/TheNormVg" target="_blank" rel="noopener noreferrer" class="nav-item">TWITTER / X</a><span>•</span>
      <a href="mailto:thealphaones.work@gmail.com" class="nav-item">EMAIL</a>

    </div>

    <div class="l1"></div>
    <div class="l2"></div>
    <div class="l3"></div>
    <div class="l4"></div>
    <div class="l5"></div>
    <div class="l6">POWERED BY TheAlphaOnes</div>

  </div>
</template>

<script lang="ts" setup>



</script>

<style scoped>

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

}
.l2{
  height: calc(60px / (1.618*4));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 2px;

}
.l3{
  height: calc(60px / (1.618*3));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;

  border-radius: 2.5px;

}

.l4{
  height: calc(60px / (1.618*2));
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 3px;

}

.l5{
  height: calc(60px / 1.618);
  width: calc(100% - 40px);
  background-color: black;
  margin-bottom: 25px;
  border-radius: 5px;

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
}


</style>
