import React, { Component } from 'react'
import { WebView, View, Image, TouchableOpacity, Linking } from 'react-native'
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
        let data = JSON.parse(e.nativeEvent.data)

        if (data.y) {
            this.setState({
                y: -data.y
            })
        } else {
            Linking.openURL(data.url).catch(err => console.error('An error occurred', err))
        }
    }
    _injectJavaScript = () => `
        window.onscroll=function(){window.postMessage(JSON.stringify({y:document.body.scrollTop}))};
        var a = document.getElementsByTagName('a');
        for(var i=0;i<a.length;i++){
            a[i].onclick = function (event) {
                if(this.href){
                    window.postMessage(JSON.stringify({url:this.href}));
                    event.preventDefault();
                }
            }
        }
    `

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
                    renderLeft={() => <TouchableOpacity opacity={1} onPress={() => this.props.navigation.goBack()}><Image style={{width: 30, height: 30}} source={require('../../assets/images/abc_ic_ab_back_mtrl_am_alpha.png')}/></TouchableOpacity>}
                    title=""
                    style={{width: screenSize().width, position: 'absolute', zIndex: 2, opacity: opacity}} />
                {
                    data.image &&
                    <View style={{ height: 250, width: screenSize().width, backgroundColor: '#fff', position: 'absolute', zIndex: 1, marginTop: this.state.y }}>
                        <Image source={{uri: data.image}} style={{ height: 250, width: null, position: 'relative', marginTop: -this.state.y + this.state.y * 0.3, top: 30 }}/>
                    </View>
                }
                <WebView
                    onMessage={this._onMessage}
                    style={{flex: 1}}
                    source={{ uri: this.html() }}
                    startInLoadingState
                    renderLoading={() => <Loading size="large" />}
                    injectedJavaScript={this._injectJavaScript()}
                />
            </View>
        )
    }
}

export default WebPage
