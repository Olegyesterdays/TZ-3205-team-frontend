<template>
  <div class="main-page">
    <FormUser />

    <ListUsers />
  </div>
</template>

<script setup>
import FormUser from '@/components/main-page/form-user.vue'
import ListUsers from '@/components/main-page/list-users.vue'
</script>

<style scoped lang="scss">
.main-page {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
