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
    return get(`https://news-at.zhihu.com/api/4/theme/${id}`)
}

export {
    getTypeList,
    getLastNews,
    getBeforeNews,
    getThemeNews
}
