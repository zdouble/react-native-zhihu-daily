import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    RefreshControl
} from 'react-native'
import Header from '../../components/header'
import Swiper from './../../components/swiper'
import Loading from '../../components/loading'
import moment from 'moment'
import 'moment/locale/zh-cn'
import {observer, inject} from 'mobx-react/native'
import Item from './list/item.js'

let dateNow = new Date()

@inject('articleList', 'typeList')
@observer
class Home extends Component {
    componentDidMount() {
        this.props.articleList.fetchData()
    }

    _onRefresh = () => {
        this.props.articleList.fetchData()
    }

    _renderSectionHeader({section}) {
        let date = moment(section.date).format('MM月DD日 dddd')
        date = section.index === 0 ? '今日热闻' : date
        return (
            <View style={{paddingLeft: 10, marginBottom: 10}}>
                <Text>{date}</Text>
            </View>

        )
    }

    _renderItem({item}) {
        return (
            <Item {...item} />
        )
    }

    _onEndReached = () => {
        let articleList = this.props.articleList
        let date = dateNow.setDate(dateNow.getDate() - articleList.page)
        date = moment(date).format('YYYYMMDD')
        articleList.getBeforeNews(date)
    }

    _keyExtractor = (item, index) => {
        return item.id
    }

    render() {
        let {articleList, navigation} = this.props
        let data = articleList.data
        if (!data) {
            return <Loading/>
        }
        let topStories = data[0].top_stories

        let sectionsData = data.map((item, i) => {
            console.log(item.stories.length)
            return {date: item.date, data: [...item.stories], index: i}
        })
        return (
            <View style={styles.container}>
                <Header
                    openDrawer={() => navigation.navigate('DrawerOpen')}
                    title="首页"
                />
                <SectionList
                    sections={sectionsData}
                    extraData={this.props}
                    ListHeaderComponent={() => <Swiper autoPlay style={{marginBottom: 10}} data={topStories} />}
                    renderSectionHeader={this._renderSectionHeader}
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
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() => <Loading/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home
