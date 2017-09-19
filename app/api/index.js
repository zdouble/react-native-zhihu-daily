import { get } from '../axios'

const getTypeList = () => {
    return get('/4/themes')
}

const getLastNews = () => {
    return get('/4/news/latest')
}

const getBeforeNews = (date) => {
    return get(`/4/news/before/${date}`)
}

const getThemeNews = (id) => {
    return get(`/4/theme/${id}`)
}

const getNewsContent = (id) => {
    console.log(id)
    return get(`/4/news/${id}`)
}

export {
    getTypeList,
    getLastNews,
    getBeforeNews,
    getThemeNews,
    getNewsContent
}
