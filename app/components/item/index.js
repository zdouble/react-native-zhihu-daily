import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const Item = ({ title, images }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrap} activeOpacity={1}>
            <View style={styles.textContainer}>
                <Text numberOfLines={3}>{title}</Text>
            </View>
            {
                images && <Image source={{ uri: images[0] }} style={styles.imageStyle} />
            }

        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginBottom: 10
    },
    wrap: {
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 5
    },
    textContainer: {
        flex: 1,
        paddingRight: 10
    },
    imageStyle: {
        width: 60,
        height: 60
    }
})

export default Item
