import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'

const SwiperC = ({ data }) => {
    const item = data.map(item =>
        <Image
            source={{ uri: item.image }}
            key={item}
            style={styles.slide1}
        >
            <Text style={styles.text}>{item.title}</Text>
        </Image>
    )
    return (
        <Swiper
            loop={false}
            height={200}
            paginationStyle={{bottom: 5}}
            dotColor="#fff"
        >
            {item}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: 200
    },
    text: {
        color: '#fff',
        fontSize: 16
    }
})

export default SwiperC
