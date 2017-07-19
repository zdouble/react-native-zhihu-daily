import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const User = () => (
    <View style={styles.container}>
        <Image source={require('../../../assets/images/comment_avatar.png')} style={styles.avatar} />
        <Text style={styles.text}>请登录</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 14
    }
})

export default User
