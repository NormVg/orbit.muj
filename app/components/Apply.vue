<template>
  <div class="box">
    <img src="~/assets/apply-bg.png" alt="Background" class="bg-image">

    <div class="content">
      <div class="l1">BELONG "EXCLUSIVE"</div>
      <a href="https://forms.gle/XcWMhkwzNNoyEcFc8" target="_blank" rel="noopener noreferrer" class="apply-btn">APPLY NOW</a>
      <div class="l2">WELCOME TO ORBIT</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
  font-size: 125px;
  font-family: var(--font1);
}

.l2 {
  font-size: 125px;
  font-family: var(--font1);
  letter-spacing: 15%;
}
</style>
