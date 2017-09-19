import React, { Component } from 'react'
import { WebView, View } from 'react-native'
import Loading from '../../components/loading'
import Header from '../../components/header'
import { getNewsContent } from '../../api'

class WebPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    async componentDidMount() {
        console.log(this.props.navigation)
        let data = await getNewsContent(this.props.navigation.state.params.id)
        console.log(data)
        this.setState({
            data
        })
    }
    render() {
        if (!this.state.data) {
            return <Loading/>
        }
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="${this.state.data.css[0]}" />
        </head>
        <body>
            ${this.state.data.body}
        </body>
        </html>`
        return (
            <View style={{flex: 1}}>
                <Header title=""/>
                <WebView
                    style={{flex: 1}}
                    source={{ html: html }}
                    startInLoadingState
                    renderLoading={() => <Loading size="large" />}
                />
            </View>
        )
    }
}

export default WebPage
