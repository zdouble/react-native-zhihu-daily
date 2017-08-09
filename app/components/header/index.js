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
                <View style={{ paddingLeft: 10 }}>
                    <TouchableOpacity
                        onPress={this.props.openDrawer}
                        style={{ marginTop: -10 }}
                    >
                        <Image
                            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
                            style={{ width: 36, height: 10 }}
                        />
                        <Image
                            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
                            style={{ width: 36, height: 10 }}
                        />
                        <Image
                            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
                            style={{ width: 36, height: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>首页</Text>
                    </View>
                </View>
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/images/message.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Image
                            source={require('../../assets/images/abc_ic_menu_moreoverflow_mtrl_alpha.png')}
                            style={{ width: 40, height: 40 }}
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
