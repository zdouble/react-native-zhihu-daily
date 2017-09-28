import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{ paddingLeft: 10 }}>
                    {this.props.renderLeft && this.props.renderLeft()}
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{this.props.title}</Text>
                    </View>
                </View>
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/images/message.png')}
                            style={{ width: 30, height: 30 }}
                        />
                        <Image
                            source={require('../../assets/images/abc_ic_menu_moreoverflow_mtrl_alpha.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#00acea',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Header
