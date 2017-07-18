import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const User = () => (
    <View>
        <Image />
        <Text>请登录</Text>
    </View>
)

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
