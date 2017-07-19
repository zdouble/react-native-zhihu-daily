import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import User from './user.js'

const Header = () => (
    <View style={styles.container}>
        <User />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#00a3ea'
    }
})

export default Header
