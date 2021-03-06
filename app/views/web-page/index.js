import React, { Component } from 'react'
import { WebView, View, Image, TouchableOpacity, Linking } from 'react-native'
import Loading from '../../components/loading'
import Header from '../../components/header'
import { getNewsContent } from '../../api'
import { screenSize } from '../../utils'
let lastY = 0
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
        let y = data.y

        if (y || y === 0) {
            let opacity
            if (y < lastY && y > 200) {
                opacity = 1
            } else {
                opacity = 1 - y * 0.005
            }

            this.headerComponent.header.setNativeProps({
                style: {
                    opacity: opacity
                }
            })
            lastY = y
        }

        if (this.state.data.image && (y || y === 0)) {
            this.imageWrap.setNativeProps({
                style: {
                    marginTop: -y
                }
            })
            this.image.setNativeProps({
                style: {
                    marginTop: y + (-y * 0.3)
                }
            })
        } else if (data.url) {
            Linking.openURL(data.url).catch(err => console.error('An error occurred', err))
        }
    }
    _injectJavaScript = () => `
        window.onscroll = function() { 
            window.postMessage( JSON.stringify( { y:document.body.scrollTop } ) ) 
        };
        var a = document.getElementsByTagName('a');
        for(var i = 0;i<a.length;i++){
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

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Header
                    ref={ref => (this.headerComponent = ref)}
                    renderLeft={() => <TouchableOpacity opacity={1} onPress={() => this.props.navigation.goBack()}><Image style={{width: 30, height: 30}} source={require('../../assets/images/abc_ic_ab_back_mtrl_am_alpha.png')}/></TouchableOpacity>}
                    title=""
                    style={{width: screenSize().width, position: 'absolute', zIndex: 2}} />
                {
                    data.image &&
                    <View ref={ref => (this.imageWrap = ref)} style={{ height: 250, width: screenSize().width, backgroundColor: '#fff', position: 'absolute', zIndex: 1 }}>
                        <Image ref={ref => (this.image = ref)} source={{uri: data.image}} style={{ height: 250, width: null, position: 'relative', top: 30 }}/>
                    </View>
                }
                <WebView
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
