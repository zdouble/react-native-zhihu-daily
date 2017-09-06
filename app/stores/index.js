import { observable, action, computed } from 'mobx'
import typeList from './type-list.js'
class Test {
    @observable num = 0

    @action add() {
        this.num++
    }
}

const stores = {
    test: new Test(),
    typeList
}

export default stores
