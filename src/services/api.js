import axios from 'axios'

const baseURL = 'http://localhost:4000/api/users'
// const baseURL = window.api.URL

const instance = axios.create({
  baseURL
})

export default instance
