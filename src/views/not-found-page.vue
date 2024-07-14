<template>
  <div class="container">
    <HeaderPage />

    <DescriptionPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/not-found-page/header-page.vue'
import DescriptionPage from '@/components/not-found-page/description-page.vue'
</script>

<style scoped lang="scss">
.container {
  width: 900px;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
  }
}
</style>
