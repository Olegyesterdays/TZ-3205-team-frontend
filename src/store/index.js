import { createStore } from 'vuex'

import { mainModule } from '@/store/modules/main-module.js'

const store = createStore({
  modules: {
    mainModule
  }
})

export default store
