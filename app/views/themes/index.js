import React, { Component } from 'react'
import { View, Image, Text, FlatList, RefreshControl, StyleSheet } from 'react-native'
import Header from '../../components/header'
import { observer, inject } from 'mobx-react/native'
import { screenSize } from '../../utils'
import Loading from '../../components/loading'
import Item from '../../components/item'
import Edit from './edit'
const scrrenWidth = screenSize().width

@inject('articleList', 'typeList')
@observer
class Themes extends Component {
    _keyExtractor = (item) => item.id

    _renderItem = ({item}) => <Item key={item.id} {...item} />

    _onEndReached() {}

    _renderSectionHeader({navigation, typeList, articleList}) {
        return (
            <View>
                <Header
                    openDrawer={() => navigation.navigate('DrawerOpen')}
                    title={typeList.currentName} />
                <View style={{ height: 200, position: 'relative' }}>
                    <Image source={{ uri: articleList.data.image }} style={{ width: scrrenWidth, flex: 1 }} />
                    <Text style={styles.text}>{articleList.data.description}</Text>
                </View>
                <Edit editors={articleList.data.editors}/>
            </View>
        )
    }
    render() {
        let { articleList } = this.props
        let { data } = articleList
        console.log(data)
        if (!data) {
            return <Loading />
        }
        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    data={data.stories}
                    extraData={this.props}
                    ListHeaderComponent={() => this._renderSectionHeader(this.props)}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onEndReached={() => this._onEndReached()}
                    refreshControl={
                        <RefreshControl
                            refreshing={articleList.refreshing}
                            onRefresh={this._onRefresh}
                            colors={['#3e9ce9']}
                        />
                    }
                    onViewableItemsChanged={this.itemChange}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() => <Loading/>}
                />
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
