import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Home from '../views/home'
import Side from '../components/side'

const Router = DrawerNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        contentComponent: (props) => {
            return (<Side {...props} />)
        }
    }
)

export default Router
