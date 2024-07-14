<template>
  <div>
    <div class="list-users" v-if="notFound">
      <div
        class="user"
        v-for="({ email, number }, index) in users"
        :key="index"
        v-show="true"
      >
        <span class="ava mdi mdi-account-circle-outline" />
        <div class="user-data">
          <span class="email">
            {{ $t('main-page.users.email') }}: {{ email }}
          </span>
          <span>
            {{ $t('main-page.users.number') }}: {{ formatNumber(number) }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="error-404">
      <h2>{{ $t('main-page.not-found.header') }}</h2>
      <p>{{ $t('main-page.not-found.description') }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const users = computed(() => store.getters['mainModule/getUsers'])
const notFound = computed(() => store.getters['mainModule/getNotFound'])

const hasUsers = computed(() => users.value.length > 0)

const formatNumber = number => {
  const numberString = String(number)
  return numberString.replace(/(\d{2})(?=\d)/g, '$1-')
}
</script>

<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-users {
  .user {
    width: 500px;
    margin-top: 20px;
    padding: 20px;
    border: 2px solid var(--additional-color);
    box-shadow: 0 15px 25px var(--additional-color-v2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
    box-sizing: border-box;

    .ava {
      font-size: 40px;
      color: var(--additional-color);
      margin-right: 20px;
    }

    &-data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;

      .email {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.error-404 {
  margin-top: 20px;
  text-align: center;
  color: red;
  border: 2px solid var(--additional-color);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 15px 25px var(--additional-color-v2);
  animation: fadeIn 0.5s ease-in-out forwards;
}
</style>
