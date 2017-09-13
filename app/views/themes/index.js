import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Header from '../../components/header'
import { observer, inject } from 'mobx-react/native'
import { screenSize } from '../../utils'
import Loading from '../../components/loading'
const scrrenWidth = screenSize().width

@inject('articleList', 'typeList')
@observer
class Themes extends Component {
    render() {
        let {typeList, navigation, articleList} = this.props
        let {data} = articleList
        console.log(data)
        if (!data) {
            return <Loading/>
        }
        return (
            <View style={{flex: 1}}>
                <Header
                    openDrawer={() => navigation.navigate('DrawerOpen')}
                    title={typeList.currentName} />
                <View style={{height: 200}}>
                    <Image source={{uri: data.image}} style={{width: scrrenWidth, flex: 1}} />
                </View>
            </View>
        )
    }
}

export default Themes
