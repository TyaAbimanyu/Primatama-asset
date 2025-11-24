import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const prefix = process.env.SESSION_PREFIX

const api = axios.create({
  baseURL: process.env.API,
  transformRequest: (data, headers) => {
    if (typeof localStorage.getItem(prefix + 'token') !== 'undefined' && localStorage.getItem(prefix + 'token') !== null && localStorage.getItem(prefix + 'token') !== '') {
      headers.Authorization = 'Bearer ' + localStorage.getItem(prefix + 'token')
    } else {
      headers.Authorization = null
    }

    if (headers.Accept === '*/*') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
      const objFormData = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')

      return objFormData
    } else {
      const objFormData = new FormData()

      for (const index in data) {
        if (Array.isArray(data[index])) {
          for (const indexArray in data[index]) {
            objFormData.append(index + '[]', data[index][indexArray])
          }
        } else {
          objFormData.append(index, data[index])
        }
      }
      return objFormData
    }
  }
})

api.interceptors.request.use((config) => {
  if (config.method === 'put' || config.method === 'patch') {
    config.headers.Accept = '*/*'
  }
  return config
})

const apiAlt = axios.create({
  baseURL: process.env.API,
  transformRequest: [
    (data, headers) => {
      headers.Authorization = 'Bearer ' + localStorage.getItem(prefix + 'token')
      headers['Content-Type'] = 'application/json'
      return data
    }
  ]
})

api.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  // return Promise.reject(error.response.data.messages)
  return Promise.reject(error?.response?.data || error)
})

apiAlt.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error.response.data.messages)
  }
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$apiAlt = apiAlt
})

export { api, apiAlt }
