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
            style={styles.slide}
        >
            <Text style={styles.text}>{item.title}</Text>
        </Image>
    )
    return (
        <Swiper
            height={200}
            paginationStyle={{ bottom: 5 }}
            dotColor="#fff"
            autoplay
        >
            {item}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: 200,
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

export default SwiperC
