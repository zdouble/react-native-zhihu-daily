import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Home from '../views/home'
import Side from '../components/side'

const App = DrawerNavigator(
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

export default App
