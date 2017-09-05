import { observable, action, computed } from 'mobx'
class Test {
    @observable num = 0

    @action add() {
        this.num++
    }
}

const stores = {
    test: new Test()
}

export default stores
