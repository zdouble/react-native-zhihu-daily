import React, { Component } from 'react'
import {
    View
} from 'react-native'
import Header from './header'
import TypeList from './type-list'

class Side extends Component {
    render() {
        return (
            <View>
                <Header />
                <TypeList />
            </View>
        )
    }
}

export default Side
