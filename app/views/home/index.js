import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl
} from 'react-native'
import Header from '../../components/header'
import Swiper from './../../components/swiper'
import List from './list'
import Loading from '../../components/loading'
import moment from 'moment'
import 'moment/locale/zh-cn'
import {observer, inject} from 'mobx-react/native'

let dateNow = new Date()

@inject('articleList')
@observer
class Home extends Component {
    componentDidMount() {
        this.props.articleList.fetchData()
    }

    _onRefresh = () => {
        this.props.articleList.fetchData()
    }

    _renderItem({ item, index }) {
        let date = moment(item.date).format('MM月DD日 dddd')
        console.log(item)
        return (
            <List date={index === 0 ? '今日热闻' : date} data={item.stories} />
        )
    }

    _onEndReached = () => {
        let articleList = this.props.articleList
        let date = dateNow.setDate(dateNow.getDate() - articleList.page)
        date = moment(date).format('YYYYMMDD')
        articleList.getBeforeNews(date)
    }

    _keyExtractor = (item, index) => item.date

    render() {
        let props = this.props
        let data = props.articleList.data
        if (!data.length) {
            return <View><Text></Text></View>
        }

        let { top_stories: topStories } = data[0]
        return (
            <View style={styles.container}>
                <Header
                    openDrawer={() => props.navigation.navigate('DrawerOpen')}
                    title="首页"
                />
                <FlatList
                    data={data}
                    ListHeaderComponent={() => <Swiper autoPlay style={{marginBottom: 10}} data={topStories} />}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onEndReached={() => this._onEndReached()}
                    refreshControl={
                        <RefreshControl
                            refreshing={props.articleList.refreshing}
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
