<template>
  <div class="wrapper">
    <header class="header">
      <HeaderLogo />

      <headerLocales />
    </header>
  </div>
</template>

<script setup>
import HeaderLogo from '@/components/header/header-logo.vue'
import headerLocales from '@/components/header/header-locales.vue'
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  top: 0;
  height: 96px;
  width: 100%;
  z-index: 900;

  .header {
    z-index: 1000;
    box-shadow: 0 48px 60px var(--main-color);
    height: 56px;
    display: flex;
    justify-content: space-between;
    background-color: var(--additional-color);
    border-radius: 20px;
    border-top: 4px solid var(--main-color);
    margin: 0 4px 4px 4px;
    padding: 8px;
    box-sizing: border-box;
  }
}
</style>
