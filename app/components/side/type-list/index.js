import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { getTypeList } from '../../../api'

const Home = ({ active, handleClick }) => (
    <TouchableOpacity
        style={[styles.homeContainer, styles.listStyle, active === '首页' && styles.active]}
        onPress={() => handleClick('首页')}
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
        style={[styles.listStyle, styles.typeListStyle, active === name && styles.active]}
        onPress={() => handleClick(name)}
        activeOpacity={1}
    >
        <Text style={styles.fontStyle}>{name}</Text>
    </TouchableOpacity>
)

class TypeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeList: [],
            active: '首页'
        }
    }
    componentDidMount() {
        getTypeList().then(res => this.setState({ typeList: res.others }))
        this.props.navigation.navigate('Home', { active: '首页' })
    }
    renderList() {
        if (!this.state.typeList.length) {
            return null
        }

        return this.state.typeList.map(item => (
            <List
                key={item.id}
                id={item.id}
                name={item.name}
                active={this.state.active}
                handleClick={this.handleClick}
            />
        ))
    }
    handleClick = (name) => {
        this.setState({ active: name })
        this.props.navigation.navigate('Home', { active: name })
    }
    render() {
        return (
            <View>
                <Home
                    active={this.state.active}
                    handleClick={this.handleClick}
                />
                {this.renderList()}
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
