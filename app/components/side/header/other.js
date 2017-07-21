import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

const Other = () => (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={require('../../../assets/images/collect.png')} />
            <Text style={styles.text}>我的收藏</Text>
        </View>
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={require('../../../assets/images/download.png')}/>
            <Text style={styles.text}>离线下载</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 12
    }
})

export default Other
