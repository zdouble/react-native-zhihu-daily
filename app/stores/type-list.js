import { observable, action, runInAction } from 'mobx'
import { getTypeList } from '../api'
class TypeList {
    @observable current = '首页'
    @observable data = []

    @action selectType(type) {
        this.current = type
    }

    @action getTypeListData = async() => {
        let data = await getTypeList()
        runInAction(() => {
            this.data = data.others
        })
    }

    // @action getTypeListData() {
    //     getTypeList().then(action((res) => {
    //         console.log(res)
    //     }))
    // }
}

export default new TypeList()
