<template>
  <div class="content-pages">
    <Header />
    <router-view class="content" />
  </div>
</template>

<script setup>
import Header from '@/components/header/header.vue'
</script>

<style scoped lang="scss">
.content-pages {
  width: 100%;
  height: 100vh;
  display: flex;

  .content {
    margin-top: 64px;
    margin: auto;
  }
}
</style>
