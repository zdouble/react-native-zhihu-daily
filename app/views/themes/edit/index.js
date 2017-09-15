import React, {Component} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class ImageList extends Component {
    render() {
        let images = this.props.editors.map(item => <Image key={item.id} source={{uri: item.avatar}} style={styles.image} />)
        return (
            <View style={{marginLeft: 10, flexDirection: 'row'}}>
                {images}
            </View>
        )
    }
}

const Edit = ({editors}) => (
    <View style={styles.container}>
        <Text>主编</Text>
        <ImageList editors={editors}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginVertical: 10
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginRight: 5
    }
})

export default Edit
