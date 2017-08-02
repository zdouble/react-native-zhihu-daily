import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#00acea'
    }
})

export default Header
