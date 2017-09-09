import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {observer, inject} from 'mobx-react/native'

const Home = ({ active, handleClick }) => (
    <TouchableOpacity
        style={[styles.homeContainer, styles.listStyle, active === 0 && styles.active]}
        onPress={() => handleClick(0)}
        activeOpacity={1}
    >
        <Image
            style={styles.homeImage}
            source={require('../../../assets/images/home.png')}
        />
        <Text style={[styles.fontStyle, styles.homeText]}>首页</Text>
    </TouchableOpacity>
)

const List = ({ id, name, active, handleClick }) => (
    <TouchableOpacity
        style={[styles.listStyle, styles.typeListStyle, active === id && styles.active]}
        onPress={() => handleClick(id)}
        activeOpacity={1}
    >
        <Text style={styles.fontStyle}>{name}</Text>
    </TouchableOpacity>
)
@inject('typeList', 'articleList')
@observer
class TypeList extends Component {
    componentDidMount() {
        this.props.typeList.getTypeListData()
    }
    renderList(props) {
        let data = props.typeList.data
        if (!data.length) {
            return null
        }

        return data.map(item => (
            <List
                key={item.id}
                id={item.id}
                name={item.name}
                active={props.typeList.current}
                handleClick={this.handleClick}
            />
        ))
    }
    handleClick = (id) => {
        let props = this.props
        props.typeList.selectType(id)
        props.navigation.navigate('DrawerClose')
        props.articleList.fetchData(id)
    }
    render() {
        let props = this.props
        return (
            <View>
                <Home
                    active={props.typeList.current}
                    handleClick={this.handleClick}
                />
                {this.renderList(props)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    fontStyle: {
        fontSize: 12
    },
    homeContainer: {
        paddingLeft: 10
    },
    homeImage: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    homeText: {
        color: '#00a2ed'
    },
    typeListStyle: {
        paddingLeft: 20
    },
    active: {
        backgroundColor: '#eee'
    }
})

export default TypeList
