import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    FlatList
} from 'react-native'
import Header from '../../components/header'
import Swiper from './../../components/swiper'
import List from './list'
import { getLastNews } from '../../api'
import moment from 'moment'
import 'moment/locale/zh-cn'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getLastNews().then(res => {
            this.setState({ data: [res] })
        })
    }

    _renderItem({ item, index }) {
        let date = moment(item.date).format('MM月DD日 dddd')
        return (
            <List date={index === 0 ? '今日热闻' : date} data={item.stories} />
        )
    }

    _keyExtractor = (item, index) => item.date

    render() {
        let data = this.state.data
        if (!data.length) {
            return <View><Text>fasfas</Text></View>
        }
        let { top_stories: topStories } = data[0]
        return (
            <View>
                <Header/>
                <FlatList
                    data={data}
                    ListHeaderComponent={() => <Swiper data={topStories} />}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Home
