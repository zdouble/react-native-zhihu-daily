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

class Swiper extends Component {
    _renderPage(data) {
        console.log(data)
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
    render() {
        let item = this._renderPage(this.props.data)
        return (
            <ScrollView
                contentContainerStyle={[this.props.style, styles.wrapper]}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {item}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        flex: 1,
        paddingHorizontal: 10,
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute',
        bottom: 20
    }
})

export default Swiper
