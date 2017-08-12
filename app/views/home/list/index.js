import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Item from './item.js'

const Header = ({ date }) => (
    <View style={styles.headerStyle}>
        <Text>{date}</Text>
    </View>
)

const styles = StyleSheet.create({
    headerStyle: {
        paddingLeft: 10,
        marginBottom: 10
    }
})

class List extends Component {
    render() {
        let { date, data } = this.props
        let list = data.map(data => <Item key={data.id} {...data} />)
        return (
            <View>
                <Header date={date} />
                {list}
            </View>
        )
    }
}

export default List
