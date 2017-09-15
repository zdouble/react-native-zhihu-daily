import { observable, action, runInAction } from 'mobx'
import { getLastNews, getBeforeNews, getThemeNews } from '../api'

class ArticleList {
    @observable data = null
    @observable page = 0
    @observable refreshing = false

    @action clear() {
        this.data = null
        this.page = 0
        this.refreshing = true
    }

    @action fetchData = async(id) => {
        let data = id ? await getThemeNews(id) : await getLastNews()
        runInAction(() => {
            this.data = id ? data : [data]
            this.refreshing = false
        })
    }

    @action getBeforeNews = async(date) => {
        let data = await getBeforeNews(date)
        runInAction(() => {
            this.data.push(data)
            this.page = ++this.page
        })
    }
}

export default new ArticleList()
