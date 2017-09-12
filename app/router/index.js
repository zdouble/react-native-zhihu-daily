import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Home from '../views/home'
import Themes from '../views/themes'
import Side from '../components/side'

const Router = DrawerNavigator(
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

export default Router
