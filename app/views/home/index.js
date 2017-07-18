import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

class Home extends Component {
    render() {
        let navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
                    <Text>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
})

export default Home
