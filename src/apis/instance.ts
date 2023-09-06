import axios from 'axios'

const BASE_URL = 'https://json-server-6gjfchfpb-wanted-team7.vercel.app/'

const axiosInstance = axios.create({ baseURL: BASE_URL })

axiosInstance.interceptors.request.use((config) => {
  /** @description API 호출될 때마다 console.info 출력*/
  console.info('calling api')
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    /** @description 200대 응답이라면 이 콜백이 실행됨*/
    return response
  },
  (error) => {
    /** @description 200대 응답이 아니라면 이 콜백이 실행됨*/
    console.error(error)
    return Promise.reject(error)
  }
)

export interface QueryParam {
  [key: string]: string
  q: string
}

const instance = {
  get: <T>(url: string, param: QueryParam) =>
    axiosInstance.get<T>(url, {
      params: param,
    }),
}

export { instance }
