import axios from 'axios'

export const api = axios

api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response && ([401, 403, 419, 503].includes(error.response.status))) {
    window.location.replace(`/error/${error.response.status}`)

    return false
  } else {
    return Promise.reject(error)
  }
})
