import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import User from './user.js'
import Other from './other.js'

const Header = () => (
    <View style={styles.container}>
        <User />
        <Other />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#00a3ea',
        justifyContent: 'space-between'
    }
})

export default Header
