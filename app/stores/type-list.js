import { observable, action, runInAction } from 'mobx'
import { getTypeList } from '../api'
class TypeList {
    @observable currentID = 0
    @observable currentName = ''
    @observable data = []

    @action selectType(id, name) {
        this.currentId = id
        this.currentName = name
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
