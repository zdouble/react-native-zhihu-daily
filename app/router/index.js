import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Home from '../views/home'
import Themes from '../views/themes'
import WebPage from '../views/web-page'
import Side from '../components/side'

const drawerNavigator = DrawerNavigator(
    {
        Home: {
            screen: Home
        },
        Themes: {
            screen: Themes
        }
    },
    {
        contentComponent: (props) => {
            return (<Side {...props} />)
        }
    }
)

const Router = StackNavigator(
    {
        Home: {
            screen: drawerNavigator
        },
        WebPage: {
            screen: WebPage
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            header: null
        }
    }
)

export default Router
