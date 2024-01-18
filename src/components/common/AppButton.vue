<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.button {
  @include button();
}
</style>
