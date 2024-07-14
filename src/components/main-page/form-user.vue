<template>
  <div class="login-box">
    <form @submit.prevent="submitForm">
      <div class="user-box">
        <input type="email" v-model="email" required />
        <label :class="{ active: email !== '' }">
          <span>{{ $t('main-page.form.email') }}</span>
          <span class="mdi mdi-email-outline" />
        </label>
      </div>
      <div class="user-box">
        <input type="text" v-model="number" v-mask="'##-##-##'" />
        <label :class="{ active: number !== '' }">
          <span>{{ $t('main-page.form.number') }}</span>
          <span class="mdi mdi-keyboard-outline" />
        </label>
      </div>

      <div class="buttons">
        <button class="button button-submit-form" @click="submitForm">
          <span>{{ $t('main-page.form.submit') }}</span>
          <span class="mdi mdi-magnify" />
        </button>

        <button
          v-if="email || number"
          class="button button-reset-data"
          @click="resetData"
        >
          <span class="mdi mdi-delete" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const email = computed({
  get: () => store.getters['mainModule/getEmail'],
  set: email => store.commit('mainModule/setEmail', { email })
})

const number = computed({
  get: () => store.getters['mainModule/getNumber'],
  set: number => store.commit('mainModule/setNumber', { number })
})

const submitForm = () => {
  store.dispatch('mainModule/userSearch')
}

const resetData = () => {
  store.commit('mainModule/resetData')
}
</script>

<style scoped>
.login-box {
  width: 500px;
  padding: 40px;
  background: var(--additional-color);
  box-sizing: border-box;
  box-shadow: 0 15px 25px var(--additional-color);
  border-radius: 10px;

  .user-box {
    position: relative;

    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }
  }
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;

  .mdi {
    margin-left: 4px;
  }
}

.login-box .user-box input:focus ~ label,
.login-box .user-box label.active {
  top: -20px;
  left: 0;
  color: var(--main-color);
  font-size: 12px;
}

.buttons {
  display: flex;
  justify-content: space-between;

  .button {
    height: 40px;
    width: 40px;
    margin-top: 40px;
    color: var(--main-color);
    background: var(--additional-color);
    border: 1px solid var(--main-color);
    cursor: pointer;
    font-size: 16px;
    border-radius: 12px;
  }

  .button-submit-form {
    width: auto;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;

    .mdi {
      margin-left: 8px;
    }
  }

  .button-reset-data {
    .mdi {
      font-size: 24px;
    }
  }
}
</style>
