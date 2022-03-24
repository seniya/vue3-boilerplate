import axios, { AxiosInstance } from 'axios'

export function setInterceptors (instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use(
    function (config) {
      if (config.headers) {
        const token = localStorage.getItem('OSP_TOKEN') || null
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      // console.log(`${response.config.url}`, response);
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance
}

const apiRootPath = '/api'

function createInstance () {
  const instance: AxiosInstance = axios.create({
    timeout: 10 * 1000,
    // headers: { 'Content-Type': ContentTypeEnum.JSON },
    baseURL: apiRootPath
  })
  return setInterceptors(instance)
}

export const axiosInstance = createInstance()
