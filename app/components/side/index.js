import React, { Component } from 'react'
import {
    ScrollView
} from 'react-native'
import Header from './header'
import TypeList from './type-list'

class Side extends Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <TypeList {...this.props} />
            </ScrollView>
        )
    }
}

export default Side
