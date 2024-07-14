import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.css'
import '@/styles/color-palette.css'
import router from './router'
import store from '@/store'
import VueTheMask from 'vue-the-mask'
import { createI18n } from 'vue-i18n'
import translation_RU from '@/locales/ru/translation.json'
import translation_EN from '@/locales/en/translation.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: translation_RU,
    en: translation_EN
  }
})

const app = createApp(App)

app.use(router).use(store).use(i18n).use(VueTheMask).mount('#app')
