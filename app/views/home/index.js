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
import { getLastNews, getBeforeNews } from '../../api'
import moment from 'moment'
import 'moment/locale/zh-cn'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 0,
            refreshing: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({page: 0, refreshing: true})
        getLastNews().then(res => {
            this.setState({ refreshing: false, data: [res] })
        })
    }

    _onRefresh = () => {
        this.fetchData()
    }

    _renderItem({ item, index }) {
        let date = moment(item.date).format('MM月DD日 dddd')
        return (
            <List date={index === 0 ? '今日热闻' : date} data={item.stories} />
        )
    }

    _onEndReached = () => {
        let date = new Date()
        let time = date.setDate(date.getDate() - this.state.page)
        time = moment(time).format('YYYYMMDD')
        getBeforeNews(time).then(res => {
            let data = [...this.state.data]
            data.push(res)
            this.setState({
                data: data,
                page: ++this.state.page
            })
        })
    }

    _keyExtractor = (item, index) => item.date

    render() {
        let data = this.state.data
        if (!data.length) {
            return <View><Text></Text></View>
        }
        let { top_stories: topStories } = data[0]
        return (
            <View style={styles.container}>
                <Header
                    openDrawer={() => this.props.navigation.navigate('DrawerOpen')}
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
                            refreshing={this.state.refreshing}
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
