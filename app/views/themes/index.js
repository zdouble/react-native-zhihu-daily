import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Header from '../../components/header'
import { observer, inject } from 'mobx-react/native'
import { screenSize } from '../../utils'
import Loading from '../../components/loading'
import Edit from './edit'
const scrrenWidth = screenSize().width

@inject('articleList', 'typeList')
@observer
class Themes extends Component {
    render() {
        let { typeList, navigation, articleList } = this.props
        let { data } = articleList
        console.log(data)
        if (!data) {
            return <Loading />
        }
        return (
            <View style={{ flex: 1 }}>
                <Header
                    openDrawer={() => navigation.navigate('DrawerOpen')}
                    title={typeList.currentName} />
                <View style={{ height: 200, position: 'relative' }}>
                    <Image source={{ uri: data.image }} style={{ width: scrrenWidth, flex: 1 }} />
                    <Text style={styles.text}>{data.description}</Text>
                </View>
                <Edit editors={data.editors}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        bottom: 20,
        color: '#fff',
        paddingLeft: 10,
        fontSize: 16
    }
})

export default Themes
