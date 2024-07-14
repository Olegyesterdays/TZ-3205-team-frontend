<template>
  <button class="locales" @click="toggleLanguage">
    {{ locale }}
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}
</script>

<style scoped lang="scss">
.locales {
  width: 36px;
  height: 36px;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  background-color: var(--main-color);
  border-radius: 12px;
  border: 0;
  color: var(--additional-color);
}
</style>
