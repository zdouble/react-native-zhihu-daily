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

export {
    getTypeList,
    getLastNews,
    getBeforeNews
}
