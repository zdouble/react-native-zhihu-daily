import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Swiper from './../../components/swiper'
import { getLastNews } from '../../api'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        getLastNews().then(res => this.setState({ data: res }))
    }
    render() {
        // let navigation = this.props.navigation
        console.log(this.state.data)
        if (!this.state.data) {
            return <View></View>
        }
        return (
            <Swiper data={this.state.data.top_stories} />
        )
    }
}

const styles = StyleSheet.create({

})

export default Home
