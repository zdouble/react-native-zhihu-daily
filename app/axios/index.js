import axios from 'axios'
import qs from 'qs'

const http = axios.create({
    baseURL: 'https://news-at.zhihu.com/api',
    timeout: 5000
})

http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

const get = (url, params = {}) => {
    return http.get(url, {
        params: params
    })
}

const post = (url, data = {}) => {
    return http.post(url, qs.stringify(data))
}

export default http

export {
    get,
    post
}
