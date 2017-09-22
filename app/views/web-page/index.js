import React, { Component } from 'react'
import { WebView, View, Image } from 'react-native'
import Loading from '../../components/loading'
import Header from '../../components/header'
import { getNewsContent } from '../../api'
import { screenSize } from '../../utils'
class WebPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            y: 0
        }
    }

    async componentDidMount() {
        let data = await getNewsContent(this.props.navigation.state.params.id)
        console.log(data)
        this.setState({
            data
        })
    }

    html() {
        let {css, body} = this.state.data
        css = css.map(item => `<link rel="stylesheet" type="text/css" href="${item}" />`)
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            ${css}
            <style>
            .main-wrap{
                padding-top: 45px
            }
            </style>
        </head>
        <body>
            ${body}
        </body>
        </html>`
        return html
    }
    _onMessage = (e) => {
        this.setState({
            y: -e.nativeEvent.data
        })
    }
    _injectJavaScript = () => {
        const script = `window.onscroll=function(){window.postMessage(document.body.scrollTop)}`
        return script
    }
    render() {
        let { data } = this.state
        if (!data) {
            return <Loading/>
        }
        let opacity = 1
        if (-this.state.y / 200 > 1) {
            opacity = 0
        } else {
            opacity = 1 + this.state.y / 200
        }
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Header
                    title=""
                    style={{width: screenSize().width, position: 'absolute', zIndex: 2, opacity: opacity}} />
                <View style={{ height: 250, width: screenSize().width, backgroundColor: '#fff', position: 'absolute', zIndex: 1, marginTop: this.state.y }}>
                    <Image source={{uri: data.image}} style={{ height: 250, width: null, position: 'relative', marginTop: -this.state.y + this.state.y * 0.3, top: 30 }}/>
                </View>
                <WebView
                    ref={webview => { this.webview = webview }}
                    onMessage={this._onMessage}
                    style={{flex: 1}}
                    source={{ html: this.html() }}
                    startInLoadingState
                    renderLoading={() => <Loading size="large" />}
                    injectedJavaScript={this._injectJavaScript()}
                />
            </View>
        )
    }
}

export default WebPage
