import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity>
                        <image />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>首页</Text>
                </View>
                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#00acea'
    }
})

export default Header
