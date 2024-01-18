<template>
  <header class="header">
    
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: $md) {
    padding: 20px 40px;
  }

  @media (min-width: $lg) {
    padding: 20px 80px;
  }
}
</style>
