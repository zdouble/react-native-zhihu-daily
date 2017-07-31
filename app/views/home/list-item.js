import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

const Header = ({date}) => (
    <View>
        <Text>{date}</Text>
    </View>
)

const List = () => {
    return (
        <View>
            <Image />
            <Text></Text>
        </View>
    )
}

class ListItem extends Component {
    render() {
        let { date, data } = this.props
        return (
            <View>
                <Header date={date} />
                <List data={data} />
            </View>
        )
    }
}

export default ListItem
