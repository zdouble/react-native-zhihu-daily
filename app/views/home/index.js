import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SectionList,
    RefreshControl,
    TouchableOpacity
} from 'react-native'
import Header from '../../components/header'
import Swiper from './../../components/swiper'
import Loading from '../../components/loading'
import moment from 'moment'
import 'moment/locale/zh-cn'
import {observer, inject} from 'mobx-react/native'
import Item from '../../components/item'
import Hanburger from '../../components/hanburger'
import { screenSize } from '../../utils'

const screenWidth = screenSize().width

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

    _renderItem = ({item}) => <Item navigate={this.props.navigation.navigate} {...item} />

    _onEndReached = () => {
        let articleList = this.props.articleList
        let date = dateNow.setDate(dateNow.getDate() - articleList.page)
        date = moment(date).format('YYYYMMDD')
        articleList.getBeforeNews(date)
    }

    _keyExtractor = (item) => item.id

    itemChange = ({viewableItems}) => {
        if (this.props.typeList.flag) {
            this.props.typeList.changeHomeTitle(viewableItems[0].section.date)
        }
    }

    _onScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 200) {
            this.props.typeList.changeHomeTitle(Date.now())
            this.props.typeList.changeFlag(true)
        } else {
            this.props.typeList.changeHomeTitle('首页')
            this.props.typeList.changeFlag(false)
        }
    }

    swRenderItem = (item, index) => {
        return (
            <TouchableOpacity activeOpacity={1} key={item.id} onPress={() => this.props.navigation.navigate('WebPage', {id: item.id})}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.slide}
                >
                    <Text style={styles.text}>{item.title}</Text>
                </Image>
            </TouchableOpacity>

        )
    }

    render() {
        let {articleList, navigation, typeList} = this.props
        let data = articleList.data
        if ((data && !data.length) || !data) {
            return <Loading/>
        }
        let topStories = data[0].top_stories

        let sectionsData = data.map((item, i) => {
            return {date: item.date, data: [...item.stories], index: i}
        })

        let title = typeList.homeTitle ? typeList.homeTitle : typeList.currentName
        if (typeList.flag) {
            let x = moment(typeList.homeTitle).format('MM月DD日 dddd')
            if (moment(Date.now()).format('MM月DD日 dddd') === x) {
                title = '今日热闻'
            } else {
                title = x
            }
        }

        return (
            <View style={styles.container}>
                <Header
                    title={title}
                    renderLeft={() => <Hanburger navigation={navigation}/>}
                />
                <SectionList
                    sections={sectionsData}
                    extraData={this.props}
                    ListHeaderComponent={() => <Swiper renderItem={this.swRenderItem} autoPlay style={{marginBottom: 10}} data={topStories} />}
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onEndReached={() => this._onEndReached()}
                    onScroll={(e) => this._onScroll(e)}
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
    container: {
        flex: 1
    },
    slide: {
        justifyContent: 'center',
        width: screenWidth,
        flex: 1,
        paddingHorizontal: 10,
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute',
        bottom: 20,
        paddingLeft: 10
    }
})

export default Home
