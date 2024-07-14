import api from '@/services/api.js'

export const mainModule = {
  state: {
    email: '',
    number: '',
    notFound: true,

    users: []
  },

  getters: {
    getEmail(state) {
      return state.email
    },

    getNumber(state) {
      return state.number
    },

    getNotFound(state) {
      return state.notFound
    },

    getUsers(state) {
      return state.users
    }
  },

  mutations: {
    setEmail(state, { email }) {
      state.email = email
    },

    setNumber(state, { number }) {
      state.number = number.replace(/-/g, '')
    },

    // setNumber(state, { number }) {
    //   state.number = number
    // },

    setNotFound(state, { status }) {
      state.notFound = status
    },

    setUsers(state, { users }) {
      state.users = users
    },

    resetUsers(state) {
      state.users = []
    },

    resetData(state) {
      state.email = ''
      state.number = ''
      state.notFound = true
      state.users = []
    }
  },

  actions: {
    userSearch({ commit, getters }) {
      commit('resetUsers')

      const email = getters['getEmail']
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        console.error('Некорректный адрес электронной почты')
        return
      }

      const number = getters['getNumber']

      api
        .get('/byEmail', {
          params: { email, number }
        })
        .then(response => {
          if (response.data.length === 0) {
            commit('setNotFound', { status: false })
          } else {
            commit('setNotFound', { status: true })
            commit('setUsers', { users: response.data })
          }
        })
        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
