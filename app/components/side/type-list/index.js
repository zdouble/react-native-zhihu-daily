import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const Home = () => (
    <View style={[styles.homeContainer, styles.listStyle]}>
        <Image style={styles.homeImage} source={require('../../../assets/images/home.png')} />
        <Text style={[styles.fontStyle, styles.homeText]}>首页</Text>
    </View>
)

const List = () => (
    <View style={styles.listStyle}>
        <Text style={styles.fontStyle}>dasfas</Text>
    </View>
)

class TypeList extends Component {
    render() {
        return (
            <View>
                <Home />
                <List />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center'
    },
    fontStyle: {
        fontSize: 12
    },
    homeContainer: {
        paddingLeft: 10
    },
    homeImage: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    homeText: {
        color: '#00a2ed'
    }
})

export default TypeList
