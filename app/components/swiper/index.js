import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native'

const screenWidth = Dimensions.get('window').width
let timer = null
let swiperItemWidth = 0
let swiperItemLength = 0

class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0
        }
    }
    _renderPage(data) {
        return data.map(item => (
            <Image
                source={{ uri: item.image }}
                style={styles.slide}
                key={item.id}
            >
                <Text style={styles.text}>{item.title}</Text>
            </Image>
        ))
    }

    _renderDot() {
        let dotList = []
        for (let i = 0; i < swiperItemLength; i++) {
            dotList.push((
                <View key={i} style={[styles.dot, this.state.page === i && styles.dotActive]}></View>
            ))
        }
        return (
            <View style={styles.dotWrap}>
                {dotList}
            </View>
        )
    }
    _onMomentumScrollEnd = (e) => {
        let { layoutMeasurement, contentSize, contentOffset } = e.nativeEvent

        this.setState({
            page: contentOffset.x / contentSize.width * (contentSize.width / layoutMeasurement.width)
        })
    }
    autoPlay() {
        timer = setInterval(() => {
            this.setState({
                page: ++this.state.page % swiperItemLength
            }, () => {
                this.swiper.scrollTo({x: (this.state.page % swiperItemLength) * swiperItemWidth, animated: true})
            })
        }, 2000)
    }

    componentWillMount() {
        swiperItemLength = this.props.data.length
    }
    componentDidMount() {
        if (this.props.autoPlay) {
            this.autoPlay()
        }
    }
    _onContentSizeChange = (contentWidth, contentHeight) => {
        swiperItemWidth = contentWidth / this.props.data.length
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    _onScrollBeginDrag = () => {
        if (this.props.autoPlay) {
            clearInterval(timer)
        }
    }

    _onScrollEndDrag = () => {
        if (this.props.autoPlay) {
            this.autoPlay()
        }
    }

    render() {
        let item = this._renderPage(this.props.data)
        return (
            <View style={[this.props.style, styles.wrapper]}>
                <ScrollView
                    onContentSizeChange={this._onContentSizeChange}
                    ref={ref => { this.swiper = ref }}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                >
                    {item}
                </ScrollView>
                {this._renderDot()}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
        position: 'relative'
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
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 4,
        marginRight: 3
    },
    dotActive: {
        backgroundColor: '#fff'
    },
    dotWrap: {
        position: 'absolute',
        height: 8,
        left: 0,
        right: 0,
        bottom: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Swiper
