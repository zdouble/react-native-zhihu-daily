import React from 'react'
import {TouchableOpacity, Image, StyleSheet} from 'react-native'

const Hanburger = ({navigation}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('DrawerOpen')}
        style={{ justifyContent: 'center' }}
    >
        <Image
            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
            style={styles.image}
        />
        <Image
            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
            style={styles.image}
        />
        <Image
            source={require('../../assets/images/abc_textfield_search_activated_mtrl_alpha.9.png')}
            style={styles.image}
        />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 6
    }
})

export default Hanburger
