import { get } from '../axios'

const getTypeList = () => {
    return get('/4/themes')
}

const getLastNews = () => {
    return get('/4/news/latest')
}

export {
    getTypeList,
    getLastNews
}
