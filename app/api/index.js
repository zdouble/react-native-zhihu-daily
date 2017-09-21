import { get } from '../axios'

const getTypeList = () => get('/4/themes')

const getLastNews = () => get('/4/news/latest')

const getBeforeNews = (date) => get(`/4/news/before/${date}`)

const getThemeNews = (id) => get(`/4/theme/${id}`)

const getNewsContent = (id) => get(`/4/news/${id}`)

export {
    getTypeList,
    getLastNews,
    getBeforeNews,
    getThemeNews,
    getNewsContent
}
