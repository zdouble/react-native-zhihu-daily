import React, { PropTypes } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ViewPropTypes } from 'react-native'

const Loading = ({ color, size, text, style }) => {
    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator color={color} size={size} />
            <Text>{text}</Text>
        </View>
    )
}

Loading.defaultProps = {
    color: '#3e9ce9',
    text: '数据加载中',
    style: { flex: 1 }
}

Loading.PropTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    size: ActivityIndicator.propTypes.style,
    style: ViewPropTypes.style
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading
