import { observable, action, runInAction } from 'mobx'
import { getTypeList } from '../api'
class TypeList {
    @observable currentId = 0
    @observable currentName = '首页'
    @observable homeTitle = ''
    @observable flag = false
    @observable data = []

    @action selectType(id, name) {
        this.homeTitle = ''
        this.currentId = id
        this.currentName = name
        this.flag = false
    }

    @action getTypeListData = async() => {
        let data = await getTypeList()
        runInAction(() => {
            this.data = data.others
        })
    }

    @action changeHomeTitle(title) {
        this.homeTitle = title
    }

    @action changeFlag(flag) {
        this.flag = flag
    }

    // @action getTypeListData() {
    //     getTypeList().then(action((res) => {
    //         console.log(res)
    //     }))
    // }
}

export default new TypeList()
